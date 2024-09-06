
// Arithmetic Operators
let a = 10;
let b = 2;

console.log("a+b= ",a+b);
console.log("a-b=",a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a%b=", a%b);
console.log("a**b=", a**b);


//Unary operators
{
    let a=6;
    let b=7;

    a++;
    b--

    console.log("a: ",a + "b: ",b);
    console.log(a++);
    console.log(b--);

}



//Coditional operators

let mode = "dark";
let color;

if(mode==="dark"){
    color = "black";
}

// if(mode==="white"){
//        color="white";
// }

else{
    color="white";
}

console.log(color);

// Prompt
let num = prompt("Enter the number: ");

if(num%3==0){
    console.log(num,"is a multiple of 3");
}

else{
    console.log(num,"is not a multiple of 3");
}

let score = prompt("Enter your score 0-100: ");
let grade;

if(score >=90 && score<= 100){
   grade = "A";
}
else if(score>=70 && score<=89){
    grade = "B";
}
else if(score>=60 && score <=69){
    grade = "C";
}
else if(score>=50 && score<=59){
    grade = "D";
}
else if(score>=0 && score<=49){
    grade = "E"
}

console.log("According to your scores, your grade was: "+ grade);

