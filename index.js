var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");
celsius.oninput = ()=>{
    let f = (parseFloat(celsius.value)*9)/5+32;
    fahrenheit.value = parseFloat(f.toFixed(2));

};
fahrenheit.oninput=()=>{
    let c= ((parseFloat(fahrenheit.value)-32)*5)/9;
    celsius.value = parseFloat(c.toFixed(2));

};