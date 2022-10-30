
// const circle = {
//     radius:1,
//     location: {
//       x:1,
//       y:1  
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };
    
// circle.draw(); 

// //Factory Function
// function createCircle(radius){
//     return  {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     }
// }

// const circle = createCircle(1);

// //Constructor function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const another = new Circle(1);

// function countBy(x, n) {

//     let z = Array(n).fill(1).map( (_, index) => (index + 1) * x);
//     console.log(z); 

//     return z;
// }

// function accum(s) {
//     return s.split('').reduce( (m, value, index, )=>{
//       let str = Array(index + 1).fill(value).join('').toLowerCase();
//       str = str[0].toUpperCase() +  str.substring(1);
//       return index == 0 ? m + str : m + '-'+ str;
//     },'');
// }
// let result =accum('Hola')
// console.log(result)

// const binaryArrayToNumber = arr => {
//     return arr.reverse().reduce( ((s, v, i) => s + v * (2**i)) , 0)
//  };

// let arr = [1,0,1];
// console.log(binaryArrayToNumber(arr));


// function descendingOrder(n){
//     return parseInt(n.toString().split('').sort((a, b)=> b-a).join(''))
// }

// console.log(descendingOrder(4321))

// var countSheep = function (num){
//     return Array.from({length: num}, (v, k)=> `${k+1} sheep...`).join('');
// }

// console.log(countSheep(2));

// function getSum( a,b )
// {
//   if(a===b) return a;

//   const [min, max] = [a , b].sort((x,y)=> x-y);

//   let sum = 0;
//   for(let i = min ; i <= max ; i++){
//     sum+= i;
//   };
//   return sum;
// }

// console.log(getSum(-3, -1));

// function sumDigPow(a, b) {
//  result = [];
//  for(let i = a; i <= b; i++){
//    const digits = String(i).split('');
//    let checkSum = digits.reduce((s, v, i)=> s + parseInt(v)**(i+1), 0); 
//    if(checkSum === i ) result.push(i)   
//  }
//  return result;  
// }

// console.table(sumDigPow(1,100));

// function digPow(n, p){
//     const sum = (''+n).split('').reduce((acc, curr, index)=>{
//       return acc + parseInt(curr)**(p + index)
//     },0);
//     return sum % n == 0 ? sum / n : -1;
// }

// console.log(digPow(89, 1));

// var maxSequence = function(arr){
//     let maxSum = 0;
//     arr.forEach((v,i,a) =>{
//          let arrSlicedStart = a.slice(i);
//          console.log(arrSlicedStart);
         
//          arrSlicedStart.forEach( (v,i,a)=>{
//             let arrSlicedEnd = a.slice(0,a.length -i);
//             console.log(arrSlicedEnd);
//             let sumCandidate = arrSlicedEnd.reduce((s,v)=>s+v);
//             console.log(sumCandidate);
//             if(sumCandidate > maxSum) maxSum = sumCandidate ;

//         });
//     });
//     return maxSum;
// }
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSequence(arr));

// function sumTwoSmallestNumbers(numbers) {  
//     return numbers.sort((a,b)=>a-b).slice(0,2).reduce((s,a)=>s+a);
//     // return numbers.sort((a,b)=>a-b);
// }
// const numbers = [19, 5, 42, 2, 77];
// console.log(sumTwoSmallestNumbers(numbers));


// function order(words){
//     let arr = words.split(' ').sort( (a,b) =>{
//         return a.match(/(\d)/g)[0] - b.match(/(\d)/g)[0];
//     });
//     return arr.join(' ');
//     // console.log( arr[0].match(/(\d)/g) );
// }

// let words = 'is2 Thi1s T4est 3a'
// console.log(order(words));


// function findNextSquare(sq) {
//     // Return the next square if sq is a perfect square, -1 otherwise
//     let side = Math.sqrt(sq);
//     return side % 1 !== 0 ?  -1 : (++side)**2 ;
// }

// console.log(findNextSquare(144))

// function findOdd(A) {

//     let keys = Array.from(new Set(A));
//     console.log(keys);

//     for( i=0; i<keys.length; i++ ){
//         let count = A.reduce((s,v)=> v==keys[i] ? s+1 : s, 0);
//         if(count%2 ===1) return keys[i]
//     }
//     return -1

// }
// console.log(findOdd([1,1,2]));

// function deleteNth(arr,n){
//     let counter = {};
//     let result = [];
//     for(let item of arr ){
//     //     console.log(Object.keys(counter))
//     //     console.log(item)
//     //     console.log(!Object.keys(counter).includes(item.toString()))
//         if(!Object.keys(counter).includes(item.toString())){
//             counter[item] = 1;
//         }else{
//             counter[item]++;
//         }
//         if(counter[item] <= n){
//             result.push(item);
//         }
//         // console.log(counter);
//     }
//     // console.log(counter);
//     return result;
// }

// const arr = [1,2,3,1,2,1,2,3];
// console.log(deleteNth(arr,2));

// function findEvenIndex(arr)
// {
//     for(let i=0; i<arr.length; i++){
//         const arrayLeft = arr.slice(0,i);
//         const arrayRight = arr.slice(i+1);
//         // console.log(arrayLeft , arrayRight);
//         let sumLeft = arrayLeft.reduce((s,a)=>s+a,0);
//         let sumRight = arrayRight.reduce((s,a)=>s+a,0);
//         console.log(sumLeft , sumRight , i)
//         if(sumLeft === sumRight) return i;
//     }
//     return -1;
// }

// let arr = [1,2,3,4,3,2,1];
// console.log(findEvenIndex(arr));


// function expandedForm(num) {
//     let len = num.toString().length
//     result = Array.from({length: len}, (v,k)=>{
//         aux = num;
//         num = Math.floor(num/10);
//         return aux%10*10**k;
//     } ).reverse().join(" + ");
//     return result;
// }
// const num = 12;
// console.log(expandedForm(num));

// function findNb(m) {
//     const limit = Math.pow(m, 1/2)
//     let sum = 0;
//     console.log(limit);
//     for ( let i = 1; i < limit; i++){
//         const sum = i**2 * (i+1)**2 / 4;
//         if(sum === m ) return i;

//     }
//     console.log(sum)
//     return (-1)
// }

// console.log(findNb(1071225))


// let n = 0;
// function persistence(num) {
//   n++;
//   let mult = num.toString().split('').reduce((s,v)=>s*v,1);
// //   console.log(mult);
//   return mult > 9 ? persistence(mult) : n;
// }

// console.log(persistence(39));

// function persistence(num) {
//     let n = 0;
//     let mult = 10;
//     while(mult > 9){
//      mult = num.toString().split('').reduce((s,v)=>s*v,1);
//      num = mult; 
//      n++
//     }
    
//   //   console.log(mult);
//     return n;
// }
// console.log(persistence(39));

// function queueTime(customers, n) {
//     lines = Array.from({length: n}, (v,i)=>{
//       return {
//         clientQ: [],
//         sum: 0
//       }
//     })
//     customers.forEach(element => {
//         minTile = lines.reduce((s,a) => s.sum > a.sum ? a : s)
//         minTile.clientQ.push(element);
//         minTile.sum += element;
//         // console.log(minTile)
//     });
//     console.log(lines);
//     return lines.reduce((s,a) => s.sum > a.sum ? s : a).sum        


    
// }

// console.log(queueTime([2,3,10], 2))

// function highAndLow(numbers){
//     // console.log((/.*[^\s]/).test(numbers));
//     if(!(/\s/).test(numbers)) {
//         return (numbers+' '+numbers)
//     };
//     numbers = numbers.split(' ').sort((a,b)=>a-b)
//     return numbers.pop()+' '+numbers.shift()
// }

// console.log(highAndLow('42'))
// console.log(highAndLow('42 3'))

// function sortArray(array) {
//     console.log(array);
//     const arrayOdd = array.filter(a=>a%2!==0).sort((a,b)=> a-b);
//     console.log(arrayOdd);
//     let j = 0;
//     for(let i=0; i<array.length; i++){
//         if(array[i]%2!==0){
//             array[i] = arrayOdd[j];
//             j++;
//         }
//     }
//     return array;
// }

// const a = [5, 8, 6, 3, 4];
// b = [
//     5, 3,  2, 8,
//     1, 4, 11
//   ];
// c = [
//     -26,   5,  49, -29, -50,  47, -23,
//     -45, -10, -11, -16,  -3,  20, -43,
//      32, -31,   2,  -4, -26, -34, -13,
//      29
//   ]
// console.log(sortArray(c));


// function add(a, b) {

//     let bArr = b.split('');
//     let aArr = a.split('');
//     let resultArr = [];
//     const max = bArr.length > aArr.length ? bArr : aArr;
//     const min = bArr.length > aArr.length ? aArr : bArr;
//     let reminder = 0;
//     for(i = 0 ; i <= max.length ;i++){
//         let result = getelement(max[max.length-1-i]) + getelement(min[min.length-1-i]) + reminder;
//         reminder = Math.floor(result/10);
//         console.log( i , reminder)
//         resultArr.unshift( String(result%10));
//     }
//     let resultstr = resultArr.join('');
//     return resultstr[0] === '0'? resultstr.slice(1) : resultstr;
// }   
// function getelement(a){
//     return a ? Number(a) : 0;
// }

// console.log(add("99", "69"))

// function SeriesSum(n)
// {
// //   Array.from({length: n}, (v, i)=> (1/(3*i+1)).reduce((s,v)
//     let sum = 0;
//     for(let i = 0; i< n; i++){
//         sum += 1/(3*i+1);
//     }
//     sum2 = Math.round(sum * 100)/100
//     return sum2%1 === 0 ? sum2.toString() + '.00' :
//            (sum2*10)%1 === 0 ? sum2.toString() + '.0' : sum2.toString(); 

// }

// var uniqueInOrder=function(iterable){

    
//   }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// function solution(string) {
//     // const rg = /[a-z]+/   
//     // const rg = /([A-Z][a-z]+)/g   
//     const rg = /([a-z]+|[A-Z][a-z]+)/g   
//     const arr = string.match(rg);
//     console.log(arr);
//     return arr.join(' ');
// }

// //  const string = 'camelCasing'
//  const string = 'camelCasingTest'
//  console.log(solution(string))

// function getCount(str) {
//     const rg = /[aeiou]/g
//     const arr = str.match(rg);
//     // console.log(arr);
//     return arr ? arr.length : 0;
// }

// const str = 'abracadabra';
// console.log(getCount(str));
// console.log(getCount(str));

// String.prototype.isUpperCase = function() {
//     console.log(this.toUpperCase() );
//     console.log(this.valueOf() );
//     // console.log(this[PrimitiveValue]);
    
//     console.log(this.toUpperCase() === this.toString() );
// }

// // const str = 'AAAA';
// // str.isUpperCase();

// function wave(str){
//   let arr = [];
//   for(let i = 0 ; i < str.length ; i++){
//     let upper = str[i].toUpperCase();
//     if(upper !== ' '){
//         let first = str.slice(0,i)
//         let last = str.slice(i+1)
//         arr.push(first + upper + last);
//     }
//   }
//   return (arr);
// }

// function wave2(str){
//     let result = [];
    
//     str.split("").forEach((char, index) => {
//         if (/[a-z]/.test(char)) {
//             result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
//         }
//     });
    
//     return result;
// }

// console.log(wave('hello'))
// console.log(wave2('hello'))
// console.log(wave2('hello')==wave('hello'))


// function disemvowel(str) {
    
//     return str.replace(/[aeiou]/gi , '');
// }
// const str ='This website is for losers LOL!';
// console.log(disemvowel(str));

// function dist(v, mu) {
//     const g = 9.81								// suppose reaction time is 1
//     return v*v / (2*mu*g) * (1000/3600)**2 + v*1 * 1000/3600;
// }

// console.log(dist(100, 0.7))
// const d = dist(100, 0.7)
// console.log(d)
// function speed(d, mu) {								// suppose reaction time is 1
//     const g = 9.81	;
//     const alpha = (1000/3600)**2;
//     const beta = (1000/3600)*2*mu*g;
//     const c = -2*mu*g*d;
//     const det = (beta**2 -4*alpha*c)**(1/2);
//     const v = ( -beta + det ) / ( 2 * alpha);
//     return v;
// }

// console.log(speed(d, 0.7))

// function isPangram(string){
//     let letters = 'abcdefghijklmnopqrstuvwxyz'
//     letters = letters.split('');
//     //const arr = string.split('')
//             //.filter( a=> a !==' ')
//     // console.log(arr);
//     return letters.every( v => {
//         return string.toLowerCase().includes(v);
//     })

// }
// function isPangram(string){
//     const letters = string.toLowerCase().match(/[a-z]/g);  
//     console.log(letters)
//     const alphabet = [...new Set(letters)]
//     return alphabet.length === 26;
// }
// const str= 'The quick brown fox jumps over the lazy dog.'
// console.log(isPangram(str))
// console.log(str.includes('T'))

// class Dog{
//     constructor(name, species, size){
//         this.name = name;
//         this.species = species;
//         this.size = size;
//     }
//     bark(){
//         return this.size > 60 ? 'Grrr! Grrr!' : 'Woof! Woof!';
//     }
// }


// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// function calculateYears(principal, interest, tax, desired) {
//     if(principal >= desired) return 0;
//     const p2 = principal * (1+ interest*(1 - tax))
//     return p2 > desired ? 1 : 1 + calculateYears(p2, interest , tax, desired)
// }
// console.log(calculateYears(1000 , 0.05 , 0.18, 1100))

// function upArray(arr){
//     if( arr.length === 0 ) return null
//     for ( val of arr){
//         if(val < 0 || val > 9) return null
//     }
//     const result = arr.slice(0);
//     let digit = result[result.length -1] + 1 ;
//     let reminder = Math.floor(digit/10);
//     digit = digit%10;
//     result[result.length -1] = digit;
//     for( i = result.length - 2 ; i >= 0 ; i-- ){
//         if( reminder === 0) break;
//         digit = result[i] + reminder;
//         reminder = Math.floor(digit/10);
//         digit = digit%10;
//         result[i] = digit;
//     }
//     if(reminder != 0 ) result.unshift(reminder);
//     return result

// }




// // const arr = [4, 3, 2, 5];
// const arr = [ 9, 9, 9];
// console.log(upArray(arr))

// function arithmetic(a, b, operator){
//     switch( operator){
//             case 'add': return a+b;
//             case 'substract': return a-b;
//             case 'multiply': return a*b;
//             case 'divide': return a/b;
//     }
// }

