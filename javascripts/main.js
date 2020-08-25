import { dinos, adventures } from "./../assets/data/dinoData.js";
import { infoModal } from "./components/infoModal.js";

const addDinos = (array, div) => {
  $(`#${div}`).html("");
  array.forEach((item, index) => {
    $(`#${div}`).append(`<div class="card" style="width: 18rem;">
         <div class="img-container" style="background-image: url(${item.imageUrl})">
         </div>
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <div class="progress">
            <div class="progress-bar" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${item.health}%</p></div>
        </div>
        <div class="button-section">
            <button type="button" id="pet-${index}" class="btn btn-outline-primary">Pet</button>
            <button type="button" id="feed-${index}" class="btn btn-outline-success">Feed</button>
            <button type="button" id="adventure-${index}" class="btn btn-outline-warning">Adventure</button>
            <button type="button" id="delete-${index}" class="btn btn-outline-danger">Delete</button>
            <button type="button" id="info-${index}" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal-${index}">
            Info
            </button>

`);
cardEvents(array, index)
  });
};


const cardEvents = (array, index) => {
    $(`#info-${index}`).on('click', ()=>{
        $('#infoModal').html(`${infoModal(index)}`)
        addDinos(array, 'kennel'[index])
    })
}

const init = () => {
  addDinos(dinos, "kennel");
};
init();
