function signupModal(){
    let login=document.getElementById('login')
    let singhup=document.getElementById("signup");
    let logout=document.getElementById("logout");
    login.style.display='block';
    singhup.style.display="none";

    logout.style.display='none';
    window.location.href = "./registration/registration.html";

}

function loginModal(){
    let login=document.getElementById('login')
    let singhup=document.getElementById("signup");
    let logout=document.getElementById("logout");

    logout.style.display='block';
    singhup.style.display="none";
    window.location.href = "./login/login.html";

}

function logoutModal(){
     let login=document.getElementById('login')
    let singhup=document.getElementById("signup");
    let logout=document.getElementById("logout");

    logout.style.display='none';
     login.style.display='block';
    singhup.style.display="block";
}


function toggleTheme(){
    document.body.classList.toggle('dark-mode');
}

