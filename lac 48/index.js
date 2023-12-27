//event target
// 1. addeventlistner
// 2. removeeventlistner
// 3. displaytheevent


              ///// 1. addeventlistner
// document.addEventListener('click' , Function);
// function Function()
// {
//     console.log("hello doubled");
// }
// console.log("hello");
// let a=document.querySelector('#pdiv1')
// console.log(a);
// a.addEventListener("click", myFunction);

// function myFunction() {
//     console.log("hello ggggg");
// }

//                   //////////////////// 2. removeeventlistner
// function myFun() {
//     console.log("welcome buddy...!!!!");
// }
// let b=document.querySelector('#pdiv1')
// document.addEventListener('click',myFun)
// document.removeEventListener('click',myFun2)



////////////////////////the event of object


// let b=document.querySelector('#adiv')
// console.log(b)
// b.addEventListener('click' , Function);
// function Function(event)
// {
//     console.log("hello doubled");
// }
// console.log(Event)
// b.preventDefault();


/////////////////////////////the defult action
// let c=document.querySelector('#adiv')
// console.log(c)
// c.preventDefault();




////////////////////avoid too many event

// let mydiv=document.createElement('div')
// // console.log("hoii")
// for(let i=1;i<=100;i++)
// {
//     let newElemnet=document.createElement('p')
//     newElemnet.textContent="this is para "+i;
//     newElemnet.addEventListener('click',function(event)
//     {
//         console.log("i have clicked on para");
//     })
//     mydiv.appendChild(newElemnet);
// }
// document.body.appendChild(mydiv);

// console.log("hoii")




//?????????????????????????////////////////////////////////////////target property
// let mydiv3=document.createElement('div')
// // console.log("hoii")
// for(let i=1;i<=100;i++)
// {
//     let newElemnet=document1.createElement('p')
//     console.log('para'+event.target.textcontent)
//     newElemnet1.addEventListener('click',function(event)
//     {
//         console.log("i have clicked on para");
//     })
//     mydiv3.appendChild(newElemnet1);
// }
// document.body.appendChild(mydiv3);