import {
  NavigationActions,
  StackActions,
  NavigationContainerComponent,
  NavigationNavigateAction,
} from 'react-navigation';
import {Platform} from 'react-native';

let _navigator: NavigationContainerComponent;

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
  _navigator = navigatorRef;
}

function showTab(routeName: string, params: Object = {}) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function present(routeName: string, params: Object = {}) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function push(routeName: string, params: Object = {}) {
  console.log(routeName, params);

  _navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  );
}

function pop() {
  _navigator.dispatch(StackActions.pop({}));
}

function popToTop() {
  _navigator.dispatch(StackActions.popToTop());
}

function dismiss() {
  _navigator.dispatch(NavigationActions.back());
}

function replace(routeName: string, params: Object = {}) {
  _navigator.dispatch(StackActions.replace({routeName, params: params}));
}

function reset(action: NavigationNavigateAction) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [action],
    }),
  );
}

export default {
  showTab,
  push,
  present,
  reset,
  replace,
  pop,
  popToTop,
  dismiss,
  setTopLevelNavigator,
};
