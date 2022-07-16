/*
                        https://fsymbols.com/generators/tarty/
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

  function attackbarbaro() {

    
    document.getElementById("especialbarbaro2").style.visibility='hidden';
    document.getElementById("especialbarbaro4").style.visibility='hidden';
    document.getElementById("especialbarbaro6").style.visibility='hidden';
  
    //document.getElementById("especialguerreiro").style.visibility='hidden'; //fazer o especial guerreiro 
    danoenemy = 0
    var dado = Math.floor( 1 + 6*Math.random() );
    var dado4 = Math.floor( 1 + 4*Math.random() );
     soma =  soma + dado
     if (turno == 1 && furiabarbaro1 > 1){
      soma =  soma + dado4
      text += "barbaro acumulou " + dado + " e " + dado4 + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;
      }
       if (turno == 3 && furiabarbaro3 > 1){
        soma =  soma + dado4
        text += "barbaro acumulou " + dado + " e " + dado4 + " de dano somando " + soma + '\n';
        document.getElementById("demo").innerHTML = text;
       }
       if (turno == 5 && furiabarbaro5 > 1){
        soma =  soma + dado4
        text += "barbaro acumulou " + dado + " e " + dado4 + " de dano somando " + soma + '\n';
        document.getElementById("demo").innerHTML = text;
       }

       if (turno == 1 && furiabarbaro1 < 1){
        text += "barbaro acumulou " + dado + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;
        }
         if (turno == 3 && furiabarbaro3 < 1){
          text += "barbaro acumulou " + dado + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;
         }
         if (turno == 5 && furiabarbaro5 < 1){
          text += "barbaro acumulou " + dado + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;
         }

     

    quantodano =  soma;
   contadordano = document.getElementById('contadordano'); 
   contadordano.innerHTML = quantodano;
     if (soma > 1) {
     if (vidaplayer2 > 0){
     document.getElementById("danonoinimigo2").style.visibility='visible'; 
     }
      if (vidaplayer4 > 0){
      document.getElementById("danonoinimigo4").style.visibility='visible';
      }
      if (vidaplayer6 > 0){
      document.getElementById("danonoinimigo6").style.visibility='visible';
      }
      }
//---------------------

if (dado == '1') {
  dadoroll.unshift('https://i.imgur.com/KHcK0tk.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '2') {
  dadoroll.unshift('https://i.imgur.com/4IcBBwe.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '3') {
  dadoroll.unshift('https://i.imgur.com/fRDXMlA.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '4') {
  dadoroll.unshift('https://i.imgur.com/8NMEW0Q.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '5') {
  dadoroll.unshift('https://i.imgur.com/PRSwwmG.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '6') {
  dadoroll.unshift('https://i.imgur.com/3X2Jmi6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}



//--------------------

      if (dado == 6) {
      // especialbarbaro
      if (turno == 1 && furiabarbaro1 < 1){
     document.getElementById("especialbarbaro2").style.visibility='visible'; 
     }
      if (turno == 3 && furiabarbaro3 < 1){
      document.getElementById("especialbarbaro4").style.visibility='visible';
      }
      if (turno == 5 && furiabarbaro5 < 1){
      document.getElementById("especialbarbaro6").style.visibility='visible';
      }

      }
     
    
        if (dado == 1) {
      soma = 0
      text += "O barbaro ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';
         
      document.getElementById("botaorolarbarbaro").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("especialbarbaro2").style.visibility='hidden'; 
      document.getElementById("especialbarbaro4").style.visibility='hidden'; 
      document.getElementById("especialbarbaro6").style.visibility='hidden';  
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';
      document.getElementById("demo").innerHTML = text;

 
      
      if (turno == 1){
  document.getElementById("missplayer1").style.visibility='visible';
  }
  if (turno == 3){
  document.getElementById("missplayer3").style.visibility='visible';
  }
  if (turno == 5){
  document.getElementById("missplayer5").style.visibility='visible';
  }



  
      turno++;
      setTimeout(function() {
      document.getElementById("missplayer1").style.visibility='hidden';
      document.getElementById("missplayer3").style.visibility='hidden';
      document.getElementById("missplayer5").style.visibility='hidden';
      return turnos();
       }, 1000)
        }
  }

  // especial do barbaro 
  
  function especialbarbaro2(){

    furiabarbaro1 = 5;

   
    text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
    document.getElementById("demo").innerHTML = text;
    soma = 0
    
    
    player1.setAttribute('src', 'https://i.imgur.com/3MDK5ke.png');
      document.getElementById('player1').className = 'aninshakePL1'; //animação
      setTimeout(function() {
        document.getElementById('player1').className = 'none';
        }, 900)
    

    document.getElementById("botaorolarbarbaro").style.visibility='hidden'; 
        document.getElementById("danonoinimigo2").style.visibility='hidden'; 
        document.getElementById("danonoinimigo4").style.visibility='hidden';
        document.getElementById("danonoinimigo6").style.visibility='hidden';
        document.getElementById("especialbarbaro2").style.visibility='hidden'; 
        document.getElementById("especialbarbaro4").style.visibility='hidden'; 
        document.getElementById("especialbarbaro6").style.visibility='hidden'; 
        document.getElementById("auraplayer1").style.visibility='hidden';
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("auraplayer5").style.visibility='hidden';


        turno++;
        setTimeout(function() {
            return turnos();
            }, 900)
    
    }

    function especialbarbaro4(){

      furiabarbaro3 = 5;
  
     
      text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
      document.getElementById("demo").innerHTML = text;
      soma = 0
      
      
      player3.setAttribute('src', 'https://i.imgur.com/3MDK5ke.png');
        document.getElementById('player3').className = 'aninshakePL3'; //animação
        setTimeout(function() {
          document.getElementById('player3').className = 'none';
          }, 900)
      
  
      document.getElementById("botaorolarbarbaro").style.visibility='hidden'; 
          document.getElementById("danonoinimigo2").style.visibility='hidden'; 
          document.getElementById("danonoinimigo4").style.visibility='hidden';
          document.getElementById("danonoinimigo6").style.visibility='hidden';
          document.getElementById("especialbarbaro2").style.visibility='hidden'; 
          document.getElementById("especialbarbaro4").style.visibility='hidden'; 
          document.getElementById("especialbarbaro6").style.visibility='hidden'; 
          document.getElementById("auraplayer1").style.visibility='hidden';
          document.getElementById("auraplayer3").style.visibility='hidden';
          document.getElementById("auraplayer5").style.visibility='hidden';
  
  
          turno++;
          setTimeout(function() {
              return turnos();
              }, 900)
      
      }
  
      function especialbarbaro6(){

        furiabarbaro5 = 5;
    
       
        text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
        document.getElementById("demo").innerHTML = text;
        soma = 0
        
        
        player5.setAttribute('src', 'https://i.imgur.com/3MDK5ke.png');
          document.getElementById('player5').className = 'aninshakePL5'; //animação
          setTimeout(function() {
            document.getElementById('player5').className = 'none';
            }, 900)
        
    
        document.getElementById("botaorolarbarbaro").style.visibility='hidden'; 
            document.getElementById("danonoinimigo2").style.visibility='hidden'; 
            document.getElementById("danonoinimigo4").style.visibility='hidden';
            document.getElementById("danonoinimigo6").style.visibility='hidden';
            document.getElementById("especialbarbaro2").style.visibility='hidden'; 
            document.getElementById("especialbarbaro4").style.visibility='hidden'; 
            document.getElementById("especialbarbaro6").style.visibility='hidden'; 
            document.getElementById("auraplayer1").style.visibility='hidden';
            document.getElementById("auraplayer3").style.visibility='hidden';
            document.getElementById("auraplayer5").style.visibility='hidden';
    
    
            turno++;
            setTimeout(function() {
                return turnos();
                }, 900)
        
        }
    



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

function attackclerigo() {

    
  document.getElementById("especialclerigo2").style.visibility='hidden';
  document.getElementById("especialclerigo4").style.visibility='hidden';
  document.getElementById("especialclerigo6").style.visibility='hidden';

  danoenemy = 0
  var dado = Math.floor( 1 + 6*Math.random() );
   soma =  soma + dado
   text += "clerigo acumulou " + dado + " de dano somando " + soma + '\n';
   document.getElementById("demo").innerHTML = text;

   quantodano = soma; //isso é o contador de dano
   contadordano = document.getElementById('contadordano'); 
   contadordano.innerHTML = quantodano;
  

   if (soma > 1) {
   if (vidaplayer2 > 0){
   document.getElementById("danonoinimigo2").style.visibility='visible'; 
   }
    if (vidaplayer4 > 0){
    document.getElementById("danonoinimigo4").style.visibility='visible';
    }
    if (vidaplayer6 > 0){
    document.getElementById("danonoinimigo6").style.visibility='visible';
    }
    }
//---------------------

if (dado == '1') {
dadoroll.unshift('https://i.imgur.com/KHcK0tk.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '2') {
dadoroll.unshift('https://i.imgur.com/4IcBBwe.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '3') {
dadoroll.unshift('https://i.imgur.com/fRDXMlA.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '4') {
dadoroll.unshift('https://i.imgur.com/8NMEW0Q.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '5') {
dadoroll.unshift('https://i.imgur.com/PRSwwmG.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '6') {
dadoroll.unshift('https://i.imgur.com/3X2Jmi6.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}



//--------------------

    if (dado == 6) {
    // especialclerigo
    if (vidaplayer1 > 0 && vidaplayer1 < slot1[3]){
   document.getElementById("especialclerigo2").style.visibility='visible'; 
   }
    if (vidaplayer3 > 0 && vidaplayer3 < slot3[3]){
    document.getElementById("especialclerigo4").style.visibility='visible';
    }
    if (vidaplayer5 > 0 && vidaplayer5 < slot5[3]){
    document.getElementById("especialclerigo6").style.visibility='visible';
    }

    }
   
  
      if (dado == 1) {
    soma = 0
    text += "O clerigo ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';

    quantodano = 0;

       
    document.getElementById("botaorolarclerigo").style.visibility='hidden'; 
    document.getElementById("danonoinimigo2").style.visibility='hidden'; 
    document.getElementById("danonoinimigo4").style.visibility='hidden';
    document.getElementById("danonoinimigo6").style.visibility='hidden';
    document.getElementById("especialclerigo2").style.visibility='hidden'; 
    document.getElementById("especialclerigo4").style.visibility='hidden'; 
    document.getElementById("especialclerigo6").style.visibility='hidden';  
    document.getElementById("auraplayer1").style.visibility='hidden';
    document.getElementById("auraplayer3").style.visibility='hidden';
    document.getElementById("auraplayer5").style.visibility='hidden';
    document.getElementById("demo").innerHTML = text;


    
    if (turno == 1){
document.getElementById("missplayer1").style.visibility='visible';
}
if (turno == 3){
document.getElementById("missplayer3").style.visibility='visible';
}
if (turno == 5){
document.getElementById("missplayer5").style.visibility='visible';
}




    turno++;
    setTimeout(function() {
    document.getElementById("missplayer1").style.visibility='hidden';
    document.getElementById("missplayer3").style.visibility='hidden';
    document.getElementById("missplayer5").style.visibility='hidden';
    return turnos();
     }, 1000)
      }
}

// especial do clerigo 

function especialclerigo2(){

vidaplayer1 = vidaplayer1 + soma;
if (sangramento1 > 0){
  sangramento1 = 0
  document.getElementById('sangramento1show').style.visibility='hidden';
};
  
if (vidaplayer1 > slot1[3]){
  vidaplayer1 = slot1[3]
};

document.getElementById("healplayer1").style.visibility='visible';
 
  text += "O clerigo curou " + soma + " de dano restando " + vidaplayer1 + " de vida" + '\n';
  document.getElementById("demo").innerHTML = text;

  vidaplayer1show = document.getElementById('vidaplayer1show'); 
  vidaplayer1show.innerHTML = vidaplayer1
 
  soma = 0
  
  if (turno == 1){
  document.getElementById('player1').className = 'aninshakePL1'; //animação
  setTimeout(function() {
    document.getElementById('player1').className = 'none';
    }, 900)
  }
  if (turno == 3){
  document.getElementById('player3').className = 'aninshakePL3'; //animação
  setTimeout(function() {
    document.getElementById('player3').className = 'none';
    }, 900)
  }
  if (turno == 5){
  document.getElementById('player5').className = 'aninshakePL5'; //animação
  setTimeout(function() {
    document.getElementById('player5').className = 'none';
    }, 900)
  }
  
      document.getElementById("botaorolarclerigo").style.visibility='hidden'; 
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("especialclerigo2").style.visibility='hidden'; 
      document.getElementById("especialclerigo4").style.visibility='hidden'; 
      document.getElementById("especialclerigo6").style.visibility='hidden'; 
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';

      turno++;
      setTimeout(function() {

        document.getElementById("healplayer1").style.visibility='hidden';

          //document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
          //document.getElementById('player3').className = 'none';
          //document.getElementById('player5').className = 'none';    

          return turnos();
          }, 900)
  
  }


  function especialclerigo4(){

    vidaplayer3 = vidaplayer3 + soma;
    if (sangramento3 > 0){
      sangramento3 = 0
      document.getElementById('sangramento3show').style.visibility='hidden';
    };
      
    if (vidaplayer3 > slot3[3]){
      vidaplayer3 = slot3[3]
    };
    
    document.getElementById("healplayer3").style.visibility='visible';
     
      text += "O clerigo curou " + soma + " de dano restando " + vidaplayer3 + " de vida" + '\n';
      document.getElementById("demo").innerHTML = text;
    
      vidaplayer3show = document.getElementById('vidaplayer3show'); 
      vidaplayer3show.innerHTML = vidaplayer3
     
      soma = 0
      
      if (turno == 1){
      document.getElementById('player3').className = 'aninshakePL1'; //animação
      setTimeout(function() {
        document.getElementById('player3').className = 'none';
        }, 900)
      }
      if (turno == 3){
      document.getElementById('player3').className = 'aninshakePL3'; //animação
      setTimeout(function() {
        document.getElementById('player3').className = 'none';
        }, 900)
      }
      if (turno == 5){
      document.getElementById('player5').className = 'aninshakePL5'; //animação
      setTimeout(function() {
        document.getElementById('player5').className = 'none';
        }, 900)
      }
      
          document.getElementById("botaorolarclerigo").style.visibility='hidden'; 
          document.getElementById("danonoinimigo2").style.visibility='hidden'; 
          document.getElementById("danonoinimigo4").style.visibility='hidden';
          document.getElementById("danonoinimigo6").style.visibility='hidden';
          document.getElementById("especialclerigo2").style.visibility='hidden'; 
          document.getElementById("especialclerigo4").style.visibility='hidden'; 
          document.getElementById("especialclerigo6").style.visibility='hidden'; 
          document.getElementById("auraplayer3").style.visibility='hidden';
          document.getElementById("auraplayer3").style.visibility='hidden';
          document.getElementById("auraplayer5").style.visibility='hidden';
    
          turno++;
          setTimeout(function() {
    
            document.getElementById("healplayer3").style.visibility='hidden';
    
              //document.getElementById('player3').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
              //document.getElementById('player3').className = 'none';
              //document.getElementById('player5').className = 'none';    
    
              return turnos();
              }, 900)
      
      }



      function especialclerigo6(){

        vidaplayer5 = vidaplayer5 + soma;
        if (sangramento5 > 0){
          sangramento5 = 0
          document.getElementById('sangramento6show').style.visibility='hidden';
        };
          
        if (vidaplayer5 > slot3[3]){
          vidaplayer5 = slot3[3]
        };
        
        document.getElementById("healplayer5").style.visibility='visible';
         
          text += "O clerigo curou " + soma + " de dano restando " + vidaplayer5 + " de vida" + '\n';
          document.getElementById("demo").innerHTML = text;
        
          vidaplayer5show = document.getElementById('vidaplayer5show'); 
          vidaplayer5show.innerHTML = vidaplayer5
         
          soma = 0
          
          if (turno == 1){
          document.getElementById('player5').className = 'aninshakePL1'; //animação
          setTimeout(function() {
            document.getElementById('player5').className = 'none';
            }, 900)
          }
          if (turno == 3){
          document.getElementById('player5').className = 'aninshakePL3'; //animação
          setTimeout(function() {
            document.getElementById('player5').className = 'none';
            }, 900)
          }
          if (turno == 5){
          document.getElementById('player5').className = 'aninshakePL5'; //animação
          setTimeout(function() {
            document.getElementById('player5').className = 'none';
            }, 900)
          }
          
              document.getElementById("botaorolarclerigo").style.visibility='hidden'; 
              document.getElementById("danonoinimigo2").style.visibility='hidden'; 
              document.getElementById("danonoinimigo4").style.visibility='hidden';
              document.getElementById("danonoinimigo6").style.visibility='hidden';
              document.getElementById("especialclerigo2").style.visibility='hidden'; 
              document.getElementById("especialclerigo4").style.visibility='hidden'; 
              document.getElementById("especialclerigo6").style.visibility='hidden'; 
              document.getElementById("auraplayer5").style.visibility='hidden';
              document.getElementById("auraplayer5").style.visibility='hidden';
              document.getElementById("auraplayer5").style.visibility='hidden';
        
              turno++;
              setTimeout(function() {
        
                document.getElementById("healplayer5").style.visibility='hidden';
        
                  //document.getElementById('player5').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
                  //document.getElementById('player5').className = 'none';
                  //document.getElementById('player5').className = 'none';    
        
                  return turnos();
                  }, 900)
          
          }
  



//────────────────────────────────────────────────────────────────────────────────────────────
//─██████──────────██████─██████████████─██████──────────██████─██████████████─██████████████─
//─██░░██████████████░░██─██░░░░░░░░░░██─██░░██████████──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
//─██░░░░░░░░░░░░░░░░░░██─██░░██████░░██─██░░░░░░░░░░██──██░░██─██░░██████████─██░░██████████─
//─██░░██████░░██████░░██─██░░██──██░░██─██░░██████░░██──██░░██─██░░██─────────██░░██─────────
//─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██─────────██░░██████████─
//─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██──██████─██░░░░░░░░░░██─
//─██░░██──██████──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██████████─
//─██░░██──────────██░░██─██░░██──██░░██─██░░██──██░░██████░░██─██░░██──██░░██─██░░██─────────
//─██░░██──────────██░░██─██░░██████░░██─██░░██──██░░░░░░░░░░██─██░░██████░░██─██░░██████████─
//─██░░██──────────██░░██─██░░░░░░░░░░██─██░░██──██████████░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
//─██████──────────██████─██████████████─██████──────────██████─██████████████─██████████████─
///────────────────────────────────────────────────────────────────────────────────────────────



function attackmonge() {

    
  document.getElementById("especialmonge2").style.visibility='hidden';
  document.getElementById("especialmonge4").style.visibility='hidden';
  document.getElementById("especialmonge6").style.visibility='hidden';

  //document.getElementById("especialguerreiro").style.visibility='hidden'; //fazer o especial guerreiro 
  danoenemy = 0
  var dado = Math.floor( 1 + 6*Math.random() );
   soma =  soma + dado
   text += "monge acumulou " + dado + " de dano somando " + soma + '\n';
   document.getElementById("demo").innerHTML = text;

   quantodano = soma;
   contadordano = document.getElementById('contadordano'); 
   contadordano.innerHTML = quantodano;
  

   if (soma > 1) {
   if (vidaplayer2 > 0){
   document.getElementById("danonoinimigo2").style.visibility='visible'; 
   }
    if (vidaplayer4 > 0){
    document.getElementById("danonoinimigo4").style.visibility='visible';
    }
    if (vidaplayer6 > 0){
    document.getElementById("danonoinimigo6").style.visibility='visible';
    }
    }
//---------------------

if (dado == '1') {
dadoroll.unshift('https://i.imgur.com/KHcK0tk.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '2') {
dadoroll.unshift('https://i.imgur.com/4IcBBwe.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '3') {
dadoroll.unshift('https://i.imgur.com/fRDXMlA.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '4') {
dadoroll.unshift('https://i.imgur.com/8NMEW0Q.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '5') {
dadoroll.unshift('https://i.imgur.com/PRSwwmG.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '6') {
dadoroll.unshift('https://i.imgur.com/3X2Jmi6.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}



//--------------------

    if (dado == 6) {
    // especialmonge
    if (vidaplayer2 > 0){
   document.getElementById("especialmonge2").style.visibility='visible'; 
   document.getElementById("danonoinimigo2").style.visibility='hidden'; 
   }
    if (vidaplayer4 > 0){
    document.getElementById("especialmonge4").style.visibility='visible';
    document.getElementById("danonoinimigo4").style.visibility='hidden'; 
    }
    if (vidaplayer6 > 0){
    document.getElementById("especialmonge6").style.visibility='visible';
    document.getElementById("danonoinimigo6").style.visibility='hidden'; 
    }

    }
   
  
      if (dado == 1) {
    soma = 0
    text += "O monge ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';

    quantodano = 0;

       
    document.getElementById("botaorolarmonge").style.visibility='hidden'; 
      document.getElementById("botaorolarmago").style.visibility='hidden'; 
      document.getElementById("botaorolarguerreiro").style.visibility='hidden';
    document.getElementById("danonoinimigo2").style.visibility='hidden'; 
    document.getElementById("danonoinimigo4").style.visibility='hidden';
    document.getElementById("danonoinimigo6").style.visibility='hidden';
    document.getElementById("especialmonge2").style.visibility='hidden'; 
    document.getElementById("especialmonge4").style.visibility='hidden'; 
    document.getElementById("especialmonge6").style.visibility='hidden';  
    document.getElementById("auraplayer1").style.visibility='hidden';
    document.getElementById("auraplayer3").style.visibility='hidden';
    document.getElementById("auraplayer5").style.visibility='hidden';
    document.getElementById("demo").innerHTML = text;


    
    if (turno == 1){
document.getElementById("missplayer1").style.visibility='visible';
}
if (turno == 3){
document.getElementById("missplayer3").style.visibility='visible';
}
if (turno == 5){
document.getElementById("missplayer5").style.visibility='visible';
}




    turno++;
    setTimeout(function() {
    document.getElementById("missplayer1").style.visibility='hidden';
    document.getElementById("missplayer3").style.visibility='hidden';
    document.getElementById("missplayer5").style.visibility='hidden';
    return turnos();
     }, 1000)
      }
}

// especial do monge 

function especialmonge2(){

soma = soma / 2;
soma = Math.floor(soma, 1);  
vidaplayer2 = vidaplayer2 - soma;
atordoadoplayer2 = 1;
document.getElementById("stunplayer2").style.visibility='visible';

if(furiabarbaro2 > 1){
  furiabarbaro2 = 0
  player2.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
};

 
  text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer2 + " de vida e está estunado" + '\n';
  document.getElementById("demo").innerHTML = text;

  vidaplayer2show = document.getElementById('vidaplayer2show'); 
  vidaplayer2show.innerHTML = vidaplayer2
 
  soma = 0
  
  if (turno == 1){
  document.getElementById('player1').className = 'aninPL1atkPL2'; //animação
  setTimeout(function() {
    document.getElementById('player1').className = 'none';
    }, 900)
  }
  if (turno == 3){
  document.getElementById('player3').className = 'aninPL3atkPL2'; //animação
  setTimeout(function() {
    document.getElementById('player3').className = 'none';
    }, 900)
  }
  if (turno == 5){
  document.getElementById('player5').className = 'aninPL5atkPL2'; //animação
  setTimeout(function() {
    document.getElementById('player5').className = 'none';
    }, 900)
  }
  
  document.getElementById("botaorolarmonge").style.visibility='hidden'; 
      document.getElementById("botaorolarmago").style.visibility='hidden'; 
      document.getElementById("botaorolarguerreiro").style.visibility='hidden';
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("especialmonge2").style.visibility='hidden'; 
      document.getElementById("especialmonge4").style.visibility='hidden'; 
      document.getElementById("especialmonge6").style.visibility='hidden'; 
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';

      if (vidaplayer2 < 1){
      document.getElementById("player2").style.visibility='hidden';
      document.getElementById("tumbaplayer2").style.visibility='visible';
      document.getElementById('stunplayer2').style.visibility='hidden';
      document.getElementById('vidaplayer2show').style.visibility='hidden';
      }
      turno++;
      setTimeout(function() {

          //document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
          //document.getElementById('player3').className = 'none';
          //document.getElementById('player5').className = 'none';    

          return turnos();
          }, 900)
  
  }
  function especialmonge4(){

soma = soma / 2;
soma = Math.floor(soma, 1);  
vidaplayer4 = vidaplayer4 - soma;
atordoadoplayer4 = 1;
document.getElementById("stunplayer4").style.visibility='visible';

if(furiabarbaro4 > 1){
  furiabarbaro4 = 0
  player4.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
};

 
  text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer4 + " de vida" + '\n';
  document.getElementById("demo").innerHTML = text;

  vidaplayer4show = document.getElementById('vidaplayer4show'); 
  vidaplayer4show.innerHTML = vidaplayer4
  soma = 0
  
  if (turno == 1){
  document.getElementById('player1').className = 'aninPL1atkPL4'; //animação
  setTimeout(function() {
    document.getElementById('player1').className = 'none';
    }, 900)
  }
  if (turno == 3){
  document.getElementById('player3').className = 'aninPL3atkPL4'; //animação
  setTimeout(function() {
    document.getElementById('player3').className = 'none';
    }, 900)
  }
  if (turno == 5){
  document.getElementById('player5').className = 'aninPL5atkPL4'; //animação
  setTimeout(function() {
    document.getElementById('player5').className = 'none';
    }, 900)
  }
  
  document.getElementById("botaorolarmonge").style.visibility='hidden'; 
      document.getElementById("botaorolarmago").style.visibility='hidden'; 
      document.getElementById("botaorolarguerreiro").style.visibility='hidden';
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("especialmonge2").style.visibility='hidden'; 
      document.getElementById("especialmonge4").style.visibility='hidden'; 
      document.getElementById("especialmonge6").style.visibility='hidden'; 
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';

      if (vidaplayer4 < 1){
      document.getElementById("player4").style.visibility='hidden';
      document.getElementById("tumbaplayer4").style.visibility='visible';
      document.getElementById('stunplayer4').style.visibility='hidden';
      document.getElementById('vidaplayer4show').style.visibility='hidden';
      }
      turno++;
      setTimeout(function() {
          

          //document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
          //document.getElementById('player3').className = 'none';
          //document.getElementById('player5').className = 'none';    
   
          return turnos();
          }, 900)
          
  }
  function especialmonge6(){

soma = soma / 2;
soma = Math.floor(soma, 1);  
vidaplayer6 = vidaplayer6 - soma;
atordoadoplayer6 = 1;
document.getElementById("stunplayer6").style.visibility='visible';

if(furiabarbaro6 > 1){
  furiabarbaro6 = 0
  player6.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
};

  
  text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer6 + " de vida" + '\n';
  document.getElementById("demo").innerHTML = text;
  vidaplayer6show = document.getElementById('vidaplayer6show'); 
  vidaplayer6show.innerHTML = vidaplayer6
  soma = 0
  
  if (turno == 1){
  document.getElementById('player1').className = 'aninPL1atkPL6'; //animação
  setTimeout(function() {
    document.getElementById('player1').className = 'none';
    }, 900)
  }
  if (turno == 3){
  document.getElementById('player3').className = 'aninPL3atkPL6'; //animação
  setTimeout(function() {
    document.getElementById('player3').className = 'none';
    }, 900)
  }
  if (turno == 5){
  document.getElementById('player5').className = 'aninPL5atkPL6'; //animação
  setTimeout(function() {
    document.getElementById('player5').className = 'none';
    }, 900)
  }
  
  document.getElementById("botaorolarmonge").style.visibility='hidden'; 
      document.getElementById("botaorolarmago").style.visibility='hidden'; 
      document.getElementById("botaorolarguerreiro").style.visibility='hidden';
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("especialmonge2").style.visibility='hidden'; 
      document.getElementById("especialmonge4").style.visibility='hidden'; 
      document.getElementById("especialmonge6").style.visibility='hidden'; 
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';

      if (vidaplayer6 < 1){
      document.getElementById("player6").style.visibility='hidden';
      document.getElementById("tumbaplayer6").style.visibility='visible';
      document.getElementById('stunplayer6').style.visibility='hidden';
      document.getElementById('vidaplayer6show').style.visibility='hidden';
      }

      
      turno++;
      setTimeout(function() {
        //document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
        //document.getElementById('player3').className = 'none';
        //document.getElementById('player5').className = 'none';   
          return turnos();
          }, 900)
          
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


  function attackguerreiro() {
  
    //document.getElementById("especialguerreiro").style.visibility='hidden'; //fazer o especial guerreiro 
    danoenemy = 0
    var dado = Math.floor( 1 + 6*Math.random() );
     soma =  soma + dado
     text += "Guerreiro acumulou " + dado + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;
    quantodano =  soma;
     contadordano = document.getElementById('contadordano'); 
     contadordano.innerHTML = quantodano;


     if (soma > 1) {
     if (vidaplayer2 > 0){
     document.getElementById("danonoinimigo2").style.visibility='visible'; 
     }
      if (vidaplayer4 > 0){
      document.getElementById("danonoinimigo4").style.visibility='visible';
      }
      if (vidaplayer6 > 0){
      document.getElementById("danonoinimigo6").style.visibility='visible';
      }
      }
      //---------------------

if (dado == '1') {
  dadoroll.unshift('https://i.imgur.com/KHcK0tk.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '2') {
  dadoroll.unshift('https://i.imgur.com/4IcBBwe.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '3') {
  dadoroll.unshift('https://i.imgur.com/fRDXMlA.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '4') {
  dadoroll.unshift('https://i.imgur.com/8NMEW0Q.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '5') {
  dadoroll.unshift('https://i.imgur.com/PRSwwmG.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '6') {
  dadoroll.unshift('https://i.imgur.com/3X2Jmi6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}



//--------------------
      if (dado == 6) {
        soma =  soma + 6
        
        quantodano = soma;
        contadordano = document.getElementById('contadordano'); 
        contadordano.innerHTML = quantodano;


        text += "Guerreiro tirou 6 no dado arumulando 12 de dano total " + soma + '\n';
        document.getElementById("demo").innerHTML = text;
      }
     
    
        if (dado == 1) {
      soma = 0
      text += "o GUERREIRO NO SLOT 1 ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';
         
      document.getElementById("botaorolarladino").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';
      document.getElementById("demo").innerHTML = text;
      
      if (turno == 1){
  document.getElementById("missplayer1").style.visibility='visible';
  }
  if (turno == 3){
  document.getElementById("missplayer3").style.visibility='visible';
  }
  if (turno == 5){
  document.getElementById("missplayer5").style.visibility='visible';
  }
      turno++;
      setTimeout(function() {
      document.getElementById("missplayer1").style.visibility='hidden';
      document.getElementById("missplayer3").style.visibility='hidden';
      document.getElementById("missplayer5").style.visibility='hidden';
      return turnos();
       }, 1000)
        }
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
                                                                                                    


  function attackladino() {

    
    document.getElementById("especialladino2").style.visibility='hidden';
    document.getElementById("especialladino4").style.visibility='hidden';
    document.getElementById("especialladino6").style.visibility='hidden';
  
    //document.getElementById("especialguerreiro").style.visibility='hidden'; //fazer o especial guerreiro 
    danoenemy = 0
    var dado = Math.floor( 1 + 6*Math.random() );
     soma =  soma + dado
     text += "Ladino acumulou " + dado + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;

    quantodano =  soma;
   contadordano = document.getElementById('contadordano'); 
   contadordano.innerHTML = quantodano;
     if (soma > 1) {
     if (vidaplayer2 > 0){
     document.getElementById("danonoinimigo2").style.visibility='visible'; 
     }
      if (vidaplayer4 > 0){
      document.getElementById("danonoinimigo4").style.visibility='visible';
      }
      if (vidaplayer6 > 0){
      document.getElementById("danonoinimigo6").style.visibility='visible';
      }
      }
//---------------------

if (dado == '1') {
  dadoroll.unshift('https://i.imgur.com/KHcK0tk.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '2') {
  dadoroll.unshift('https://i.imgur.com/4IcBBwe.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '3') {
  dadoroll.unshift('https://i.imgur.com/fRDXMlA.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '4') {
  dadoroll.unshift('https://i.imgur.com/8NMEW0Q.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '5') {
  dadoroll.unshift('https://i.imgur.com/PRSwwmG.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '6') {
  dadoroll.unshift('https://i.imgur.com/3X2Jmi6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 

}



//--------------------

      if (dado == 6) {
      // especialladino
      if (vidaplayer2 > 0){
     document.getElementById("especialladino2").style.visibility='visible'; 
     document.getElementById("danonoinimigo2").style.visibility='hidden'; 
     }
      if (vidaplayer4 > 0){
      document.getElementById("especialladino4").style.visibility='visible';
      document.getElementById("danonoinimigo4").style.visibility='hidden'; 
      }
      if (vidaplayer6 > 0){
      document.getElementById("especialladino6").style.visibility='visible';
      document.getElementById("danonoinimigo6").style.visibility='hidden'; 
      }

      }
     
    
        if (dado == 1) {
      soma = 0
      text += "O LADINO ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';
         
      document.getElementById("botaorolarladino").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("especialladino2").style.visibility='hidden'; 
      document.getElementById("especialladino4").style.visibility='hidden'; 
      document.getElementById("especialladino6").style.visibility='hidden';  
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';
      document.getElementById("demo").innerHTML = text;

 
      
      if (turno == 1){
  document.getElementById("missplayer1").style.visibility='visible';
  }
  if (turno == 3){
  document.getElementById("missplayer3").style.visibility='visible';
  }
  if (turno == 5){
  document.getElementById("missplayer5").style.visibility='visible';
  }



  
      turno++;
      setTimeout(function() {
      document.getElementById("missplayer1").style.visibility='hidden';
      document.getElementById("missplayer3").style.visibility='hidden';
      document.getElementById("missplayer5").style.visibility='hidden';
      return turnos();
       }, 1000)
        }
  }

  // especial do ladino 
  
  function especialladino2(){

    sangramento2 = sangramento2 + soma;
            sangramento2show = document.getElementById('sangramento2show'); 
            document.getElementById('sangramento2show').style.visibility='visible';
            sangramento2show.innerHTML = sangramento2

   
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer2 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer2show = document.getElementById('vidaplayer2show'); 
    vidaplayer2show.innerHTML = vidaplayer2
    soma = 0
    
    if (turno == 1){
    document.getElementById('player1').className = 'aninPL1atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 900)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 900)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 900)
    }
    
    document.getElementById("botaorolarladino").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
        document.getElementById("danonoinimigo2").style.visibility='hidden'; 
        document.getElementById("danonoinimigo4").style.visibility='hidden';
        document.getElementById("danonoinimigo6").style.visibility='hidden';
        document.getElementById("especialladino2").style.visibility='hidden'; 
        document.getElementById("especialladino4").style.visibility='hidden'; 
        document.getElementById("especialladino6").style.visibility='hidden'; 
        document.getElementById("auraplayer1").style.visibility='hidden';
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("auraplayer5").style.visibility='hidden';

        if (vidaplayer2 < 1){
        document.getElementById("player2").style.visibility='hidden';
        document.getElementById("tumbaplayer2").style.visibility='visible';
        document.getElementById('stunplayer2').style.visibility='hidden';
        document.getElementById('vidaplayer2show').style.visibility='hidden';
        }
        turno++;
        setTimeout(function() {

            document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
            document.getElementById('player3').className = 'none';
            document.getElementById('player5').className = 'none';    
 
            return turnos();
            }, 900)
    
    }
    function especialladino4(){

      sangramento4 = sangramento4 + soma;
      sangramento4show = document.getElementById('sangramento4show'); 
      document.getElementById('sangramento4show').style.visibility='visible';
      sangramento4show.innerHTML = sangramento4

   
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer4 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer4show = document.getElementById('vidaplayer4show'); 
    vidaplayer4show.innerHTML = vidaplayer4
    soma = 0
    
    if (turno == 1){
    document.getElementById('player1').className = 'aninPL1atkPL4'; //animação
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL4'; //animação
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL4'; //animação
    }
    
    document.getElementById("botaorolarladino").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
        document.getElementById("danonoinimigo2").style.visibility='hidden'; 
        document.getElementById("danonoinimigo4").style.visibility='hidden';
        document.getElementById("danonoinimigo6").style.visibility='hidden';
        document.getElementById("especialladino2").style.visibility='hidden'; 
        document.getElementById("especialladino4").style.visibility='hidden'; 
        document.getElementById("especialladino6").style.visibility='hidden'; 
        document.getElementById("auraplayer1").style.visibility='hidden';
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("auraplayer5").style.visibility='hidden';

        if (vidaplayer4 < 1){
        document.getElementById("player4").style.visibility='hidden';
        document.getElementById("tumbaplayer4").style.visibility='visible';
        document.getElementById('stunplayer4').style.visibility='hidden';
        document.getElementById('vidaplayer4show').style.visibility='hidden';
        }
        turno++;
        setTimeout(function() {
            
  
            //document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
           // document.getElementById('player3').className = 'none';
           // document.getElementById('player5').className = 'none';    
     
            return turnos();
            }, 900)
            
    }
    function especialladino6(){

      sangramento6 = sangramento6 + soma;
      sangramento6show = document.getElementById('sangramento6show'); 
      document.getElementById('sangramento6show').style.visibility='visible';
      sangramento6show.innerHTML = sangramento6

    
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer6 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer6show = document.getElementById('vidaplayer6show'); 
    vidaplayer6show.innerHTML = vidaplayer6
    soma = 0
    
    if (turno == 1){
    document.getElementById('player1').className = 'aninPL1atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 900)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 900)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 900)
    }
    
    document.getElementById("botaorolarladino").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
        document.getElementById("danonoinimigo2").style.visibility='hidden'; 
        document.getElementById("danonoinimigo4").style.visibility='hidden';
        document.getElementById("danonoinimigo6").style.visibility='hidden';
        document.getElementById("especialladino2").style.visibility='hidden'; 
        document.getElementById("especialladino4").style.visibility='hidden'; 
        document.getElementById("especialladino6").style.visibility='hidden'; 
        document.getElementById("auraplayer1").style.visibility='hidden';
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("auraplayer5").style.visibility='hidden';

        if (vidaplayer6 < 1){
        document.getElementById("player6").style.visibility='hidden';
        document.getElementById("tumbaplayer6").style.visibility='visible';
        document.getElementById('stunplayer6').style.visibility='hidden';
        document.getElementById('vidaplayer6show').style.visibility='hidden';
        }

        
        turno++;
        setTimeout(function() {
          //document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
         // document.getElementById('player3').className = 'none';
          //document.getElementById('player5').className = 'none';   
            return turnos();
            }, 900)
            
    }
    

  
  //====================================================================================================

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

function attackmago() {

  document.getElementById("especialmago").style.visibility='hidden';



  //document.getElementById("especialguerreiro").style.visibility='hidden'; //fazer o especial guerreiro 
  danoenemy = 0
  var dado = Math.floor( 1 + 6*Math.random() );
   soma =  soma + dado
   text += "mago acumulou " + dado + " de dano somando " + soma + '\n';
   document.getElementById("demo").innerHTML = text;

  quantodano =  soma;
   contadordano = document.getElementById('contadordano'); 
   contadordano.innerHTML = quantodano;

   if (soma > 1) {
   if (vidaplayer2 > 0){
   document.getElementById("danonoinimigo2").style.visibility='visible'; 
   }
    if (vidaplayer4 > 0){
    document.getElementById("danonoinimigo4").style.visibility='visible';
    }
    if (vidaplayer6 > 0){
    document.getElementById("danonoinimigo6").style.visibility='visible';
    }
    }



if (dado == '1') {
dadoroll.unshift('https://i.imgur.com/KHcK0tk.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '2') {
dadoroll.unshift('https://i.imgur.com/4IcBBwe.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '3') {
dadoroll.unshift('https://i.imgur.com/fRDXMlA.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '4') {
dadoroll.unshift('https://i.imgur.com/8NMEW0Q.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}
if (dado == '5') {
dadoroll.unshift('https://i.imgur.com/PRSwwmG.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 

}



//--------------------

    if (dado == 6) {
      dadoroll.unshift('https://i.imgur.com/3X2Jmi6.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 
   
  
   document.getElementById("especialmago").style.visibility='visible'; 
   document.getElementById("danonoinimigo2").style.visibility='hidden'; 
    document.getElementById("danonoinimigo4").style.visibility='hidden'; 
    document.getElementById("danonoinimigo6").style.visibility='hidden'; 
    

    };
   
  
      if (dado == 1) {
    soma = 0
    text += "O mago ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';
       
    document.getElementById("botaorolarladino").style.visibility='hidden'; 
      document.getElementById("botaorolarmago").style.visibility='hidden'; 
      document.getElementById("botaorolarguerreiro").style.visibility='hidden';
    document.getElementById("danonoinimigo2").style.visibility='hidden'; 
    document.getElementById("danonoinimigo4").style.visibility='hidden';
    document.getElementById("danonoinimigo6").style.visibility='hidden'; 
    document.getElementById("auraplayer1").style.visibility='hidden';
    document.getElementById("auraplayer3").style.visibility='hidden';
    document.getElementById("auraplayer5").style.visibility='hidden';
    document.getElementById("demo").innerHTML = text;


    
    if (turno == 1){
document.getElementById("missplayer1").style.visibility='visible';
}
if (turno == 3){
document.getElementById("missplayer3").style.visibility='visible';
}
if (turno == 5){
document.getElementById("missplayer5").style.visibility='visible';
}
    turno++;
    setTimeout(function() {
    document.getElementById("missplayer1").style.visibility='hidden';
    document.getElementById("missplayer3").style.visibility='hidden';
    document.getElementById("missplayer5").style.visibility='hidden';
    return turnos();
     }, 1000)
      }
}

function especialmago(){
//  soma = soma / 2;
// soma = Math.floor(soma, 1);  isso faz o mago causar metade do dano, mas ta muito fraco

 vidaplayer2 = vidaplayer2 - soma;
 vidaplayer4 = vidaplayer4 - soma;
 vidaplayer6 = vidaplayer6 - soma;
text += "O todos os inimigos sofreram " + soma + " de dano!" + '\n';
document.getElementById("demo").innerHTML = text;
vidaplayer2show = document.getElementById('vidaplayer2show'); 
vidaplayer2show.innerHTML = vidaplayer2

vidaplayer4show = document.getElementById('vidaplayer4show'); 
vidaplayer4show.innerHTML = vidaplayer4

vidaplayer6show = document.getElementById('vidaplayer6show'); 
vidaplayer6show.innerHTML = vidaplayer6

soma = 0
if (vidaplayer2 < 1){
  document.getElementById("player2").style.visibility='hidden';
  document.getElementById("tumbaplayer2").style.visibility='visible';
  document.getElementById('stunplayer2').style.visibility='hidden';
  document.getElementById('vidaplayer2show').style.visibility='hidden';
  }
  if (vidaplayer4 < 1){
    document.getElementById("player4").style.visibility='hidden';
    document.getElementById("tumbaplayer4").style.visibility='visible';
    document.getElementById('stunplayer4').style.visibility='hidden';
    document.getElementById('vidaplayer4show').style.visibility='hidden';
    }
    if (vidaplayer6 < 1){
      document.getElementById("player6").style.visibility='hidden';
      document.getElementById("tumbaplayer6").style.visibility='visible';
      document.getElementById('stunplayer6').style.visibility='hidden';
      document.getElementById('vidaplayer6show').style.visibility='hidden';
      }

if (turno == 1){
document.getElementById('player1').className = 'aninPL1magespc'; //animação
setTimeout(function() {
  document.getElementById('player1').className = 'none';
  }, 900)
}
if (turno == 3){
document.getElementById('player3').className = 'aninPL3magespc'; //animação
setTimeout(function() {
  document.getElementById('player3').className = 'none';
  }, 900)
}
if (turno == 5){
document.getElementById('player5').className = 'aninPL5magespc'; //animação
setTimeout(function() {
  document.getElementById('player5').className = 'none';
  }, 900)
}

document.getElementById("especialmagohgif").style.visibility='visible';
setTimeout(function() {
  document.getElementById("especialmagohgif").style.visibility='hidden';
      }, 500)




document.getElementById("botaorolarladino").style.visibility='hidden'; 
    document.getElementById("botaorolarmago").style.visibility='hidden'; 
    document.getElementById("botaorolarguerreiro").style.visibility='hidden';
    document.getElementById("danonoinimigo2").style.visibility='hidden'; 
    document.getElementById("danonoinimigo4").style.visibility='hidden';
    document.getElementById("danonoinimigo6").style.visibility='hidden';
    document.getElementById("especialmago").style.visibility='hidden'; 
    document.getElementById("auraplayer1").style.visibility='hidden';
    document.getElementById("auraplayer3").style.visibility='hidden';
    document.getElementById("auraplayer5").style.visibility='hidden';

    
    turno++;
    setTimeout(function() {
    //document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
    //document.getElementById('player3').className = 'none';
    //document.getElementById('player5').className = 'none';    
    return turnos();
        }, 900)
        
}



//                                            ------------------------
//                                           ===========================
//                                         ---------------------------



  //===================================================== botão de dano nos inimigos 

  
  function danonoinimigo2(){
    vidaplayer2 = vidaplayer2 - soma
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer2 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer2show = document.getElementById('vidaplayer2show'); 
    vidaplayer2show.innerHTML = vidaplayer2
    soma = 0
    
    if (turno == 1){
      if (furiabarbaro1 > 1){
        document.getElementById('espbarbaro1gif').className = 'aninauraPL1atkPL2'; //animação
      };
    document.getElementById('player1').className = 'aninPL1atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      document.getElementById('espbarbaro1gif').className = 'none';
      }, 900)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 900)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 900)
    }
    
    


        if (vidaplayer2 < 1){
        document.getElementById("player2").style.visibility='hidden';
        document.getElementById("tumbaplayer2").style.visibility='visible';
        document.getElementById('stunplayer2').style.visibility='hidden';
        document.getElementById('vidaplayer2show').style.visibility='hidden';
        }
        return endturn();

    }
    function danonoinimigo4(){
    vidaplayer4 = vidaplayer4 - soma
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer4 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer4show = document.getElementById('vidaplayer4show'); 
    vidaplayer4show.innerHTML = vidaplayer4
    soma = 0
    
    if (turno == 1){
    document.getElementById('player1').className = 'aninPL1atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 900)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 900)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 900)
    }
    

        if (vidaplayer4 < 1){
        document.getElementById("player4").style.visibility='hidden';
        document.getElementById("tumbaplayer4").style.visibility='visible';
        document.getElementById('stunplayer4').style.visibility='hidden';
        document.getElementById('vidaplayer4show').style.visibility='hidden';
        }
        return endturn();
            
    }
    function danonoinimigo6(){
    vidaplayer6 = vidaplayer6 - soma
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer6 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer6show = document.getElementById('vidaplayer6show'); 
    vidaplayer6show.innerHTML = vidaplayer6
    soma = 0
    
    if (turno == 1){
    document.getElementById('player1').className = 'aninPL1atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 900)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 900)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 900)
    }
   
        if (vidaplayer6 < 1){
        document.getElementById("player6").style.visibility='hidden';
        document.getElementById("tumbaplayer6").style.visibility='visible';
        document.getElementById('stunplayer6').style.visibility='hidden';
        document.getElementById('vidaplayer6show').style.visibility='hidden';
        }
      
            return endturn();
            
    }
    