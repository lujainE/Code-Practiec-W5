function myFunction() {
    alert("To move between slids click on the dots");
}


const close = document.getElementById('closebtn');
//var content2 = document.getElementsByClassName('content2');
var content2 = document.getElementById("content2");


function content2Display(){
    //content2.style.dispaly='none';
    content2.classList.add("display-none");

}
close.addEventListener('click',content2Display);


var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide-row");

btn[0].onclick = function(){
    slide.style.transform = "translatex(0px)";
    for(i=0; i<6;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    slide.style.transform = "translatex(-800px)";
    for(i=0; i<6;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    slide.style.transform = "translatex(-1600px)";
    for(i=0; i<6;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[3].onclick = function(){
    slide.style.transform = "translatex(-2400px)";
    for(i=0; i<6;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[4].onclick = function(){
    slide.style.transform = "translatex(-3200px)";
    for(i=0; i<6;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[5].onclick = function(){
    slide.style.transform = "translatex(-4000px)";
    for(i=0; i<6;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}