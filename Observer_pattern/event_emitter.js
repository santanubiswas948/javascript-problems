/**
In the observer pattern (also commonly known as the publish-subscribe model), we can observe/subscribe to events emitted by publishers and execute code whenever an event happens.
Implement an EventEmitter class similar to the one in Node.js that follows such an observer pattern.
**/

export default class EventEmitter {
  constructor() {
    this.observers = {};
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  on(eventName, listener) {
    if (eventName in this.observers) {
      this.observers[eventName].push(listener);
    } else {
      this.observers[eventName] = [listener];
    }

    return this;
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  off(eventName, listener) {
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

  /**
   * @param {string} eventName
   * @param  {...any} args
   * @returns {boolean}
   */
  emit(eventName, ...args) {
    if (this.observers.hasOwnProperty(eventName)) {
      this.observers[eventName]?.forEach((func) => func(...args));
      return true;
    }
    return false;
  }
}
