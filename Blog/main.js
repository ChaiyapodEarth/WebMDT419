
var number = 0;
// var text = "need food";
var textclear = "Out put of your write.";

function funPost(){
 number = number +1;
 text = document.getElementById("text").value;
 console.log(number);
 if( number == 1)
 {
    Post1();
 }
 if( number == 2)
 {
    Post2();
 }
 if( number == 3)
 {
    Post3();
    reset();
    
 }

}

function reset(){
    number = null;
}

function Post1(){
    var asd = document.getElementById("result");
    asd.innerText = text;
}
function Post2(){
    var asd = document.getElementById("result2");
    asd.innerText = text;
}
function Post3(){
    var asd = document.getElementById("result3");
    asd.innerText = text;
}


function Clear(){
    var asd = document.getElementById("result");
    asd.innerText = textclear;
    var asd = document.getElementById("result2");
    asd.innerText = textclear;
    var asd = document.getElementById("result3");
    asd.innerText = textclear;
    reset();
}


