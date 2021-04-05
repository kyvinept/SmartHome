import {
  Alert,
  AlertButton,
  AlertOptions,
  AlertStatic,
  AlertType,
} from 'react-native';
import strings from 'translations';

class AlertHelper implements AlertStatic {
  private isAlertShown = false;

  alert(
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions,
  ) {
    const alertButtons = buttons?.map((button) => {
      const onButtonPress = button.onPress;
      const onPress = () => {
        setTimeout(() => {
          this.isAlertShown = false;
        }, 500);
        onButtonPress && onButtonPress();
      };

      button.onPress = onPress;
      return button;
    });

    if (!this.isAlertShown) {
      this.isAlertShown = true;

      Alert.alert(title, message, alertButtons, options);
    }
  }

  prompt(
    title: string,
    message?: string,
    callbackOrButtons?: ((text: string) => void) | AlertButton[],
    type?: AlertType,
    defaultValue?: string,
    keyboardType?: string,
  ) {
    Alert.prompt(
      title,
      message,
      callbackOrButtons,
      type,
      defaultValue,
      keyboardType,
    );
  }

  showErrorAlert = (
    errorMessage: string,
    okAction: (() => void) | undefined = undefined,
  ) => {
    let ok: AlertButton = {
      style: 'default',
      text: strings.ok,
      onPress: okAction,
    };

    this.alert(strings.error, errorMessage, [ok]);
  };

  showInformAlert = (
    message: string,
    okAction: (() => void) | undefined = undefined,
  ) => {
    let ok: AlertButton = {
      style: 'default',
      text: strings.ok,
      onPress: okAction,
    };

    this.alert('', message, [ok]);
  };
}

const alertHelper = new AlertHelper();
export default alertHelper;
