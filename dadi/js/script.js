alert("BENVENUTO AL GIOCO DEI DADI");
alert("* REGOLAMENTO * \n\nlancia il dado e se il tuo numero e' più alto del computer vinci");
alert("Pronto? Bene! lancia il dado!");

// GENERO I NUMERI CASUALI DI ENTRAMBI I DADI
var user = Math.floor(Math.random()*6+1);
var cpu = Math.floor(Math.random()*6+1);

alert("E' uscito...");
alert(user);
alert("La cpu ha già lanciato...");
alert("Vediamo se hai vinto...");
alert("Per la cpu e' uscito --> " + cpu);

// CONTROLLO CHI HA VINTO
if( parseInt(user) > parseInt(cpu) ){
    alert("COMPLIMENTI HAI VINTO!!!");
}
else if( parseInt(user) < parseInt(cpu) ){
    alert("Mi dispiace... stavolta ti è andata male...");
}
else{
        alert("WOW! Incredibile non c'è nessun vincitore!");
}



alert("Dado user: " + user + "\nDado Cpu: " +cpu);