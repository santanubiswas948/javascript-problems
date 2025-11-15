/**
Debounce function
**/
export default function debounce(func, wait) {
  let timer;

  return function(){
    const context = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => func.apply(context, arguments), wait);
  }
}
