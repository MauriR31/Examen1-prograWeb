let resultado;
function calTemp(){
    let grado = parseInt(document.getElementById("num").value);
    resultado = (grado - 32) * (5/9);    
    alert("La temperatura calculada es "+resultado+" grados C");    
}