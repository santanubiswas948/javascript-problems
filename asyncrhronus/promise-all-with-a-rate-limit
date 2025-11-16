/**
Problem: Promise.all with rate limit
Implement a Promise.all method with few constraints.

For example, iterators can be a huge inside Promise.all then if we call all promisese inside iterators simultaneously,
it could be millions of async calls which can't process in one short & will not work, rather than we will use one chunk size of K where
k max async processes can be called simultaneously.
**/


// approach 1: Not the best one because we are not utilizing process time properly.
// Completion time increased because after current chunk completes then next chunk start processing. so, 
// it could be one usecase where maybe only one process executing time taking so long and other process got completed inside in one chunk
// So, in that moment simultaneously only one call is happening not max of chunk size K.
Promise.__proto__.mockAll = (arr) => {
  const ans = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    for(let i = 0; i<arr.length; i++) {
      Promise.resolve(arr[i]).then((res) => {
        ans[i] = res;
        count++;
        if (count === arr.length) {
          resolve(ans);
        }
      }).catch(reject);
    }
  });
}
Promise.__proto__.mockAllWithSize = (arr, chunkSize) => {
  const ans = [];
  let count = 0;
  
  return new Promise(async (resolve, reject) => {
      for(let i = 0; i<Math.ceil(arr.length/chunkSize); i++) {
        try {
          const start = i*chunkSize;
          const end = start + chunkSize;
          const res = await Promise.mockAll(arr.slice(start, end));
          ans.push(res); 
        } catch(err) {
          reject(err);  
        }
      }
  });
  
}
