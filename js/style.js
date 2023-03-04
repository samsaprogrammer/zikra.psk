// Theme Change Section start
let btn = document.getElementById("btn");
let btntext = document.getElementById("btntext");
let btnicon = document.getElementById("btnicon");
let logo = document.getElementById("logo");


btn.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        btnicon.src = "img/dark.png";
        btntext.innerHTML = "Dark";
        logo.src = "img/logo-zikra.png";
    }else{
        btnicon.src = "img/sun.png";
        btntext.innerHTML = "Light";
        logo.src = "img/logo-dark.png";
    }
}

// Theme Change Section end

