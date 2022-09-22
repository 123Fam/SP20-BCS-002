// Arrow Function
// conventionl
// const hello=function(){
//     console.log("hello world");

// }
// const hello=()=>{   
//     console.log("hello world");

// };
// hello();
const sum=(a,b)=>a+b;
 console.log(sum(10,20));
// const hello_single=name=>{
//     console.log("hhh",name);
// };
// hello_single("kamran");
const obj_return=(a)=>{
   return{ a};
}
console.log(obj_return(6));
// rest operator
const sum_ind=(...args)=>{
    return args;
    // args.reduce((previous,current)=>{});


}
console.log(sum_ind(5,10,8,6,5,4,6,7));