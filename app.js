function result(num){
    var a = document.getElementById("result");
    a.value += num; 
}

function ac(){
    var a = document.getElementById("result");
    a.value = "";
}


function equals(){
    var a = document.getElementById("result");
    a.value = eval(a.value);
}

function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}