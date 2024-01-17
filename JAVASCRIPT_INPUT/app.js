const PI = 3.14;
let radious;
let areaOFcircle;
document.getElementById("submit").onclick = function(){
    radious = document.getElementById("mytext").value;
    radious = Number(radious);
    areaOFcircle = PI*radious*radious;
    document.getElementById("result").textContent = `area of circke is :${areaOFcircle}`;

}