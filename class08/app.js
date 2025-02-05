// var skills = document.getElementsByName("skills");
// var box = document.getElementsByClassName("box")[0];
// // console.log(skills)
// function submit(){
// for(var val of skills){
//     // console.log(val.checked)
//     if (val.checked) {
//        box.innerText += val.value;
//     }
// }
// }



///PAssWord Generator
var password = document.getElementById("password");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var symbols = "!@#$%^&*()_-+=|\':;><,.{}[]";
var length = 12;
var all = upperCase + lowerCase + num + symbols;

function generatePass(){
var pass = "";
pass += upperCase[Math.floor(Math.random() * upperCase.length)];
pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
pass += num[Math.floor(Math.random() * num.length)];
pass += symbols[Math.floor(Math.random() * symbols.length)];

for(i = pass.length; i < length; i++){
    pass += all[Math.floor(Math.random() * all.length)];
}
password.value = pass;
}

function copyFun(){
    password.select();
    document.execCommand("copy")
}

console.log(Math.floor(Math.random() *2))
