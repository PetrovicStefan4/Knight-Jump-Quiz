let login_submit = document.getElementById('submit-login');
let login_username = document.getElementById('username-login');
let login_form = document.getElementById("form-login");
let main_nav = document.querySelectorAll('a');
let currentuse_nav = document.getElementById('login-current');
let loginLS;
let loginS_succsses;
// let korisnici = [];

login_submit.addEventListener('click',(e)=>{
    e.preventDefault();
    // let korisnik = ['',[]];
    // korisnik[0]= login_username.value;
    // korisnici.push(korisnik);
    loginLS = login_username.value;
    localStorage.setItem('username',loginLS);
    login_form.classList.add('d-none');
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
    loginS_succsses = true;


})

console.log(localStorage.getItem('username'));

