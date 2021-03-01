alert("Benvenuti alla stazione 27");

var km = prompt("Inserisci i km che vuoi percorrere");

// Controllo se è stato inserito un valore valido
if (isNaN(km)) {
    km = prompt("Non hai inserito un valore valido, prego inserire un valore valido");

    // Faccio un ultimo controllo 
    if (isNaN(km)) {
        alert("Non è stato inserito un valore valido, ricarica la pagina");
    }
} 
// Controllo che non abbia inserito un numero minore o uguale a zero
else if (parseInt(km) <= 0) {
    alert("Ah vuoi percorrere " + km + " ? Allora  è inutile proseguire nella progedura");
} 

// Chiedo a questo punto l'età
else {
    var eta = prompt("Fornire l'età ");

    // Faccio gli stessi controlli fatti in precedenza
    if (isNaN(eta)) {
        km = prompt("Non hai inserito un valore valido, prego inserire un valore valido");

        if (isNaN(eta)) {
            alert("Non è stato inserito un valore valido, ricarica la pagina");
        }
    } 
    
    // Faccio il calcolo del biglietto con i relativi sconti
    else {
        var prezzo = 0.21 * parseInt(km);

        if (parseInt(eta) < 18) {
            prezzo -= prezzo - (prezzo * 0.2);
        } 
        
        else if (parseInt(eta) >= 65) {
            prezzo = prezzo - (prezzo * 0.4);
        }

        alert("Il prezzo per una percorrenza di " + km + " chilometri con una età di " + eta + " anni" + " è di: " + prezzo + " €");
    }

}