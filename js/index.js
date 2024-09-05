console.log("hi");
fullname = "Tony Stark";
console.log(fullname);
// age=23;
isFollow = false;

// let age = 26;
//    age = 24;


//Creating block of code for re-updating the value of let variable.
{
 let age=23;
 console.log(age);

}

{
    let age=24;
    console.log(age);
}


// Date types

let name='swayam;'
console.log(name);

typeof(name);

//object
const student={
    fullname: "rahul kumar",
    age:25,
    cgpa:8.9,
    ispass:true,
};

student["age"] = student["age"]+1;
student["fullname"] = "rahul sharma";
student["cgpa"] = 9.5;
console.log(student["fullname"]);
console.log(student["age"]);
console.log(student["cgpa"]);


// object
const profile={
    fullname:"shardha khappra",
    isFollow: true,
    posts: "195posts",
    following: 4,
    followers: "585K",
    bio: "apna college{Ex: Microsoft,DRDO}"
};

console.log(profile);
