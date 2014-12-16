numeroDecimal = {
    1:"um",
    2:"dois",
    3:"três",
    4:"quatro",
    9:"nove"
};

function NumeroPorExtenso(){
    this.converteNumero = function (numero){
        if(numeroDecimal[numero]){
            return numeroDecimal[numero];
        }
        else if(numero >= 20 && numero <=29){
            porExtenso = "vinte";
            segundoNumero = this.converteNumero(numero - 20);
            if(segundoNumero == "zero")
                return porExtenso;
            return porExtenso +  " e " + segundoNumero;
        }
    }
}