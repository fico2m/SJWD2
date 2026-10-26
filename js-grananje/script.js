document.write("<h1>Grananje</h1>");
document.write("Ovo je uvod u grananje");

var bodovi=32;
if (bodovi>=20){
    document.write("<br>Učenik je položio ispit.");
}

var propisi="107";
if(propisi>=108){
    document.write("Učenik je položio propise.");
} else{
    document.write("Učenik nije položio propise.");
}


var postotak=83;
if(postotak<=90){
    document.write("Odličan 5");
} else if (postotak<=80){
    document.write("Vrlo dobar 4");
} else if (postotak<=65){
    document.write("Dobar 3");
} else if (postotak<=50){
    document.write("Dovoljan 2");
} else {
    document.write("Nedovoljan 1");
}
