/**
Debounced function with flush & cancel functions
flush: will immediately execute the callback
cancel: will cancel the callback

example:
const debounced = debounc(callback, 300); // debounced function

debounced() // will call the debounced function

debounced.cancel() // will cancel the debounced function, as a result inside callback function will not be eexecuted.
debounced.flush() // will immediately invoke inside callback function.
**/


export default function debounce(func, wait) {
  const context = this;
  let timer = null;
  let args = [];

  function execute(){
    if (!timer) return;
    clearTimeout(timer);
    timer = null;
    return func.apply(context, args);
  }

  function clearTimer() {
    clearTimeout(timer);
    timer = null;
  }

  function cancel(){
    clearTimer();
  }

  function debounced(){
    args = arguments;
    clearTimer();

    timer = setTimeout(execute, wait);
  }

  debounced.cancel = cancel;
  debounced.flush = execute;

  return debounced;
}
