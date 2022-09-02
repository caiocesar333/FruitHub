const btn = document.querySelector("#send");


btn.addEventListener("click",function(e){

    e.preventDefault();

    const nome = document.querySelector("#name");

    const client = nome.value;

    window.location.assign(`http://127.0.0.1:5500/fourth-page.html?name=${client}`);

});


