/*Ejercicio 1

Utilizando lo aprendido escribir el código necesario para que dada una 
determine el medio de transporte apropiado de acuerdo a las siguientes
reglas:

0 a 1000 metros = pie
1000 a 10000 metros = bicicleta
10000 a 30000 metros = colectivo
30000 a 100000 metros = auto
+100000 = avión */ 

let distancia=prompt("indique la distancia: ") ;
let transporte;



if (distancia>=0 && distancia <=1000){

   transporte ="pie"; 

  }else if(distancia<=10000){

    transporte ="bicicleta";

  }else if( distancia<=30000){

    transporte ="colectivo";

  }else if (distancia<=100000){

    transporte ="auto";

  }else {

    transporte ="avion";
  }

  alert(transporte );
