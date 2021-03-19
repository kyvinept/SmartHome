import {
  NavigationActions,
  StackActions,
  NavigationContainerComponent,
  NavigationResetActionPayload,
  NavigationNavigateAction,
} from 'react-navigation';
import {Platform} from 'react-native';
import QuestyStore from 'stores/questyStore';
import {Type} from 'stores/questiesStore';

let _navigator: NavigationContainerComponent;

let stack: Array<string> = [];
let onChangedStackAction: (stackLength: number) => void;

function setStackListener(onChangedStack: (stackLength: number) => void) {
  onChangedStackAction = onChangedStack;
}

function getCurrentStack() {
  console.log(stack);

  return stack;
}

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
  stack.unshift(routeName);
  onChangedStackAction && onChangedStackAction(stack.length);

  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function push(routeName: string, params: Object = {}) {
  stack.unshift(routeName);
  onChangedStackAction && onChangedStackAction(stack.length);

  _navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  );
}

function pop() {
  stack.shift();
  onChangedStackAction && onChangedStackAction(stack.length);

  _navigator.dispatch(StackActions.pop({}));
}

function popToTop() {
  _navigator.dispatch(StackActions.popToTop());
}

function dismiss() {
  stack.shift();
  onChangedStackAction && onChangedStackAction(stack.length);

  _navigator.dispatch(NavigationActions.back());
}

function replace(routeName: string, params: Object = {}) {
  stack.shift();
  stack.unshift(routeName);
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

function showResetPasswordScreen(token: string) {
  if (stack.length > 0 && stack[0] == 'ForgotPasswordConfirmation') {
    setTimeout(
      () => {
        replace('ResetPassword', {
          resetToken: token,
        });
      },
      Platform.OS == 'android' ? 500 : 0,
    );
  }
}

export default {
  showTab,
  showResetPasswordScreen,
  push,
  present,
  reset,
  replace,
  pop,
  popToTop,
  dismiss,
  setTopLevelNavigator,
  getCurrentStack,
  setStackListener,
};
