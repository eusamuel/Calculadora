function insert(number){
    var num = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = num + number;
}
function clean(){
    document.getElementById('result').innerHTML = "";
}
function backspace(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}
function calculed(){
    var resultado = document.getElementById('result').innerHTML;
    if('result'){
        document.getElementById('result').innerHTML = eval(resultado)
    }else{
        
    }
}
