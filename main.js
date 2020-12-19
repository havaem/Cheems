let i=0;
function changeImage() {
    document.getElementById('example').src="./img/hitcheems2.png";
    var audio = new Audio('sound.mp3');
    audio.play();
    setTimeout(return_2, 100)
    i++;
    check();
    console.log(i);
}

function return_2() {
    element=document.getElementById('example');
    element.src="./img/hitcheems.png";
}
function check(){
    var myElement = document.getElementById("text");
    document.getElementById("text").innerHTML = i;
    if(i==55){
        document.getElementById("text").innerHTML = "Chó Nhân";
    }
    if(i>=20){
        myElement.style.background=" rgb(255, 102, 0)";
        myElement.style.fontSize="55px";
    }
    if(i>=40){
        myElement.style.background=" rgb(40, 197, 53)";
        myElement.style.fontSize="70px";
    }
    if(i>=100){
        myElement.style.background="rgb(0, 140, 255)";
        myElement.style.fontSize="85px";
    }
}
