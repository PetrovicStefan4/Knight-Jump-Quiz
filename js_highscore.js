// Setovanje nav-bara

let main_nav = document.querySelectorAll('a');
let currentuse_nav = document.getElementById('login-current');


if (localStorage.getItem('username').length > 0 ) {
    main_nav[0].classList.remove('bg-danger');
    main_nav[0].classList.add('disabled');
    main_nav[0].classList.add('bg-success');
    main_nav[1].classList.remove('disabled');
    main_nav[2].classList.remove('disabled');
    main_nav[3].classList.remove('disabled');
    currentuse_nav.innerHTML = `Login as <strong>${localStorage.getItem('username')
}</strong>`
currentuse_nav.classList.remove('d-none');

}

// Pravljenje Highscore tabele

let highscore_tabela = document.getElementById('highscore');
let username = window.localStorage.getItem('username');
let poeni = localStorage.getItem('poeni');
let otvorena = localStorage.getItem('otvorena');
let dozvola = localStorage.getItem('dozvola');
let highscore_igraci = 1;
let igrac = [username,poeni,otvorena];
let igrac2 = [username,poeni,otvorena];
console.log(igrac);
let igraci = [];
igraci.push(igrac2);
console.log(igraci);


// highscore_tabela.innerHTML += `<tr><th scope = "col">${highscore_igraci}</th><td>${username}</td><td>${poeni}</td><td>${otvorena}</td></tr>`
highscore_tabela.innerHTML += `<tr><th scope = "col">${highscore_igraci}</th><td>${username}</td><td>${poeni}</td><td>${otvorena}</td></tr>`




if (dozvola == true) {
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    th.innerHTML = highscore_igraci;
    td1.innerHTML = username;
    td2.innerHTML = poeni;
    td3.innerHTML = otvorena;
    
    highscore_tabela.appendChild(tr);
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

igraci.push(igrac);
    highscore_igraci++;
}

// localStorage.setItem('dzovala', false);