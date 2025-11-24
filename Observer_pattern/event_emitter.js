/**
Implement EventEmitter class based on Observer Pattern to subscribe/publish events
**/

export default class EventEmitter {
  constructor() {
    this.observers = {};
  }

  add(eventName, listener) {
    if (eventName in this.observers) {
      this.observers[eventName].push(listener);
    } else {
      this.observers[eventName] = [listener];
    }

    return this;
  }
  remove(eventName, listener) {
    if (this.observers.hasOwnProperty(eventName)) {
      const allSameEventWithSameListeners = this.observers[eventName]?.filter(
        (func) => func === listener,
      );
      allSameEventWithSameListeners.pop();
      this.observers[eventName] = this.observers[eventName]
        ?.filter((func) => func !== listener)
        .concat(allSameEventWithSameListeners);
      if (this.observers[eventName].length === 0) {
        delete this.observers[eventName];
      }
    }

    return this;
  }

  notify(eventName, ...args) {
    if (this.observers.hasOwnProperty(eventName)) {
      this.observers[eventName]?.forEach((func) => func(...args));
      return true;
    }
    return false;
  }
}
