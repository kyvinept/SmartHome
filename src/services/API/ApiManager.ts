export enum IPType {
  newDevice = '192.168.4.1',
}

export enum RequestType {
  get = 'GET',
  post = 'POST',
}

export enum RequestLink {
  setting = 'setting',
}

class ApiManager {
  private controller: AbortController | undefined;

  request = async <T>(
    ip: IPType | string,
    type: RequestType,
    params: {
      requestLink?: RequestLink;
      body?: Object;
    },
  ) => {
    this.controller = new AbortController();

    const url =
      'http://' + ip + '/' + (params.requestLink ? params.requestLink : '');

    setTimeout(() => {
      this.controller?.abort();
    }, 3000);

    return new Promise<T>((resolve, reject) => {
      fetch(url, {
        method: type,
        headers: {
          'Content-Type': 'application/json',
        },
        signal: this.controller?.signal,
        body: JSON.stringify(params.body),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((responseJson) => {
          console.log(responseJson);
          resolve(responseJson);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  cancelRequest = () => {
    this.controller?.abort();
  };
}

const apiManager = new ApiManager();

export default apiManager;
