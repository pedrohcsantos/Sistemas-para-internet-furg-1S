function media(){
    var x = document.getElementById("n1");
    var y = document.getElementById("n2");
    var z = document.getElementById("n3");
    var p = document.getElementById("n4");
    media_notas = (parseInt(x.value) + parseInt(y.value) + parseInt(z.value) + parseInt(p.value))/4;
    if (media_notas >= 7){
        alert("Aprovado");
    }
    else {
        alert("Reprovado");
    }
}