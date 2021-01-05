var amount = Number(prompt("Voer een getal in:"));
var array = [];

for (let i = 0; i <= amount; i++) {
    array.push(i);
}

var button = document.createElement("button");
button.innerHTML = "Laat Zien";
button.onclick = show;
document.getElementById("container").appendChild(button);

function show(){
    for (let i = array.length; i >= 0; i--) {
        var printString = "";
        for (let j = 0; j < i; j++) {
            printString += array[j];
        }  
        printString += "<br>";
        document.write(printString); 
    }
}