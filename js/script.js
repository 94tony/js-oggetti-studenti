var output=document.getElementById("output");
var output=document.getElementById("output2");
var output=document.getElementById("output3");



/* creare un object  con un nome cognome età */
var studente ={
   
        name: 'Ciro' ,
         surname: 'Esposito ' , 
         age: 33

}

// creare un for-in  per  ciclare   e quindi aggiungere  un valore asseconda di una condizione



    // per stampare tutti i nomi dei passengers

    
   
    for (var key in studente) {
      output.innerHTML += key += studente [key] +=" "
    
    }
    
//esercizio 2 
var studenti = [
   
   
    {
    name: 'Ciro' ,
    surname: 'Esposito ' , 
    
    },

    {
     name: 'Antonio' ,
     surname: 'Esposito ' , 
    
     },


     {
      name: 'Ciro' ,
      surname: 'Esposito ' , 
     
      }
] 

for(var x = 0; x <  studenti.length; x++){
    output2.innerHTML+= studenti[x].name  += studenti[x].surname += " "
}



//esercizio 3


    var istituto ={
    matricole : []
}

    var nomeMatricola = prompt('Inserisci il nome della matricola');
    var cognomeMatricola = prompt('Inserisci il cognome della matricola');
    var anni = parseInt( prompt('Inserisci età '));
    
    istituto.matricole.push({
        name: nomeMatricola,
        surname: cognomeMatricola,
        age :  anni 
    });


    for (x=0 ;  x<istituto.matricole.length  ;x++) {
         
        for (var k in istituto.matricole[x]) {
         output3.innerHTML+= istituto.matricole[x][k]+" ";
   } 
    

}  
  
  



