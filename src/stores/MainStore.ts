import {observable, decorate} from 'mobx';

export default class MainStore {
  _inProgress: boolean = false;

  constructor() {}
}

decorate(MainStore, {
  _inProgress: observable,
});
