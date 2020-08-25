import {dinos, adventures} from "./../assets/data/dinoData.js"

const kennelArray= [{
    name: "T-rex",
    health: 80,
    image: "./images/trex.jpg",
},
{
    name: "T-rex",
    health: 80,
    image: "./images/trex.jpg",
},
{
    name: "T-rex",
    health: 80,
    image: "./images/trex.jpg",
}]

const hospitalArray = []
 
const graveyardArray = []

const renderAllDinos = ()=>{
    return kennelArray
}

const addDinos = (array, div) => {
    $(`#${div}`).html('')
    array.forEach((item, index)=> {
         $("#kennel").append(`<div class="card" style="width: 18rem;">
         <div class="img-container" style="background-image: url(${item.imageUrl})">
         </div>
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <div class="progress">
            <div class="progress-bar" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
            <a href="#" id="pet-${index}" class="btn btn-primary">Pet</a>
            <a href="#" id="feed-${index}" class="btn btn-primary">Feed</a>
            <a href="#" id="adventure-${index}"class="btn btn-primary">Adventure</a>
            <a href="#" id="delete-${index}" class="btn btn-primary">Delete</a>
            </div>
        </div>`)
}
    )}

const init = ()=>{
    addDinos(dinos, 'kennel');
}
init()