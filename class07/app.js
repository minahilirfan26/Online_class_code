// console.log(document.getElementById("input")

// function inputFun() {
//     var input = document.getElementById("input").value;
//     console.log(input)
// }

// var num = 0;  
// function img() {
//     if (num === 0) {
//         event.target.src = 'https://th.bing.com/th/id/OIG1.clHUuw_Z5tEPXWatEQhu';
//         num = 1;
//     }else{
//         event.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXQk5DLvdRYSxeNw-1TD92VUED9p9P3Ru_A&s';
//         num = 0;
//     }
// }


// var para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci ducimus aliquam, perspiciatis totam necessitatibus fugit quisquam, eum sapiente tempora nostrum explicabo aut vero illo? Ad mollitia, ullam recusandae aspernatur omnis non est explicabo repellat ipsum suscipit beatae sunt ipsam totam rem cupiditate quod? Similique ducimus, omnis doloremque nisi cum vel excepturi provident voluptas voluptatem veritatis quod! Recusandae adipisci ea at laboriosam? Enim beatae aliquam ducimus quo doloribus iure animi quae distinctio consequatur. Quo repellat distinctio molestiae aliquam cupiditate, reiciendis veniam cum unde alias ex officiis perferendis! Corporis ipsum similique perferendis cupiditate ad iusto reprehenderit eveniet eaque quibusdam aspernatur. Soluta!";

// var box = document.getElementById("box");
// box.innerHTML = para;
// function showMore() {

// var hideText = para.slice(0,40);
// box.innerText = hideText;
// }


// for(i = 0; i < 5; i++){
//     console.log(i)
//    if (i === 2) {
//     // console.log(i);
//     break;
//    }
// }


// for(i = 1; i <= 2; i++){

//     for(j = 1; j <= 3; j++){
//         console.log(i * j)
//     }
// }

// 1 2 3 2 4 6

// var age = 13;

// if (age < 20) {
//     alert("under");
// }else{
//     alert("over");
// }

// var arr = ["html", "css", "boostrap", "Javascript", "react js"];
// arr.push("react js")
// arr.pop()
// arr.shift();
// arr.unshift("index")

// arr.splice(1,0, "node js")
// console.log(arr)
// arr[1] = "CasCading style";
// console.log(arr[3])


// var fullName = "Minahil Irfan";
// console.log(fullName.slice(0,l))

// var frontend = prompt("enter your frontend skills");
// var backend = prompt("enter your backend skills");

// if (frontend === "html" || backend === "node js") {
//     console.log("uh r hired")
// }else{
//     console.log("uh r not hired")
// }

// if (frontend === "html") {
//     var backend = prompt("enter your backend skills");
//     if (backend === "node js") {
//         alert("uh r hired");
//     }else{
//         console.log("you r not hired")
//     }
// }else{
//    console.log("try again")    
// }


// var num = +prompt("enter your fav num");

// for(i = 1; i <= 10; i++){
//     console.log(num + " " + "x" + " " + i + " " + "=" + " " + num*i)
//               //   5         x           1         =          5*3
// }


// var input = document.getElementById("input");
// console.log(input.value)

// function submitBtn(){
//     var fileImg = document.getElementById("file");
//     var img = document.getElementById("img");
//     img.src = URL.createObjectURL(fileImg.files[0]);
//     img.style.display = "block";
//     // console.log(URL.createObjectURL(fileImg.files[0]));
    
// }

var list = document.getElementById("list");
var inputBox = document.getElementById("inputBox");
function addList(){
    console.log(event.keyCode)
if (event.keyCode === 13) {
   
    list.innerHTML += "<li>" + inputBox.value +"</li>"
    inputBox.value = "";
}
}

function addFun(){
    list.innerHTML += "<li>" + inputBox.value +"</li>"
    inputBox.value = "";
}

function delFun(){
    list.innerHTML = "";
}
