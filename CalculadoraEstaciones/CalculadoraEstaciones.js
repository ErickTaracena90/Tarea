var estacion;
var nombreMes;
var mes;
var mensaje;
var mensajeDosp;
  mes = prompt("Ingrese el numero de un mes");
if(mes >=1 && mes <=12){ 
  mensajeDos="Mi Nombre es Erick Taracena y mi carnet es: 23005858"
  if(mes ==12 || mes == 1 || mes ==2){
    mensaje="Pertenese a ";
    estacion = mensaje+"Invierno";
    if(mes==12){
       nombreMes="Diciembre";
       alert(estacion+" El mes de "+ nombreMes);
       alert(mensajeDos);
    }else if(mes ==1){
      nombreMes="Enero";
      alert(estacion+" El mes de "+ nombreMes);
      alert(mensajeDos);
    }else if(mes==2){
      nombreMes="Febrero";
      alert(estacion+" El mes de "+ nombreMes);
      alert(mensajeDos);
    }     
     
  }else if(mes ==3 || mes == 4 || mes ==5){
    mensaje="Pertenese a ";
    estacion = mensaje+"Primavera";
    if(mes==3){
       nombreMes="Marzo";
       alert(estacion+" El mes de "+ nombreMes);
      alert(mensajeDos);
    }else if(mes ==4){
      nombreMes="Abril";
       alert(estacion+" El mes de "+ nombreMes);
      alert(mensajeDos);
      
    }else if(mes==5){
      nombreMes="Mayo";
       alert(estacion+" El mes de "+ nombreMes);
      alert(mensajeDos);
    }
    
  }else if(mes ==6 || mes == 7 || mes ==8){
    mensaje="Pertenese a ";
    estacion = mensaje+"Verano";
    if(mes==6){
       nombreMes="Junio";
       alert(estacion+" El mes de "+ nombreMes);
      alert(mensajeDos);
    }else if(mes ==7){
      nombreMes="Julio";
       alert(estacion+" El mes de "+ nombreMes);
      alert(mensajeDos);
    }else if(mes==8){
      nombreMes="Agosto";
      alert(estacion+" El mes de "+ nombreMes);
      alert(mensajeDos);
    }
    
  }else if(mes ==9 || mes == 10 || mes ==11){
    mensaje="Pertenese a ";
    estacion = mensaje+"Otoño"
    if(mes==9){
       nombreMes="Septiembre";
      alert(estacion+" El mes de "+ nombreMes);
      alert(mensajeDos);
    }else if(mes ==10){
      nombreMes="Octubre";
      alert(estacion+" El mes de "+ nombreMes);
      alert(mensajeDos);
      
    }else if(mes==11){
      nombreMes="Noviembre";
     alert(estacion+" El mes de "+ nombreMes);
      alert(mensajeDos);
    }
    
  }
  
}else{
  mensaje="El numero de mes no es valido"
  alert(mensaje);
}  

