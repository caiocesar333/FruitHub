

function readUrl(){
    const urlParams = new URLSearchParams(window.location.search);

    const nameParam = urlParams.get("name");
    
    console.log(nameParam)
    document.getElementById('name-output').innerText = `Welcome, ${nameParam}`;
}

readUrl();