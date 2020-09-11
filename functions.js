let funkcija_gameover = (niz, a, b ) => {
    let kraj=false;

    let x1 = (a+2)*10+b+1;
    let x2 = (a-2)*10+b+1;
    let x3 = (a+2)*10+b-1;
    let x4 = (a-2)*10+b-1;
    let x5 = (a+1)*10+b+2;
    let x6 = (a-1)*10+b+2;
    let x7 = (a+1)*10+b-2;
    let x8 = (a-1)*10+b-2;

    let x1GO = niz.includes(x1);
    let x2GO = niz.includes(x2);
    let x3GO = niz.includes(x3);
    let x4GO = niz.includes(x4);
    let x5GO = niz.includes(x5);
    let x6GO = niz.includes(x6);
    let x7GO = niz.includes(x7);
    let x8GO = niz.includes(x8);

        if (x1GO ==true || x2GO === true || x3GO ===true || x4GO == true || x5GO ==true || x6GO == true  || x7GO ==true || x8GO ==true) {

         }
        else { kraj = true;}   
    
    return kraj;
}


// Funkcija pitanja 


let funkcija_pitanje = (pitanja) => {
   let div_Pitanje = document.getElementById('divPitanje'); 

    div_Pitanje.innerHTML = `<ul>
        <li class="pitanje qi" class="quiz" id="quiz" data-toggle="buttons">${pitanja[0]}</li>
        <li class="odgA od btn-dark qi" id="A" >${pitanja[1]}</li>
        <li class="odgB od btn-dark qi" id="B" >${pitanja[2]}</li>
        <li class="odgC od btn-dark qi" id="C" >${pitanja[3]}</li>
        <li class="odgD od btn-dark qi" id="D" >${pitanja[4]}</li>
        </ul>`; 
    
    }



// Finalna funkcija

let finalna = (zvuk) => {
    let alertDiv = document.getElementById('div-bottom-alert');

    alertDiv.classList.remove('d-none');
    alertDiv.classList.remove('alert-warning');
    alertDiv.classList.add('alert-info');
    alertDiv.innerHTML = `<strong>GAME OVER</strong>`;
    setTimeout(function(){ alertDiv.classList.add('d-none') 
    alertDiv.classList.remove('alert-info')
    alertDiv.classList.add('alert-warning');
    ;
    }, 1500);  

    if (zvuk == true){
        let audio_gameOver = new Audio("gameover.wav");
        audio_gameOver.play();}
};


// Tacan odgovor


let tacanOdg = (poeni,zvuk) => {
    let alertDiv = document.getElementById('div-bottom-alert');
    let div_Pitanje = document.getElementById('divPitanje'); 
    let div_Poeni = document.getElementById('divPoeni');
    let audio_righAnswer=new Audio("sounds/right.mp3");

        if (zvuk == true){audio_righAnswer.play();}

    div_Pitanje.innerHTML='';

        alertDiv.classList.remove('d-none');
        alertDiv.classList.remove('alert-warning');
        alertDiv.classList.add('alert-success');
        alertDiv.innerHTML = `<strong>TACAN ODGOVOR</strong>`;
        setTimeout(function(){ alertDiv.classList.add('d-none') 
        alertDiv.classList.remove('alert-success');
        alertDiv.classList.add('alert-warning');
        }, 1500);        

        div_Poeni.innerHTML = `<div id="top_Poeni"><p>Broj poena:${poeni}</p></div>`;   

}

// Netacan odgovor

let netacanOdg = (poeni,zvuk) => {
    let alertDiv = document.getElementById('div-bottom-alert');
    let div_Pitanje = document.getElementById('divPitanje'); 
    let div_Poeni = document.getElementById('divPoeni');
    let audio_wrongAnswer=new Audio("sounds/wrong.mp3");

        if (zvuk == true){audio_wrongAnswer.play();}

    div_Pitanje.innerHTML='';
                                                   
        alertDiv.classList.remove('d-none');
        alertDiv.classList.remove('alert-warning');
        alertDiv.classList.add('alert-danger');

        alertDiv.innerHTML = `<strong>POGRESAN ODGOVOR</strong>`;
        setTimeout(function(){ alertDiv.classList.add('d-none') 
        alertDiv.classList.remove('alert-danger');
        alertDiv.classList.add('alert-warning');
        }, 1500);     

         div_Poeni.innerHTML = `<div id="top_Poeni"><p>Broj poena:${poeni}</p></div>`;   
}                               


// Zabranjeno polje

let zPolje = (zvuk,ispis,br) => {
    let alertDiv = document.getElementById('div-bottom-alert');
    let notOpen = new Audio("sounds/notopen.mp3");
    if (zvuk == true){notOpen.play();}

        alertDiv.classList.remove('d-none');
        alertDiv.innerHTML = `<strong>Skakac ne moze da stane na ovo polje</strong>`;
        setTimeout(function(){ alertDiv.classList.add('d-none') }, 1500);
        ispis.innerHTML = br;
           
}

// Predjeno polje

let mPolje = (zvuk,ispis,br) => {
    let alertDiv = document.getElementById('div-bottom-alert');
    let notOpen = new Audio("sounds/notopen.mp3");
    if (zvuk == true){notOpen.play();} 

        alertDiv.classList.remove('d-none');
        alertDiv.innerHTML = `<strong>Skakac je vec bio na ovom polju</strong>`;
        setTimeout(function(){ alertDiv.classList.add('d-none') }, 1500);
        ispis.innerHTML = br;
}


// Ispis kraj igre

let krajIgre = (all) => {
    
    let odgovori_li= document.querySelectorAll('.od');
    odgovori_li.forEach(pit =>{

        pit.addEventListener('click', (e) =>{
            e.preventDefault();
            finalna();
            // game.classList.add('d-none');
            all.innerHTML = `<div class="jumbotron" id="score">
                <h1 class="display-4">GAME OVER</h1>
                <p class="lead">PLAYER:${localStorage.getItem('username')}</p>
                <hr class="my-4">
                <p>POINTS:${localStorage.getItem('poeni')}</p>
                <p class="lead">
                    <a class="btn btn-danger btn-lg" href="index.html" role="button">Play again</a>
                    <a class="btn btn-danger btn-lg" href="index_highscore.html" role="button">Highscore</a>
                </p>
                </div>`;
                window.localStorage.setItem('dozvola',true);
         });
});
}


// Funkcija za brisanje polja  

let deleteCell = (elem,niz_svih_polja) => {

    let ii = parseInt(elem.id[0]+elem.id[1]);
    let index_za_brisanje = niz_svih_polja.indexOf(ii);
    let izbrisi_ID = niz_svih_polja.splice(index_za_brisanje,1);}




// Export


export {funkcija_gameover,funkcija_pitanje, finalna,tacanOdg,netacanOdg,
zPolje,mPolje,krajIgre,deleteCell};