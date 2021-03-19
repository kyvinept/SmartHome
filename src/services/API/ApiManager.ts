export const request = async <T>(
  requestType: RequestType,
  params: {
    body?: Object;
    token?: string;
    headerParams?: Object;
    linkParams?: string[];
    needToHandleConnectionError?: boolean;
  },
  serverType: URLType = URLType.server,
) => {
  let headers: HeadersInit_ = {
    'Content-Type': getContentType(requestType),
  };

  const token = await retrieveData<string>(DataType.token);

  if (needAuthorization(requestType)) {
    headers = {...headers, Authorization: 'Bearer ' + token || ''};
  }

  let paramsString = '';
  if (params.headerParams) {
    for (const [key, value] of Object.entries(params.headerParams)) {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item != undefined) {
            paramsString += paramsString.length == 0 ? '?' : '&';
            paramsString += key + '=' + item;
          }
        });
      } else {
        if (value != undefined) {
          paramsString += paramsString.length == 0 ? '?' : '&';
          paramsString += key + '=' + value;
        }
      }
    }
  }

  const url =
    serverType +
    getRequestString(requestType, params.linkParams || []) +
    paramsString;
  console.log(url, getRequestType(requestType), headers, params);

  return new Promise<T>((resolve, reject) => {
    fetch(url, {
      method: getRequestType(requestType),
      headers,
      body: createBody(requestType, params.body),
    })
      .then((response) => {
        if (response.status == UnauthorizedError) {
          if (requestType != RequestType.signIn) {
            removeData(DataType.token);
            NavigationService.reset(
              NavigationActions.navigate({
                routeName: 'Auth',
              }),
            );

            setTimeout(() => {
              AlertHelper.showErrorAlert(strings.expiredSessionError);
            }, 1000);
          }
        } else if (
          response.status >= ServerSideError.from &&
          response.status <= ServerSideError.to
        ) {
          return;
        }

        return response
          .json()
          .then((data) => data)
          .catch(() => {
            return {title: undefined};
          });
      })
      .then((responseJson) => {
        console.log('responseJson', responseJson);
        if (!!responseJson.errors) {
          const title = responseJson.errors[0].title;
          const detail = responseJson.errors[0].detail;

          if (title == ServerError.queststatusdeleteError) {
            AlertHelper.showErrorAlert(strings.connectionError, () => {
              reject(ServerError.connectionError);
              NavigationService.popToTop();
            });

            return;
          }

          reject(ServerErrorManager.getErrorMessage(title, detail));

          return;
        }

        resolve(responseJson);
      })
      .catch((err) => {
        if (params.needToHandleConnectionError) {
          reject(ServerError.connectionError);
        } else {
          AlertHelper.showErrorAlert(strings.connectionError, () => {
            this.notifySubscribers();
          });
        }
      });
  });
};
