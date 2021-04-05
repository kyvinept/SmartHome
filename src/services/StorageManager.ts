import AsyncStorage from '@react-native-community/async-storage';

export enum DataType {
  devices,
  colors,
}

const storeData = async <T>(data: T, dataType: DataType) => {
  try {
    await AsyncStorage.setItem(dataType.toString(), JSON.stringify(data));
  } catch (error) {}
};

const retrieveData = async <T>(dataType: DataType) => {
  try {
    const value = await AsyncStorage.getItem(dataType.toString());

    if (value !== null) {
      return <T>JSON.parse(value);
    }
  } catch (error) {}
};

const removeData = async (dataType: DataType) => {
  try {
    AsyncStorage.removeItem(dataType.toString());
  } catch (error) {}
};

const clearAllData = async () => {
  AsyncStorage.getAllKeys().then((keys) => AsyncStorage.multiRemove(keys));
};

export default {storeData, retrieveData, removeData, clearAllData};
