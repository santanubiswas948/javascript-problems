/**
Implement throttle
**/

function throttle(callback, wait = 100){
  let timer;
  return function(){
    if (timer) return;
    
    callback.apply(this, arguments);
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
    }, wait);
  }
}
