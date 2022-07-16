/* https://fsymbols.com/generators/tarty/
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
─██████████████───██████████████─████████████████───██████████████───██████████████─████████████████───██████████████─
─██░░░░░░░░░░██───██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░██───██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░██─
─██░░██████░░██───██░░██████░░██─██░░████████░░██───██░░██████░░██───██░░██████░░██─██░░████████░░██───██░░██████░░██─
─██░░██──██░░██───██░░██──██░░██─██░░██────██░░██───██░░██──██░░██───██░░██──██░░██─██░░██────██░░██───██░░██──██░░██─
─██░░██████░░████─██░░██████░░██─██░░████████░░██───██░░██████░░████─██░░██████░░██─██░░████████░░██───██░░██──██░░██─
─██░░░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░██──██░░██─
─██░░████████░░██─██░░██████░░██─██░░██████░░████───██░░████████░░██─██░░██████░░██─██░░██████░░████───██░░██──██░░██─
─██░░██────██░░██─██░░██──██░░██─██░░██──██░░██─────██░░██────██░░██─██░░██──██░░██─██░░██──██░░██─────██░░██──██░░██─
─██░░████████░░██─██░░██──██░░██─██░░██──██░░██████─██░░████████░░██─██░░██──██░░██─██░░██──██░░██████─██░░██████░░██─
─██░░░░░░░░░░░░██─██░░██──██░░██─██░░██──██░░░░░░██─██░░░░░░░░░░░░██─██░░██──██░░██─██░░██──██░░░░░░██─██░░░░░░░░░░██─
─████████████████─██████──██████─██████──██████████─████████████████─██████──██████─██████──██████████─██████████████─
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
*/
function barbaroenemy(){
    
    
    
    ////text = "";
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 25) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
	var dado4enemy = Math.floor( 1 + 4*Math.random() );
    danoenemy = danoenemy + dadoenemy;
   

     if (turno == 2 && furiabarbaro2 > 1){
      danoenemy =  danoenemy + dado4enemy
      text += "barbaro acumulou " + dadoenemy + " e " + dado4enemy + " de dano danoenemyndo " + danoenemy + '\n';
     document.getElementById("demo").innerHTML = text;
      }
       if (turno == 4 && furiabarbaro4 > 1){
        danoenemy =  danoenemy + dado4enemy
        text += "barbaro acumulou " + dadoenemy + " e " + dado4enemy + " de dano danoenemyndo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
       }
       if (turno == 6 && furiabarbaro6 > 1){
        danoenemy =  danoenemy + dado4enemy
        text += "barbaro acumulou " + dadoenemy + " e " + dado4enemy + " de dano danoenemyndo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
       }

       if (turno == 2 && furiabarbaro2 < 1){
        text += "barbaro acumulou " + dadoenemy + " de dano danoenemyndo " + danoenemy + '\n';
     document.getElementById("demo").innerHTML = text;
        }
         if (turno == 4 && furiabarbaro4 < 1){
          text += "barbaro acumulou " + dadoenemy + " de dano danoenemyndo " + danoenemy + '\n';
     document.getElementById("demo").innerHTML = text;
         }
         if (turno == 6 && furiabarbaro6 < 1){
          text += "barbaro acumulou " + dadoenemy + " de dano danoenemyndo " + danoenemy + '\n';
     document.getElementById("demo").innerHTML = text;
         }
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
    if (dadoenemy == 6){
      
         if (turno == 2 && furiabarbaro2 < 1){
	 return especialbarbaroenemy2();
        }
         if (turno == 4 && furiabarbaro4 < 1){
	 return especialbarbaroenemy4();
         }
         if (turno == 6 && furiabarbaro6 < 1){
	 return especialbarbaroenemy6();
         }
    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)
        //turno++;
        //return turnos();
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}
function especialbarbaroenemy2(){

    furiabarbaro2 = 5;

    text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
    document.getElementById("demo").innerHTML = text;
    danoenemy = 0
    
    player2.setAttribute('src', 'https://i.imgur.com/3MDK5ke.png');
      document.getElementById('player2').className = 'aninshakePL2'; //animação
      setTimeout(function() {
        document.getElementById('player2').className = 'none';
        }, 900)

		return passarturno();

};
function especialbarbaroenemy4(){

    furiabarbaro4 = 5;

    text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
    document.getElementById("demo").innerHTML = text;
    danoenemy = 0
    
    player4.setAttribute('src', 'https://i.imgur.com/3MDK5ke.png');
      document.getElementById('player4').className = 'aninshakePL4'; //animação
      setTimeout(function() {
        document.getElementById('player4').className = 'none';
        }, 900)

		return passarturno();

};
function especialbarbaroenemy6(){

    furiabarbaro6 = 5;

    text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
    document.getElementById("demo").innerHTML = text;
    danoenemy = 0
    
    player6.setAttribute('src', 'https://i.imgur.com/3MDK5ke.png');
      document.getElementById('player6').className = 'aninshakePL2'; //animação
      setTimeout(function() {
        document.getElementById('player6').className = 'none';
        }, 900)

		return passarturno();

};
/*                        https://fsymbols.com/generators/tarty/
──────────────────────────────────────────────────────────────────────────────────────────────────────────
─██████████████─██████─────────██████████████─████████████████───██████████─██████████████─██████████████─
─██░░░░░░░░░░██─██░░██─────────██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██░░██████████─██░░██─────────██░░██████████─██░░████████░░██───████░░████─██░░██████████─██░░██████░░██─
─██░░██─────────██░░██─────────██░░██─────────██░░██────██░░██─────██░░██───██░░██─────────██░░██──██░░██─
─██░░██─────────██░░██─────────██░░██████████─██░░████████░░██─────██░░██───██░░██─────────██░░██──██░░██─
─██░░██─────────██░░██─────────██░░░░░░░░░░██─██░░░░░░░░░░░░██─────██░░██───██░░██──██████─██░░██──██░░██─
─██░░██─────────██░░██─────────██░░██████████─██░░██████░░████─────██░░██───██░░██──██░░██─██░░██──██░░██─
─██░░██─────────██░░██─────────██░░██─────────██░░██──██░░██───────██░░██───██░░██──██░░██─██░░██──██░░██─
─██░░██████████─██░░██████████─██░░██████████─██░░██──██░░██████─████░░████─██░░██████░░██─██░░██████░░██─
─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██──██░░░░░░██─██░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██████████████─██████████████─██████████████─██████──██████████─██████████─██████████████─██████████████─
──────────────────────────────────────────────────────────────────────────────────────────────────────────
*/

function clerigoenemy(){
    
    
    
    ////text = "";
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 15) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
    danoenemy = danoenemy + dadoenemy;
    text += "o Clerigo tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
    document.getElementById("demo").innerHTML = text;
     
    if (dadoenemy == 6){
      
        if (vidaplayer2 < slot2[3] && vidaplayer2 > 0 && vidaplayer2 <= vidaplayer4 && vidaplayer2 <= vidaplayer6){
            return especialclerigoenemy2();
        }
        if (vidaplayer4 < slot4[3] && vidaplayer4 > 0 && vidaplayer4 <= vidaplayer2 && vidaplayer4 <= vidaplayer6){
            return especialclerigoenemy4();
        }
        if (vidaplayer6 < slot6[3] && vidaplayer6 > 0 && vidaplayer6 <= vidaplayer2 && vidaplayer6 <= vidaplayer4){
            return especialclerigoenemy6();
        }

        if (sangramento2 > 5 && vidaplayer2 > 0){
            return especialclerigoenemy2();
        }
        if (sangramento4 > 5 && vidaplayer4 > 0){
            return especialclerigoenemy4();
        }
        if (sangramento6 > 5 && vidaplayer6 > 0){
            return especialclerigoenemy6();
        }
    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)
        //turno++;
        //return turnos();
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}
function especialclerigoenemy2(){

    
    vidaplayer2 = vidaplayer2 + danoenemy;
    if (sangramento2 > 0){
        sangramento2 = 0
        document.getElementById('sangramento2show').style.visibility='hidden';
      };
    if (vidaplayer2 > slot2[3]){
    vidaplayer2 = slot2[3]
    };
    document.getElementById("healplayer2").style.visibility='visible';

    text += "O clerigo curou " + soma + " de dano restando " + vidaplayer2 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
  
    vidaplayer2show = document.getElementById('vidaplayer2show'); 
    vidaplayer2show.innerHTML = vidaplayer2
   
    danoenemy = 0

    if (turno == 2){
        document.getElementById('player2').className = 'aninshakePL2'; //animação
        setTimeout(function() {
          document.getElementById('player2').className = 'none';
          }, 900)
        }
        if (turno == 4){
        document.getElementById('player4').className = 'aninshakePL4'; //animação
        setTimeout(function() {
          document.getElementById('player4').className = 'none';
          }, 900)
        }
        if (turno == 6){
        document.getElementById('player6').className = 'aninshakePL6'; //animação
        setTimeout(function() {
          document.getElementById('player6').className = 'none';
          }, 900)
        }

    setTimeout(function() {

        document.getElementById("healplayer2").style.visibility='hidden';

          //document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
          //document.getElementById('player3').className = 'none';
          //document.getElementById('player5').className = 'none';    

          return passarturno();
          
          }, 900)
};

function especialclerigoenemy4(){

    vidaplayer4 = vidaplayer4 + danoenemy;
    if (sangramento4 > 0){
        sangramento4 = 0
        document.getElementById('sangramento4show').style.visibility='hidden';
      };
    if (vidaplayer4 > slot4[3]){
    vidaplayer4 = slot4[3]
    };
    document.getElementById("healplayer4").style.visibility='visible';

    text += "O clerigo curou " + soma + " de dano restando " + vidaplayer4 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
  
    vidaplayer4show = document.getElementById('vidaplayer4show'); 
    vidaplayer4show.innerHTML = vidaplayer4
   
    danoenemy = 0

    if (turno == 2){
        document.getElementById('player2').className = 'aninshakePL2'; //animação
        setTimeout(function() {
          document.getElementById('player2').className = 'none';
          }, 900)
        }
        if (turno == 4){
        document.getElementById('player4').className = 'aninshakePL4'; //animação
        setTimeout(function() {
          document.getElementById('player4').className = 'none';
          }, 900)
        }
        if (turno == 6){
        document.getElementById('player6').className = 'aninshakePL6'; //animação
        setTimeout(function() {
          document.getElementById('player6').className = 'none';
          }, 900)
        }

    setTimeout(function() {

        document.getElementById("healplayer4").style.visibility='hidden';

          //document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
          //document.getElementById('player3').className = 'none';
          //document.getElementById('player5').className = 'none';    

          return passarturno();
          
          }, 900)

};

function especialclerigoenemy6(){

    
    vidaplayer6 = vidaplayer6 + danoenemy;
    if (sangramento6 > 0){
        sangramento6 = 0
        document.getElementById('sangramento6show').style.visibility='hidden';
      };
    if (vidaplayer6 > slot6[3]){
    vidaplayer6 = slot6[3]
    };
    document.getElementById("healplayer6").style.visibility='visible';

    text += "O clerigo curou " + soma + " de dano restando " + vidaplayer6 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
  
    vidaplayer6show = document.getElementById('vidaplayer6show'); 
    vidaplayer6show.innerHTML = vidaplayer6
   
    danoenemy = 0

    if (turno == 2){
        document.getElementById('player2').className = 'aninshakePL2'; //animação
        setTimeout(function() {
          document.getElementById('player2').className = 'none';
          }, 900)
        }
        if (turno == 4){
        document.getElementById('player4').className = 'aninshakePL4'; //animação
        setTimeout(function() {
          document.getElementById('player4').className = 'none';
          }, 900)
        }
        if (turno == 6){
        document.getElementById('player6').className = 'aninshakePL6'; //animação
        setTimeout(function() {
          document.getElementById('player6').className = 'none';
          }, 900)
        }

    setTimeout(function() {

        document.getElementById("healplayer6").style.visibility='hidden';

          //document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
          //document.getElementById('player3').className = 'none';
          //document.getElementById('player5').className = 'none';    

          return passarturno();
          
          }, 900)
};

/*          https://fsymbols.com/generators/tarty/
────────────────────────────────────────────────────────────────────────────────────────────
─██████──────────██████─██████████████─██████──────────██████─██████████████─██████████████─
─██░░██████████████░░██─██░░░░░░░░░░██─██░░██████████──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██░░░░░░░░░░░░░░░░░░██─██░░██████░░██─██░░░░░░░░░░██──██░░██─██░░██████████─██░░██████████─
─██░░██████░░██████░░██─██░░██──██░░██─██░░██████░░██──██░░██─██░░██─────────██░░██─────────
─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██─────────██░░██████████─
─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██──██████─██░░░░░░░░░░██─
─██░░██──██████──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██████████─
─██░░██──────────██░░██─██░░██──██░░██─██░░██──██░░██████░░██─██░░██──██░░██─██░░██─────────
─██░░██──────────██░░██─██░░██████░░██─██░░██──██░░░░░░░░░░██─██░░██████░░██─██░░██████████─
─██░░██──────────██░░██─██░░░░░░░░░░██─██░░██──██████████░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██████──────────██████─██████████████─██████──────────██████─██████████████─██████████████─
────────────────────────────────────────────────────────────────────────────────────────────
*/


//monge inimigo ----------------------------------------------------------------
function mongeenemy(){
    
    
    
    ////text = "";
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 15) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
    danoenemy = danoenemy + dadoenemy;
    text += "o monge tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
    document.getElementById("demo").innerHTML = text;
    
    if (dadoenemy == 6){
      
        text += "o monge tirou 6 no dado acumulado " + danoenemy + "de dano de e o alvo ta atordoado " + '\n';
        atordoamento = 1;
        document.getElementById("demo").innerHTML = text;
        return danoaleatorioenemy1();
        break; 


    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)

        //turno++;
        //return turnos();
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}




/*
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
─██████████████─██████──██████─██████████████─████████████████───████████████████───██████████████─██████████─████████████████───██████████████─
─██░░░░░░░░░░██─██░░██──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░░░██───██░░░░░░░░░░██─██░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░██─
─██░░██████████─██░░██──██░░██─██░░██████████─██░░████████░░██───██░░████████░░██───██░░██████████─████░░████─██░░████████░░██───██░░██████░░██─
─██░░██─────────██░░██──██░░██─██░░██─────────██░░██────██░░██───██░░██────██░░██───██░░██───────────██░░██───██░░██────██░░██───██░░██──██░░██─
─██░░██─────────██░░██──██░░██─██░░██████████─██░░████████░░██───██░░████████░░██───██░░██████████───██░░██───██░░████████░░██───██░░██──██░░██─
─██░░██──██████─██░░██──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░░░██───██░░░░░░░░░░██───██░░██───██░░░░░░░░░░░░██───██░░██──██░░██─
─██░░██──██░░██─██░░██──██░░██─██░░██████████─██░░██████░░████───██░░██████░░████───██░░██████████───██░░██───██░░██████░░████───██░░██──██░░██─
─██░░██──██░░██─██░░██──██░░██─██░░██─────────██░░██──██░░██─────██░░██──██░░██─────██░░██───────────██░░██───██░░██──██░░██─────██░░██──██░░██─
─██░░██████░░██─██░░██████░░██─██░░██████████─██░░██──██░░██████─██░░██──██░░██████─██░░██████████─████░░████─██░░██──██░░██████─██░░██████░░██─
─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██──██░░░░░░██─██░░██──██░░░░░░██─██░░░░░░░░░░██─██░░░░░░██─██░░██──██░░░░░░██─██░░░░░░░░░░██─
─██████████████─██████████████─██████████████─██████──██████████─██████──██████████─██████████████─██████████─██████──██████████─██████████████─
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
*/

function guerreiroenemy(){
    
    
    
    ////text = "";
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 20) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
    danoenemy = danoenemy + dadoenemy;
    text += "O inimigo tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
    document.getElementById("demo").innerHTML = text;
     
    if (dadoenemy == 6){
        danoenemy =  danoenemy + 6
        text += "Guerreiro tirou 6 no dado acumulado mais 6 de dano total " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;


    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)
        //turno++;
        //return turnos();
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}
  
  
  //====================================================================================================
 //                           https://fsymbols.com/generators/tarty/                          
//───────────────────────────────────────────────────────────────────────────────────────────────
//─██████─────────██████████████─████████████───██████████─██████──────────██████─██████████████─
//─██░░██─────────██░░░░░░░░░░██─██░░░░░░░░████─██░░░░░░██─██░░██████████──██░░██─██░░░░░░░░░░██─
//─██░░██─────────██░░██████░░██─██░░████░░░░██─████░░████─██░░░░░░░░░░██──██░░██─██░░██████░░██─
//─██░░██─────────██░░██──██░░██─██░░██──██░░██───██░░██───██░░██████░░██──██░░██─██░░██──██░░██─
//─██░░██─────────██░░██████░░██─██░░██──██░░██───██░░██───██░░██──██░░██──██░░██─██░░██──██░░██─
//─██░░██─────────██░░░░░░░░░░██─██░░██──██░░██───██░░██───██░░██──██░░██──██░░██─██░░██──██░░██─
//─██░░██─────────██░░██████░░██─██░░██──██░░██───██░░██───██░░██──██░░██──██░░██─██░░██──██░░██─
//─██░░██─────────██░░██──██░░██─██░░██──██░░██───██░░██───██░░██──██░░██████░░██─██░░██──██░░██─
//─██░░██████████─██░░██──██░░██─██░░████░░░░██─████░░████─██░░██──██░░░░░░░░░░██─██░░██████░░██─
//─██░░░░░░░░░░██─██░░██──██░░██─██░░░░░░░░████─██░░░░░░██─██░░██──██████████░░██─██░░░░░░░░░░██─
//─██████████████─██████──██████─████████████───██████████─██████──────────██████─██████████████─
//───────────────────────────────────────────────────────────────────────────────────────────────                                                                           
   

//ladino inimigo ----------------------------------------------------------------
function ladinoenemy(){
    
    
    
    ////text = "";
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 15) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
    danoenemy = danoenemy + dadoenemy;
    text += "o Ladino tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
    document.getElementById("demo").innerHTML = text;
     
    if (dadoenemy == 6){
      
        text += "o Ladino tirou 6 no dado acumulado " + danoenemy + "de dano de sangramento " + '\n';
        danodesangramento = danoenemy;
        document.getElementById("demo").innerHTML = text;
        return danoaleatorioenemy1();
        break; 


    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)
        //turno++;
        //return turnos();
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}

   //                           https://fsymbols.com/generators/tarty/ 
//          ─────────────────────────────────────────────────────────────────────
//          ─██████──────────██████─██████████████─██████████████─██████████████─
//          ─██░░██████████████░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
//          ─██░░░░░░░░░░░░░░░░░░██─██░░██████░░██─██░░██████████─██░░██████░░██─
//          ─██░░██████░░██████░░██─██░░██──██░░██─██░░██─────────██░░██──██░░██─
//          ─██░░██──██░░██──██░░██─██░░██████░░██─██░░██─────────██░░██──██░░██─
//          ─██░░██──██░░██──██░░██─██░░░░░░░░░░██─██░░██──██████─██░░██──██░░██─
//          ─██░░██──██████──██░░██─██░░██████░░██─██░░██──██░░██─██░░██──██░░██─
//          ─██░░██──────────██░░██─██░░██──██░░██─██░░██──██░░██─██░░██──██░░██─
//          ─██░░██──────────██░░██─██░░██──██░░██─██░░██████░░██─██░░██████░░██─
//          ─██░░██──────────██░░██─██░░██──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
//          ─██████──────────██████─██████──██████─██████████████─██████████████─
//          ─────────────────────────────────────────────────────────────────────
function magoenemy(){
    
    
    
    ////text = "";
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 15) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
    danoenemy = danoenemy + dadoenemy;
    text += "O inimigo tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
    document.getElementById("demo").innerHTML = text;
     
    if (dadoenemy == 6){
        // verificar
        return especialmagoenemy();

    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)
        //turno++;
        //return turnos();
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}
    
   /* //============================================================ataque do inimigo 2
    function attackenemy2(){
    
    
    
        ////text = "";
        document.getElementById("demo").innerHTML = text;
 
       
       
         for (;;) {
        if (danoenemy < 15) {
        dadoenemy = Math.floor(1 + 6*Math.random() );
        danoenemy = danoenemy + dadoenemy;
        text += "O inimigo tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
        document.getElementById("demo").innerHTML = text;
         
  
       if (dadoenemy == 1){
            
            text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
            document.getElementById("demo").innerHTML = text;
            danoenemy = 0
    
        if (turno == 2){
        document.getElementById("missplayer2").style.visibility='visible';
        }
        if (turno == 4){
        document.getElementById("missplayer4").style.visibility='visible';
        }
        if (turno == 6){
        document.getElementById("missplayer6").style.visibility='visible';
        }
            
            
            setTimeout(function() {
            document.getElementById("missplayer2").style.visibility='hidden';
            document.getElementById("auraplayer2").style.visibility='hidden';
            document.getElementById("missplayer4").style.visibility='hidden';
            document.getElementById("auraplayer4").style.visibility='hidden';
            document.getElementById("missplayer6").style.visibility='hidden';
            document.getElementById("auraplayer6").style.visibility='hidden';
            
            }, 800)
            //turno++;
            //return turnos();
            return passarturno();
           break; 
        }
        
        
           
        }
        
        else {
        
        return danoaleatorioenemy1();
        break; 
        }
         }
     document.getElementById("demo").innerHTML = text;
    }
*/


/*
    
─────────────────────────────────────────────────────────────────────────────────────────────
─██████████████─██████████████─██████████████─██████████████─██████████████─██████──████████─
─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██──██░░░░██─
─██░░██████░░██─██████░░██████─██████░░██████─██░░██████░░██─██░░██████████─██░░██──██░░████─
─██░░██──██░░██─────██░░██─────────██░░██─────██░░██──██░░██─██░░██─────────██░░██──██░░██───
─██░░██████░░██─────██░░██─────────██░░██─────██░░██████░░██─██░░██─────────██░░██████░░██───
─██░░░░░░░░░░██─────██░░██─────────██░░██─────██░░░░░░░░░░██─██░░██─────────██░░░░░░░░░░██───
─██░░██████░░██─────██░░██─────────██░░██─────██░░██████░░██─██░░██─────────██░░██████░░██───
─██░░██──██░░██─────██░░██─────────██░░██─────██░░██──██░░██─██░░██─────────██░░██──██░░██───
─██░░██──██░░██─────██░░██─────────██░░██─────██░░██──██░░██─██░░██████████─██░░██──██░░████─
─██░░██──██░░██─────██░░██─────────██░░██─────██░░██──██░░██─██░░░░░░░░░░██─██░░██──██░░░░██─
─██████──██████─────██████─────────██████─────██████──██████─██████████████─██████──████████─
─────────────────────────────────────────────────────────────────────────────────────────────
    */
    //============================================================dano aleatorioplayer
    function danoaleatorioenemy1 (){ //novo metodo
    text += "------acionou o dano----- " + '\n';
        document.getElementById("demo").innerHTML = text;
    
    if (vidaplayer1 < 1 && vidaplayer3 < 1 && vidaplayer5 <1){
    
    return youlose()
    }
    
        aleatorioplayer = 0;
        aleatorioplayer = Math.floor(1 + 3*Math.random() );
        /*setTimeout(function() {
            document.getElementById("auraplayer2").style.visibility='hidden';
            document.getElementById("auraplayer4").style.visibility='hidden';
            document.getElementById("auraplayer6").style.visibility='hidden';
         }, 500)*/
         
         
        if (aleatorioplayer == 1 && vidaplayer1 > 0){


            if(danodesangramento > 0){

                sangramento1 = sangramento1 + danodesangramento;
                danodesangramento = 0;
                sangramento1show = document.getElementById('sangramento1show');
                document.getElementById('sangramento1show').style.visibility='visible'; 
                sangramento1show.innerHTML = sangramento1
                danoenemy = 0
            };

            if (atordoamento == 1){
                atordoamento = 0;
                atordoadoplayer1 = 1;
                

                danoenemy = danoenemy / 2;
                danoenemy = Math.floor(danoenemy, 1);  
                document.getElementById("stunplayer1").style.visibility='visible';
                if(furiabarbaro1 > 1){
                    furiabarbaro1 = 0
                    player1.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
                  };
      
            };

    
         text += "causou dano ao heroi 1<<<<<<<<"  + '\n';
       document.getElementById("demo").innerHTML = text;
       
    
       vidaplayer1 = vidaplayer1 - danoenemy
        text += " o heroi 1 perdeu " + danoenemy + " de dano "  + '\n';
       document.getElementById("demo").innerHTML = text;
       vidaplayer1show = document.getElementById('vidaplayer1show'); 
    vidaplayer1show.innerHTML = vidaplayer1
       
        danoenemy = 0

        




      


        
        if(vidaplayer1 < 1){
            document.getElementById("player1").style.visibility='hidden';
            document.getElementById("tumbaplayer1").style.visibility='visible';
            document.getElementById('stunplayer1').style.visibility='hidden';
            document.getElementById('vidaplayer1show').style.visibility='hidden';
            document.getElementById('sangramento1show').style.visibility='hidden';
                sangramento1 = 0;
            }
            
        
        if (turno == 2){
       
        document.getElementById('player2').className = 'aninPL2atkPL1'; //animação
        setTimeout(function() {
        document.getElementById('player2').className = 'none';
        }, 900)
        }
        if (turno == 4){
        
        document.getElementById('player4').className = 'aninPL4atkPL1'; //animação
        setTimeout(function() {
        document.getElementById('player4').className = 'none';
        }, 900)
        }
        if (turno == 6){
        
        document.getElementById('player6').className = 'aninPL6atkPL1'; //animação
        setTimeout(function() {
        document.getElementById('player6').className = 'none';
        }, 900)
        }
            
        
        //turno++;
          // setTimeout(function() {
            
           // return turnos();
           // }, 900)
           return passarturno();
                
            




           
    }
    
        if (aleatorioplayer == 2 && vidaplayer3 > 0){


            if(danodesangramento > 0){
                sangramento3 = sangramento3 + danodesangramento;
                danodesangramento = 0;
                sangramento3show = document.getElementById('sangramento3show'); 
                document.getElementById('sangramento3show').style.visibility='visible';
                sangramento3show.innerHTML = sangramento3
                danoenemy = 0
            };
            if (atordoamento == 1){
                atordoamento = 0;
                atordoadoplayer3 = 1;
                

                danoenemy = danoenemy / 2;
                danoenemy = Math.floor(danoenemy, 1);  
                document.getElementById("stunplayer3").style.visibility='visible';
                if(furiabarbaro3 > 1){
                    furiabarbaro3 = 0
                    player3.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
                  };
      
            };

        text += "causou dano ao heroi 3<<<<<<<<"  + '\n';
       document.getElementById("demo").innerHTML = text;
       
        
    
    
        
      
         vidaplayer3 = vidaplayer3 - danoenemy
        text += " o heroi 3 perdeu " + danoenemy + " de dano "  + '\n';
       document.getElementById("demo").innerHTML = text;
       vidaplayer3show = document.getElementById('vidaplayer3show'); 
    vidaplayer3show.innerHTML = vidaplayer3
       
        danoenemy = 0

       
 


        if(vidaplayer3 < 1){
            document.getElementById("player3").style.visibility='hidden';
            document.getElementById("tumbaplayer3").style.visibility='visible';
            document.getElementById('stunplayer3').style.visibility='hidden';
            document.getElementById('sangramento3show').style.visibility='hidden';
            document.getElementById('vidaplayer3show').style.visibility='hidden';
                sangramento3 = 0;
            }
        
          /* setTimeout(function() {
            document.getElementById('player2').className = 'none';
            
            }, 900)*/
            
        if (turno == 2){
            
        document.getElementById('player2').className = 'aninPL2atkPL3'; //animação
        setTimeout(function() {
            document.getElementById('player2').className = 'none';
           
            }, 900)
        }
        if (turno == 4){
           
        document.getElementById('player4').className = 'aninPL4atkPL3'; //animação
        setTimeout(function() {
            document.getElementById('player4').className = 'none';
            
            }, 900)
        }
        if (turno == 6){
          
        document.getElementById('player6').className = 'aninPL6atkPL3'; //animação
        setTimeout(function() {
            document.getElementById('player6').className = 'none';
            
            }, 900)
        }
        //turno++;
        //setTimeout(function() {
            
            //return turnos();
            //}, 900)

            return passarturno();
        }
        
        if (aleatorioplayer == 3 && vidaplayer5 > 0){


            if(danodesangramento > 0){
                sangramento5 = sangramento5 + danodesangramento;
                danodesangramento = 0;
                sangramento5show = document.getElementById('sangramento5show'); 
                document.getElementById('sangramento5show').style.visibility='visible';
                sangramento5show.innerHTML = sangramento5
                danoenemy = 0
            };
    
            if (atordoamento == 1){
                atordoamento = 0;
                atordoadoplayer5 = 1;
                

                danoenemy = danoenemy / 2;
                danoenemy = Math.floor(danoenemy, 1);  
                document.getElementById("stunplayer5").style.visibility='visible';
                if(furiabarbaro5 > 1){
                    furiabarbaro5 = 0
                    player5.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
                  };
      
            };

        text += "causou dano ao heroi 5<<<<<<<<"  + '\n';
       document.getElementById("demo").innerHTML = text;
       
       
         vidaplayer5 = vidaplayer5 - danoenemy
        text += " o heroi 5 perdeu " + danoenemy + " de dano "  + '\n';
       document.getElementById("demo").innerHTML = text;
    vidaplayer5show = document.getElementById('vidaplayer5show'); 
    vidaplayer5show.innerHTML = vidaplayer5
       
        danoenemy = 0

        


        if(vidaplayer5 < 1){
            document.getElementById("player5").style.visibility='hidden';
            document.getElementById("tumbaplayer5").style.visibility='visible';
            document.getElementById('stunplayer5').style.visibility='hidden';
            document.getElementById('sangramento5show').style.visibility='hidden';
            document.getElementById('vidaplayer5show').style.visibility='hidden';
                sangramento5 = 0;
            }
        
       /*setTimeout(function() {
            document.getElementById('player2').className = 'none';
            
            }, 900)*/
        
        if (turno == 2){
            	
        document.getElementById('player2').className = 'aninPL2atkPL5'; //animação
        setTimeout(function() {
            document.getElementById('player2').className = 'none';
            
            }, 900)
        }
        if (turno == 4){
            	
        document.getElementById('player4').className = 'aninPL4atkPL5'; //animação
        setTimeout(function() {
            document.getElementById('player4').className = 'none';
            
            }, 900)
        }
        if (turno == 6){
            	
        document.getElementById('player6').className = 'aninPL6atkPL5'; //animação
        setTimeout(function() {
            document.getElementById('player6').className = 'none';
            
            }, 900)
        }
       // turno++;
        //setTimeout(function() {
            
           // return turnos();
           // }, 900)
           return passarturno();
        }
        
        else {
        setTimeout(function() {
        return danoaleatorioenemy1();
         }, 200)
        
        }
         
    }
    

    function especialmagoenemy (){ //novo metodo
        
           
        
        if (vidaplayer1 < 1 && vidaplayer3 < 1 && vidaplayer5 <1){
        
        return youlose();
}
//danoenemy = danoenemy / 2;
//danoenemy = Math.floor(danoenemy, 1); isso faz o mago causar metade do dano, mas ta muito fraco

vidaplayer1 = vidaplayer1 - danoenemy;
vidaplayer3 = vidaplayer3 - danoenemy;
vidaplayer5 = vidaplayer5 - danoenemy;
    
             
text += "O todos os inimigos sofreram " + soma + " de dano!" + '\n';
document.getElementById("demo").innerHTML = text;
vidaplayer1show = document.getElementById('vidaplayer1show'); 
vidaplayer1show.innerHTML = vidaplayer1

vidaplayer3show = document.getElementById('vidaplayer3show'); 
vidaplayer3show.innerHTML = vidaplayer3

vidaplayer5show = document.getElementById('vidaplayer5show'); 
vidaplayer5show.innerHTML = vidaplayer5

danoenemy = 0;

if (vidaplayer1 < 1){
    document.getElementById("player1").style.visibility='hidden';
    document.getElementById("tumbaplayer1").style.visibility='visible';
    document.getElementById('stunplayer1').style.visibility='hidden';
    document.getElementById('vidaplayer1show').style.visibility='hidden';
    }
    if (vidaplayer3 < 1){
      document.getElementById("player3").style.visibility='hidden';
      document.getElementById("tumbaplayer3").style.visibility='visible';
      document.getElementById('stunplayer3').style.visibility='hidden';
      document.getElementById('vidaplayer3show').style.visibility='hidden';
      }
      if (vidaplayer5 < 1){
        document.getElementById("player5").style.visibility='hidden';
        document.getElementById("tumbaplayer5").style.visibility='visible';
        document.getElementById('stunplayer5').style.visibility='hidden';
        document.getElementById('vidaplayer5show').style.visibility='hidden';
        }
        if (turno == 2){
            document.getElementById('player2').className = 'aninPL2magespc'; //animação
            setTimeout(function() {
            document.getElementById('player2').className = 'none';
            }, 900)
            }
            if (turno == 4){
            document.getElementById('player4').className = 'aninPL4magespc'; //animação
            setTimeout(function() {
            document.getElementById('player4').className = 'none';
            }, 900)
            }
            if (turno == 6){
            document.getElementById('player6').className = 'aninPL6magespc'; //animação
            setTimeout(function() {
            document.getElementById('player2').className = 'none';
            }, 900)
            }



            setTimeout(function() {
                document.getElementById('player2').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
                document.getElementById('player4').className = 'none';
                document.getElementById('player6').className = 'none';     
                    }, 900)


 

            document.getElementById("especialmagoegif").style.visibility='visible';
            setTimeout(function() {
              document.getElementById("especialmagoegif").style.visibility='hidden';
                  }, 500)
            


                //turno++;
                //setTimeout(function() {

                   // return turnos();
                    //}, 900)
                    return passarturno();
                    
                
        }
        
            