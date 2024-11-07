let arrayRick;

function getCharacter(){
    fetch("https://rickandmortyapi.com/api/character/?page=19",{method: "GET",})
    .then((response) => response.json())
    .then((data) => {arrayRick = data.results;appendRick(arrayRick);})
    .catch((error) => {console.error("Error", error);})
}

getCharacter();

function appendRick(Ricks) {
    let place = document.querySelector("#grid");
    let out = " ";

    for (let Rick of Ricks) {
        out += `
            <div class="card">          
                <img src="${Rick.image}">    
                <ul class="list">       
                    <li>Name: ${Rick.name}</li>
                    <li>Status: ${Rick.status}</li>
                    <li>Species: ${Rick.species}</li>
                    <li>Type: ${Rick.type ? Rick.type:'Undefined'}</li>
                    <li>Origin: ${Rick.origin.name}</li>
                    <li>Location: ${Rick.location.name}</li>
                </ul>
           </div>
        `
        }
    place.innerHTML = out;
}