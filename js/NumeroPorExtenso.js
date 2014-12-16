numeroDecimal = {
    1:"um",
    2:"dois",
    3:"três",
    4:"quatro",
    9:"nove",
    20:"vinte",
    50:"cinquenta",
    100:"cento"
};

function NumeroPorExtenso(){
    this.converteNumero = function (numero){
        if(numeroDecimal[numero]){
            return numeroDecimal[numero];
        }
        else if(numero >= 20 && numero <=29){
            segundoNumeroPorExtenso = this.converteNumero(numero - 20);
            if(segundoNumeroPorExtenso == "zero")
                return numeroDecimal[numero];
            return numeroDecimal[20] +  " e " + segundoNumeroPorExtenso;
        }
        else if(numero >= 50 && numero <=59){
            segundoNumeroPorExtenso = this.converteNumero(numero - 50);
            if(segundoNumeroPorExtenso == "zero")
                return numeroDecimal[numero];
            return numeroDecimal[50] +  " e " + segundoNumeroPorExtenso;
        }
        else if(numero >= 100 && numero <=199){
            segundoNumeroPorExtenso = this.converteNumero(numero - 100);
            if(segundoNumeroPorExtenso == "zero")
                return "cem";
            return numeroDecimal[100] +  " e " + 
                this.converteNumero(numero - 100);
        }
    }
}