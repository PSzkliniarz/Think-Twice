window.onload = start;

var ukryty = true;
var ile = 31;

function start(){
  
  for (var i = 1; i <= ile; i++){

      var IdAktywacji = "a"+  i ;
      var zlapanieAktywacji = document.getElementById(IdAktywacji);

      zlapanieAktywacji.setAttribute("onclick","sprawdzenie("+i+");");
  }

}

function sprawdzenie(i){

    var IdTekstu = "t"+ i;
    var zlapTekst = document.getElementById(IdTekstu);

    if(ukryty){
        zlapTekst.style.visibility = "visible";
        ukryty = false;
    }else{
        zlapTekst.style.visibility = "hidden";
        ukryty = true;
    }

}