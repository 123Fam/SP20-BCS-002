function student(name,std_class,gpa){
    this.name=name;
    this.std_class=std_class;
    this.gpa=gpa;
    
}
function Lab(){
   let s1=new student("Ali",9,3.2);
   let s2=new student("Malaika",7,3.2);
   let s3=new student("Zoya",4,3.9);
   
   console.log("First Student")
   console.log(s1.name)
   console.log("--------------")
   console.log(" Second Student ")
   console.log(s2.name)
   console.log("--------------")
   console.log("Third  Name")
   console.log(s3.name)
   console.log("--------------")
   console.log("First Student Data")
   console.log(s1)
   console.log("--------------")
   console.log("second Student Data")
   console.log(s2)
   console.log("--------------")
   console.log("Third  Name Data")
   console.log(s3)
   console.log("--------------")
   return [s1,s2,s3];
}

let students= Lab();

var new_arr =students.filter(function (e1){
    return e1.gpa>3
});
console.log("Students with GPA Above 3")
console.log(new_arr)



