let symbol = "*";
let row = 3;
let column = 10;

for(let i = 1; i <= row; i += 1){
    for(let j = 1; j <= column; j += 1){
        document.getElementById("displayRec").innerHTML += symbol;
    }
	document.getElementById("displayRec").innerHTML += "<br>";
}