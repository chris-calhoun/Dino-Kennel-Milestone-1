import {dinos, adventures} from "./../assets/data/dinoData.js"



const addDinos = (array, div) => {
    $(`#${div}`).html('')
    array.forEach((item, index)=> {
         $(`#${div}`).append(`<div class="card" style="width: 18rem;">
         <div class="img-container" style="background-image: url(${item.imageUrl})">
         </div>
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <div class="progress">
            <div class="progress-bar" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="button-section">

            <a href="#" id="pet-${index}" class="btn btn-outline-primary">Pet</a>
            <a href="#" id="feed-${index}" class="btn btn-outline-success">Feed</a>
            <a href="#" id="adventure-${index}"class="btn btn-outline-warning">Adventure</a>
            <a href="#" id="delete-${index}" class="btn btn-outline-danger">Delete</a>
            </div>
            </div>
        </div>`)
}
    )}

const init = ()=>{
    addDinos(dinos, 'kennel');
}
init()