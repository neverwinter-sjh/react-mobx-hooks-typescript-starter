import { observable } from 'mobx';

const store = observable({
  object: {},
  number: 1,
  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
  setObject(payload) {
    this.object = payload;
  }
});

export { store };