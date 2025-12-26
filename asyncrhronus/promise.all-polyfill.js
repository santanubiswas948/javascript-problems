/**
Polyfill for promise.all method
<Best approach>
**/
Promise.__proto__.mockAll = (arr) => {
  const ans = [];
  let count = 0;
  return new Promise((resolve, reject) => {
      if (arr.length === 0) resolve(arr);
      for(let i = 0; i<arr.length; i++) {
        Promise.resolve(arr[i]).then((res) => {
          ans[i] = res;
          if (++count === arr.length) {
            resolve(ans);
          }
        }).catch((err) => {
          reject(err);
        });
      }
  });
}

/**
Another approach using async await : <Not the good approach>
but this approach is not good because here until current async process doesn't complete, next one doesn't start.
Due to this, total completetion time takes more than than the above approach 
**/

Promise.__proto__.mockAll = (arr) => {
  const ans = [];
  return new Promise(async (resolve, reject) => {
      try {
          for(let i = 0; i<arr.length; i++) {
            const res = await Promise.resolve(arr[i]);
            ans[i] = res;
          }
          resolve(ans);
      } catch(err) {
          reject(err);
      }
  });
}
