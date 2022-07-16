//const guerreiro = [attackguerreiro(),'Guerreiro', 25, 'twinattack', 'https://i.imgur.com/pwgPqEX.png'];




  //------------------------------------------------------------------------
  function selectplayer1() {
  
    var menu = document.getElementById("Selectchar1");

            if (menu.value == '0') {
                text += "POR FAVOR ESCOLHA UM PERSONAGEM" + '\n';
            
            }
            if (menu.value == '1') {
                slot1 =[... guerreiro];
                text += "o personagem escolhido foi AWEEE no slot 1" + '\n';                
                selectok++;
                if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
                return guerreiroslot1();
            }
            else if (menu.value == '2') {
                slot1 =[... ladino];
                text += "o personagem escolhido foi LADINO no slot 1" + '\n';
                selectok++;
                if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
                return ladinoslot1();
            }
            else if (menu.value == '3') {
                slot1 =[... mago];
            text += "o personagem escolhido foi MAGO no slot 1" + '\n';
               selectok++;
               if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
               return magoslot1();
            }
       

            else if (menu.value == '4') {
                slot1 =[... monge];
            text += "o personagem escolhido foi MONGE no slot 1" + '\n';
               selectok++;
               if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
               return mongeslot1();
            }


            else if (menu.value == '5') {
                slot1 =[... clerigo];
            text += "o personagem escolhido foi CLERIGO no slot 1" + '\n';
               selectok++;
               if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
               return clerigoslot1();
            }


            else if (menu.value == '6') {
                slot1 =[... barbaro];
            text += "o personagem escolhido foi barbaro no slot 1" + '\n';
               selectok++;
               if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
               return barbaroslot1();
            }




        document.getElementById("demo").innerHTML = text;
    
}

function selectplayer3() {

    var menu = document.getElementById("Selectchar3");

            if (menu.value == '0') {
                text += "POR FAVOR ESCOLHA UM PERSONAGEM" + '\n';
                
            }
            if (menu.value == '1') {
                slot3 =[... guerreiro];
                text += "o personagem escolhido foi GUERREIRO no slot 2" + '\n';
                selectok++;
                if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
                return guerreiroslot3();
            }
            else if (menu.value == '2') {
                slot3 =[... ladino];
                text += "o personagem escolhido foi LADINO no slot 2" + '\n';
                selectok++;
                if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
                return ladinoslot3();
            }
            else if (menu.value == '3') {
                slot3 =[... mago];
            text += "o personagem escolhido foi MAGO no slot 2" + '\n';
            selectok++;
            if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
            return magoslot3();
            }

            else if (menu.value == '4') {
                slot3 =[... monge];
            text += "o personagem escolhido foi MONGE no slot 3" + '\n';
            selectok++;
            if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
            return mongeslot3();
            }


            else if (menu.value == '5') {
                slot3 =[... clerigo];
            text += "o personagem escolhido foi CLERIGO no slot 3" + '\n';
            selectok++;
            if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
            return clerigoslot3();
            }



            else if (menu.value == '6') {
                slot3 =[... barbaro];
            text += "o personagem escolhido foi BARBARO no slot 3" + '\n';
            selectok++;
            if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
            return barbaroslot3();
            }

        document.getElementById("demo").innerHTML = text;
    
}

function selectplayer6() {

    var menu = document.getElementById("Selectchar6");

            if (menu.value == '0') {
                text += "POR FAVOR ESCOLHA UM PERSONAGEM" + '\n';
            }
            if (menu.value == '1') {
                slot5 =[... guerreiro];
                text += "o personagem escolhido foi GUERREIRO no slot 3" + '\n';
                selectok++;
                if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
                return guerreiroslot5();
            }
            else if (menu.value == '2') {
                slot5 =[... ladino];
                text += "o personagem escolhido foi LADINO no slot 3" + '\n';
                selectok++;
                if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
                return ladinoslot5();
            }
            else if (menu.value == '3') {
                slot5 =[... mago];
            text += "o personagem escolhido foi MAGO no slot 3" + '\n';
               selectok++;
               if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
               return magoslot5();
            }
       

            else if (menu.value == '4') {
                slot5 =[... monge];
            text += "o personagem escolhido foi MONGE no slot 5" + '\n';
               selectok++;
               if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
               return mongeslot5();
            }



            else if (menu.value == '5') {
                slot5 =[... clerigo];
            text += "o personagem escolhido foi CLERIGO no slot 5" + '\n';
               selectok++;
               if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
               return clerigoslot5();
            }



            else if (menu.value == '6') {
                slot5 =[... barbaro];
            text += "o personagem escolhido foi BARBARO no slot 5" + '\n';
               selectok++;
               if (selectok > 2)
    
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
               return barbaroslot5();
            }

        document.getElementById("demo").innerHTML = text;
    
}

function barbaroslot1 () {
    player1.setAttribute('src', slot1[1]);
    vidaplayer1 = slot1[0]
    }
    
    function barbaroslot3 () {
    player3.setAttribute('src', slot3[1]);
    vidaplayer3 = slot3[0]
    }
    
    function barbaroslot5 () {
        player5.setAttribute('src', slot5[1]);
        vidaplayer5 = slot5[0]
    }




function clerigoslot1 () {
    player1.setAttribute('src', slot1[1]);
    vidaplayer1 = slot1[0]
    }
    
    function clerigoslot3 () {
    player3.setAttribute('src', slot3[1]);
    vidaplayer3 = slot3[0]
    }
    
    function clerigoslot5 () {
        player5.setAttribute('src', slot5[1]);
        vidaplayer5 = slot5[0]
    }



//imageslot1 monge[4]

function mongeslot1 () {
    //slot1 =[... guerreiro];
    player1.setAttribute('src', slot1[1]);
    vidaplayer1 = slot1[0]
    }
    
    function mongeslot3 () {
    player3.setAttribute('src', slot3[1]);
    vidaplayer3 = slot3[0]
    }
    
    function mongeslot5 () {
        player5.setAttribute('src', slot5[1]);
        vidaplayer5 = slot5[0]
    }





//imageslot1 guerreiro[4]

function guerreiroslot1 () {
//slot1 =[... guerreiro];
player1.setAttribute('src', slot1[1]);
vidaplayer1 = slot1[0]
}

function guerreiroslot3 () {
player3.setAttribute('src', slot3[1]);
vidaplayer3 = slot3[0]
}

function guerreiroslot5 () {
    player5.setAttribute('src', slot5[1]);
    vidaplayer5 = slot5[0]
}



//-------------------------------------------------------------------------

function ladinoslot1 () {
    player1.setAttribute('src', slot1[1]);
    vidaplayer1 = slot1[0]
}

function ladinoslot3 () {
    player3.setAttribute('src', slot3[1]);
    vidaplayer3 = slot3[0]
}

function ladinoslot5 () {
    player5.setAttribute('src', slot5[1]);
    vidaplayer5 = slot5[0]
}
//----------------------------------------------------------------------------


function magoslot1 () {
    player1.setAttribute('src', slot1[1]);
    vidaplayer1 = slot1[0]
}

function magoslot3 () {
    player3.setAttribute('src', slot3[1]);
    vidaplayer3 = slot3[0]
}

function magoslot5 () {
    player5.setAttribute('src', slot5[1]);
    vidaplayer5 = slot5[0]
}


