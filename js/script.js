/* creare un object  con un nome cognome età */
var studente ={
   
        name: 'Ciro' ,
         surname: 'Esposito ' , 
         age: 33

}

// creare un for-in  per  ciclare   e quindi aggiungere  un valore asseconda di una condizione

for (var i = 0; i < studente.length; i++) {

    // per stampare tutti i nomi dei passengers
  console.log(studente[i])
    
   
    for (var key in studente[i]) {
      
        console.log(key, studente[i][key])
    }
    
}


//esercizio 3
var istituto ={
    matricole : []
}

while (scuola.studenti.length < 3) {
    
    var nomeMatricola = prompt('Inserisci il nome del passeggero');
    var cognomeMatricola = prompt('Inserisci il cognome del passeggero');
    var anni = parseInt( prompt('Inserisci età '));

   
    istituto.matricole.push({
        name: nomeMatricola,
        surname: cognomeMatricola,
        age :  anni 
    });
    console.log(istituto.matricole[i]);
    document.getElementsByClassName
    
}


