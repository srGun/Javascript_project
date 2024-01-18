let count = 0;
document.getElementById("incbtn").onclick = function(){
    count++;
    document.getElementById("countLabel").textContent = count;
}

document.getElementById("decbtn").onclick = function(){
    count--;
    document.getElementById("countLabel").textContent = count;
}
document.getElementById("resetbtn").onclick = function(){
    count = 0;
    document.getElementById("countLabel").textContent = count;
}