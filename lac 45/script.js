//array creation
let n = [1, 2, 3, 4, 5];
console.log(n);
                                        //array insertion
                                 //m1
n.push(9);
  console.log(n);
                                 //   m2
  n.unshift(0);
  console.log(n);
                                 //   m3
  n.splice(3,2,'a','b',67,'89');
  console.log(n);

                                        //searching
                    //m1
//   console.log(n.indexOf(2));
  console.log(n);
                        //m2
// n.indexof(2,1);
// 
  console.log(n);

                                     //removing elements
console.log(n);
                                 //m1
n.pop();
console.log(n);
                                 //m2
n.shift();
console.log(n);
                                 //m3
n.splice(2, 1);
console.log(n);

console.log(n);
n.length=0;
// console.log(n.splice(0,length))=[];
while(n.length>0)
{
    n.pop();
  //do not use here but whyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy  // n.length--;
}
console.log(n);



                                        //combineding
let a=[55,56,57,58,59];
let b=[60,61,62,63];
let combined=a.concat(b);
console.group(combined);
                                        //slicing
                                        //m1
let sliced=combined.slice(3,6);
console.group(sliced);
                                        //m2
let sliced2=combined.slice(3);
console.group(sliced2);
                                        //m3
let sliced3=combined.slice();
console.group(sliced3);



                                          //spread operator
let g=[55,56,57,58,59];
let h=[60,61,62,63];
let c=[...g,...h];
console.group(c);
let x=[...g,true,3,'4',...h];
console.group(x);
let y=[...x];
console.group(y);



                                        //printing usinng for of loop
for(let value   of n){console.log(value);}
                                       //printing usinng for each loop                       //whyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
// n.forEach(fuction(nu){console.log(nu);})





                                        //joining array 
const joined1=n.join(',');
console.log(joined1);
const joined2=n.join('=');
console.log(joined2);
const joined3=n.join(' g ');
console.log(joined3);



                                        //spliting array 

let m="this is my third program of javasript"
let q=m.split(' ')
console.log(q);
let r=m.split('')
console.log(r);
let s=m.split('i')
console.log(s);




                                        //filtering array

let A=[3,4,-8,0,67];

//???????????????????????????????????????not run
let B=A.filter(function(value){return value>=0;})
// let B=A.filter(value=> return value >=0);
console.log(B);




                                           //mapping array
let t=[40,41,42,43,44,45];
let u=t.map(function(value){return 'student_no_'+value;})
console.log(u);
