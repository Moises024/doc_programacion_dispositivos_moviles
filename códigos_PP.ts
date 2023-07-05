/** Solución de los problemas propuestos */

/** Problema 1 */

/** Solución: */

function countUniqueSteps(N: number, X: number[]): number {
    const memo: number[] = [1];

    for (let i = 1; i <= N; i++) {
        memo[i] = X.reduce((total, x) => i - x >= 0 ? total + memo[i - x] : total, 0);
    }

    return memo[N];
}

function printUniqueSteps(N: number, X: number[]): void {
    const uniqueSteps = countUniqueSteps(N, X);
    console.log(`\nNúmero de formas únicas para subir la escalera es: ${uniqueSteps}`);
    
    console.log("Formas para subir la escalera:");
    generateUniqueSteps(N, X, "");
}

function generateUniqueSteps(N: number, X: number[], path: string): void {
    if (N === 0) {
        console.log(path);
        return;
    }
    
    X.forEach(x => {
        if (N - x >= 0) {
            generateUniqueSteps(N - x, X, path + x + " ");
        }
    });
}

const N1: number = 4;
const X1: number[] = [1, 2];
printUniqueSteps(N1, X1);

const N2: number = 6;
const X2: number[] = [1, 3, 5];
printUniqueSteps(N2, X2);




/** Problema 2 */

/** Solución: */

function shortestDist(s: string, c: string): number[] {
return s.split('').map((char, i) => {

if (char === c) {

  return 0;
} else {

  const indices = s.split('').reduce((acc, curr, j) => {
  
    if (curr === c) {
    
      acc.push(j);
    }
    return acc;
    
  }, []);
  
  return Math.min(...indices.map((index) => Math.abs(i - index)));
}
}); }

const s: string = 'helloworld'; 
const c: string = 'l'; console.log(shortestDist(s, c));




/** Problema 3 */

/** Solución: */

function smallest_subarray_sum(arr: number[], S: number): number {

let windowStart = 0;
let windowSum = 0;
let minLength = Infinity;

for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
windowSum += arr[windowEnd];

while (windowSum >= S) {
  minLength = Math.min(minLength, windowEnd - windowStart + 1);
  
  windowSum -= arr[windowStart];
  windowStart++;
}
} return minLength === Infinity ? 0 : minLength; }

console.log(smallest_subarray_sum([2, 1, 5, 2, 3, 2], 7));
console.log(smallest_subarray_sum([2, 1, 5, 2, 8], 7));
