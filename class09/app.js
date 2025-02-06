var inputBox = document.getElementById("inputBox");
var list = document.getElementById("list");
var loader = document.getElementById("loader");
// console.log(inputBox)

function message(){
    // console.log(event.keyCode);
    if(event.keyCode === 13){
        list.innerHTML += "<li class='right'>"+ inputBox.value +"</li>";
        loader.style.display = "block";
        if(["hey","hi","hello"].indexOf(inputBox.value.toLowerCase()) != -1){
            setTimeout(function (){
                loader.style.display = "block";
                list.innerHTML += "<li class='left'>Hello</li>";
                
            }, 2000);
            setTimeout(function (){
                list.innerHTML += "<li>Hru</li>";
                loader.style.display = "none";
            }, 4000);
        }else if(["Am good", "gud", "good", "good & uh", "Alhamdulillah"].indexOf(inputBox.value.toLowerCase()) != -1){
            setTimeout(function (){
                loader.style.display = "block";
                list.innerHTML += "<li>how can i help you</li>";
                loader.style.display = "none";
            }, 2000);
        }else{
            setTimeout(function (){
                loader.style.display = "block";
                list.innerHTML += "<li>sorry i can't understand</li>";
                loader.style.display = "none";
            }, 2000);
        }
        inputBox.value = "";
    }
}

// function xyz(){
//     console.log("hello")
// }
// setTimeout(xyz,4000);