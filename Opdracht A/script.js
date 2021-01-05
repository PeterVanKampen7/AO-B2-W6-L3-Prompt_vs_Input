var amount = Number(prompt("Voer een getal in:"));
var array = [];

for (let i = 0; i <= amount; i++) {
    array.push(i);
}

for (let i = 1; i <= array.length; i++) {
    var printString = "";
    for (let j = 0; j < i; j++) {
        printString += array[j];
    }  
    printString += "<br>";
    document.write(printString); 
}