var counter = 1;
setInterval(function(){ 
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4){
        counter = 1;
    }
}, 5000)

var gramas = {};
var carboidratos_por_grama = {
    Arroz: 0.282,
    Feijão: 0.20,
    Pão: 0.50,
    Laranja: 0.1175,
    Carne: 0.00,
    Frango: 0.00,
    Ovo: 0.0072,
    Café: 0.00,
    Banana: 0.2284,
    Batata: 0.1758
};
var proteinas_por_grama = {
    Arroz: 0.027,
    Feijão: 0.09,
    Pão: 0.09,
    Laranja: 0.0094,
    Carne: 0.26,
    Frango: 0.31,
    Ovo: 0.13,
    Café: 0.00,
    Banana: 0.0109,
    Batata: 0.0202
};
var gorduras_por_grama = {
    Arroz: 0.003,
    Feijão: 0.005,
    Pão: 0.005,
    Laranja: 0.0012,
    Carne: 0.20,
    Frango: 0.036,
    Ovo: 0.10,
    Café: 0.00,
    Banana: 0.0033,
    Batata: 0.001
};

var metaDiaria = {
    carboidratos: 0,
    proteinas: 0,
    gorduras: 0
};

var consumoDiario = []; 