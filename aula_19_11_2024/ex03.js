function name(){
    var x = document.getElementById("name");
    x.value = x.value.toUpperCase();
}


function testeNum(num){
    var regex = /^(0?[1-9]{2}[- ]?|\(0?[0-9]{2}\) ?)[2-9]?[0-9]{4}[- ]?[0-9]{4}$/
    return regex.test(num);
}

function functionNum(){
    var num = document.getElementById("number").value;
    if (teste(num)){
        alert("É um número válido!");
    }
    else{
        alert("Não é um número válido!");
    }
}
