/*
1! = 1
2! = 2*1
3! = 3*2!
4! = 4*3!
5! = 5*4!
n! = n * (n-1)!
*/




function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const myFactorial = factorial(5);
console.log(myFactorial);