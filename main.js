function hide(variable1){
    let val1 = document.getElementById(variable1);
    if (val1.style.display !== "block"){
        val1.style.display = "block";
    }
    else{
        val1.style.display = "none";
    }
}

function verify(){
    var txt;
    if(confirm("Is Craig Wright a fraud?")){
        txt = "Success !";
        demo.style.background = "green";
        popup.style.display = "none";
        sensetivdata.style.display = "block";
    }
    else{
        txt = "Failed! Try again!";
        demo.style.background = "red";
        sensetivdata.style.display = "none";
    }
    document.getElementById("demo").innerHTML = txt;
}