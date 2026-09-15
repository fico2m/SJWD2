/* const stvara spremmnik podataka; canvas je ime naše konstante; document.getel... je metoda pomoću
koje pristupamo elementu iz html dokumenta */

const canvas = document.getElementById("platno");

/* 2D OZNACAVA DVODIMENZIONALNO CRTANJE */
const ctx = canvas.getContext("2d");


/* nije metoda jer nema (); svojstvo koje mjenja ispunu oblika */
ctx.fillStyle = "pink";


/* mjenja obrub oblika */
ctx.strokeStyle = "purple";

/* postavlja debljinu obruba */
ctx.lineWidth = 5;

/* Ova metoda kreira pravokutnik ali bez ispune */
ctx.strokeRect(50,60,50,50);


/* metoda koja kreira crni pravokutniik; 50 je X, 60 je Y, 200 je širina, 150 je visina*/
ctx.fillRect(50,60,50,50);
ctx.fillRect(200,100,50,50);

ctx.fillStyle ="red";
ctx.fillRect(300,150,50,50);

/* crtanje linije*/
/*ova metoda započinje novu putanju*/
ctx.beginPath();
/*postavlja početnu poziciju*/
ctx.moveTo(50,50);
/*definira liniju od početne do zadane točke*/
ctx.lineTo(300,200);
/*iscrtava putanju*/
ctx.stroke();

/*više povezanih crt*/
ctx.beginPath();
ctx.moveTo(100,300);
ctx.lineTo(200,200);
ctx.lineTo(300,300);
/*zatvaranje putanje*/
ctx.closePath();

ctx.fillStyle ="red";
ctx.fill();

ctx.strokeStyle ="green";
ctx.fill();
ctx.stroke();


/*crtanje kruga*/
ctx.beginPath();
/*metoda arc služi za crtanje kruga, 300 je x, 200 je y, 80 polumjer, 0 početni kut, 2*Math.PI završni krug*/
ctx.arc(467,67,80,0,2*Math.PI)
ctx.strokeStyle ="gray";
/*ispuna kruga*/
ctx.fillStyle ="lightblue";
ctx.fill()
ctx.stroke();


/*polukrug*/
ctx.beginPath();
ctx.arc(467,300,80,0,Math.PI);
ctx.strokeStyle ="brown";
ctx.stroke();


/*dodavanje tekst*/
/*određuje izgled teksta*/
ctx.font="30px Arial";
ctx.fillStyle="purple";
/*ispis teksta na canvasu*/
ctx.fillText("Jasmina Benjak",367,250);