// 1. Importi 

import {sva_pitanja} from './questions_kjq.js';
import {funkcija_gameover,funkcija_pitanje,tacanOdg,netacanOdg,
mPolje,zPolje,krajIgre,deleteCell} from './functions.js'


// 2. Selektori 

let skakac = document.querySelector('.konj');
let ispis = document.getElementById('ispis');
let div_Pitanje = document.getElementById('divPitanje'); 
let div_Poeni = document.getElementById('divPoeni');
let div_tN = document.getElementById('tacnoNetacno');
let alert = document.getElementById('bottom-alert');
let alertDiv = document.getElementById('div-bottom-alert');
let main_nav = document.querySelectorAll('a');
let currentuse_nav = document.getElementById('login-current');
let tabla = document.getElementById('game');
let all = document.querySelector('.sve');
let score = document.getElementById('score');


// 3.Local storage

window.localStorage.setItem('poeni',0);
window.localStorage.removeItem('dozvola');


// 4.Varijable

let poeni = 0;
let br_odgovorenih=0;
let sound_on = true;
let sound_on_br = 0;


// 5. Login succsses 

if (localStorage.getItem('username').length > 0 ) {
    main_nav[0].classList.remove('bg-danger');
    main_nav[0].classList.add('disabled');
    main_nav[0].classList.add('bg-success');
    main_nav[1].classList.remove('disabled');

    // Highscore i mulitplayer su onemoguceni trenutno , dok se ne odrade
 

    // main_nav[2].classList.remove('disabled');
    // main_nav[3].classList.remove('disabled');
    currentuse_nav.innerHTML = `Login as <strong>${localStorage.getItem('username')
}</strong>`
currentuse_nav.classList.remove('d-none');

}

// 6. Zvuk 

main_nav[5].addEventListener('click',() => {
    if (sound_on_br%2 == 0){
        sound_on =false;
        sound_on_br++;

    }
    else
    {   sound_on =true;
        sound_on_br++;
    }
})

// 7.

// Sahovska polja selektor

let sva_polja = document.querySelectorAll('td');

sva_polja.forEach(elem=>{
    if (elem.className !== 'oznake') {
        elem.classList.add('polja');
    }
})

let polja = document.querySelectorAll('.polja');

// Niz svih polja

let niz_svih_polja = [];
for(let i=11; i<89; i++){
 if(i%10 !==0 && i%10 !==9 && i !==12){
    niz_svih_polja.push(i);
             }
    }

// Pozvi audio fajlova

let audio = new Audio("sounds/open.wav");
let audio_righAnswer=new Audio("sounds/right.mp3");
let audio_wrongAnswer = new Audio("sounds/wrong.mp3");

skakac.innerHTML = '<img class="konj_slika" src="skakac.png" >';
let predjenaPitanja = [];
let randomNumber;
let randomNumber1;
let n;

// Glavna funkcija 

let funkcija_konj = (polja, niz_svih_polja) => {
    let niz_predjenih_polja = ["12"];
    let a = 1;
    let b = 2;
    let br = 1;
    let poeni = 0;
    let index_kraj = 1;
    let kraj = false;

    polja.forEach( elem => {
        elem.addEventListener('click', ()=>{
            audio_wrongAnswer.pause();

            let d = elem.id%10;
            let c = (elem.id-d)/10;

            n = niz_predjenih_polja.includes(elem.id);
            let gJump = c-a == 1 && d-b == 2  || c-a == -1 && d-b == 2 || c-a == -1 && d-b == -2 ||  c-a == 1 && d-b == -2
            || c-a == 2 && b-d == 1 || c-a == -2 && b-d == -1 || c-a == 2 && b-d == -1 || c-a == -2 && b-d == 1 ;

            if (n == false) {
                if (gJump) {
                        if (br-1 == br_odgovorenih){
                            if (sound_on == true){
                                audio.play();

                            }
                            skakac.classList.add('prazno');
                            skakac.classList.remove('konj');
                            skakac.innerHTML='';
                            elem.classList.add('konj');
                            skakac = elem; 
                            skakac.innerHTML = '<img class="konj_slika" src="skakac.png" >'; 
                            niz_predjenih_polja.push(elem.id);
                            a = c;
                            b = d;
                            br++;

                            ispis.innerHTML = `Broj otvorenih polja:${br}`;
                            
                            randomNumber = Math.floor(Math.random()*(sva_pitanja.length));
                         
                            funkcija_pitanje(sva_pitanja[randomNumber]);
                            funkcija_tacno(sva_pitanja[randomNumber]);

                            predjenaPitanja.push(randomNumber);
                            sva_pitanja.splice(randomNumber,1);
                                
                                
                                deleteCell(elem,niz_svih_polja);
                                funkcija_gameover(niz_svih_polja,c,d);

                                if (funkcija_gameover(niz_svih_polja,c,d) == true){
                                    krajIgre (all);
                            }
                        }
                         
                    }   

                    else {zPolje (sound_on,ispis,br);}
                }  

               else {mPolje(sound_on,ispis,br);}  

                });
        });
        ispis.innerHTML = br;
    };

funkcija_konj(polja, niz_svih_polja);





// Funkcija 

let funkcija_tacno = (pitanja) => {

    let odgovori_li = document.querySelectorAll('.od');

        odgovori_li.forEach(pit =>{
        pit.addEventListener('click', () =>{

                if (pit.id == pitanja[5]){

                    poeni= poeni+10;
                    tacanOdg(poeni,sound_on);
                    br_odgovorenih++;   
                    localStorage.setItem('poeni',poeni);}

                else {
                    netacanOdg(poeni,sound_on);
                    br_odgovorenih++;  
                }
                                      
                localStorage.setItem('otvorena',br_odgovorenih+1);

                        })
                    });
}





