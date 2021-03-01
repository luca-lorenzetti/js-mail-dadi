// LISTA DI UTENTI AUTORIZZATI
var listEmails = ["paolo.rossi@gmail.com","francesca.bianchi@libero.it","luisa1245@gmail.com","claudio1213@gmail.com","lucia3421@libero.it","maria.graziani123@fastweb.com",
                    "marco.rossi@libero.it","claudia.rev@rev.org","lucia.job@coop.com","luca.ciao@gmail.com","luigi.galli123@yahoo.com","cinzia123@gmail.com"];


var email = prompt("Inserire l'email per accedere");

var exist = false;

// CONTROLLO TUTTI GLI ELEMENTI DELLA LISTA
for (var i = 0; i < listEmails.length; i++) {

    if( email == listEmails[i]){
        exist = true;
    }
}                    

// CONTROLLO SE E' STATA TROVATA UNA MAIL
if( exist ){
    alert("Perfetto login effettuato con successo");
}
else{
    alert("Login fallito, email non presente, controlla i dati e ricarica la pagina");
}