function soma(){
	var x = document.getElementById("v1");
	var y = document.getElementById("v2");
	Soma = parseInt(x.value) + parseInt(y.value);
	alert(Soma);
}

function subtracao(){
	var x = document.getElementById("v1");
	var y = document.getElementById("v2");
	Subtracao = parseInt(x.value) - parseInt(y.value);
	alert(Subtracao);
}


function multiplicacao(){
	var x = document.getElementById("v1");
	var y = document.getElementById("v2");
	Multiplicacao = parseInt(x.value) * parseInt(y.value);
	alert(Multiplicacao);
}

function divisao(){
	var x = document.getElementById("v1");
	var y = document.getElementById("v2");
	if(y.value == 0){
		alert("Impossível dividir por zero!")
	}
	else{
		Divisao = parseInt(x.value) / parseInt(y.value);
		alert(Divisao);
	}
}
