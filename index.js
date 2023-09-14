const fibs = (n) => {const fibArray = [0, 1]; while (fibArray.length < n) {fibArray.push(fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1]);}return fibArray;};
console.log(fibs(10));

