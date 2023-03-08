function solveProblem() {
    var gasolina = document.getElementById("gasolina").value;
    var etanol = document.getElementById("etanol").value;
    if (gasolina == '' || etanol == '' || gasolina == null || etanol == null) {
        document.getElementById("result").innerHTML = "*Dados insuficientes";
        document.getElementById("result").style.color = "red";
    } else {
        var valorGasolina = parseFloat(gasolina);
        var valorEtanol = parseFloat(etanol);

        let percent = valorEtanol / valorGasolina;

        console.log("gasolina: " + valorGasolina + " Etanol: " + valorEtanol + " percentual: " + percent);
        if (percent <= 0.73) {
            console.log("COMPENSA ETANOL");
            document.getElementById("result").innerHTML = "COMPENSA ETANOL";
            document.getElementById("result").style.color = "white";
        } else {
            console.log("COMPENSA GASOLINA");
            document.getElementById("result").innerHTML = "COMPENSA GASOLINA";
            document.getElementById("result").style.color = "white";
        }
    }
}

function calculaLitro50(){
    var gasolina = document.getElementById("gasolina").value;
    var etanol = document.getElementById("etanol").value;
    var valorGasolina = parseFloat(gasolina);
    var valorEtanol = parseFloat(etanol);

    let percent = valorEtanol / valorGasolina;
    
    if(percent<=0.73){
        var litro50 = 50/valorEtanol;
        console.log(litro50 + " litros de etanol")
        document.getElementById("litros50").innerHTML = litro50.toFixed(2) + " litros de etanol";
    } else {
        var litro50 = 50/valorGasolina;
        document.getElementById("litros50").innerHTML = litro50.toFixed(2) + " litros de gasolina"
    }

}
function calculaLitro100(){
    var gasolina = document.getElementById("gasolina").value;
    var etanol = document.getElementById("etanol").value;
    var valorGasolina = parseFloat(gasolina);
    var valorEtanol = parseFloat(etanol);

    let percent = valorEtanol / valorGasolina;
    if(percent<=0.73){
        var litro100 = 100/valorEtanol;
        console.log(litro100 + " litros de etanol")
        document.getElementById("litros100").innerHTML = litro100.toFixed(2) + " litros de etanol";
    } else {
        var litro100 = 100/valorGasolina;
        document.getElementById("litros100").innerHTML = litro100.toFixed(2) + " litros de gasolina"
    }

}
 