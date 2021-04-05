import {observable, decorate, action} from 'mobx';
import StorageManager, {DataType} from 'services/StorageManager';

export default class ColorsStore {
  colors = ['#E9967A', '#FFD700', '#FFFF00', '#008000'];

  constructor() {
    this.getColors();
  }

  getColors = async () => {
    const colors = await StorageManager.retrieveData<string[]>(DataType.colors);
    if (colors) {
      this.colors = colors;
    }
  };

  onAddColor = (color: string) => {
    const colorsCopy = [...this.colors];
    colorsCopy.shift();
    colorsCopy.push(color);
    this.colors = colorsCopy;

    StorageManager.storeData(colorsCopy, DataType.colors);
  };
}

decorate(ColorsStore, {
  colors: observable,

  onAddColor: action,
});
