
import { infoModal } from './infoModal.js'
import { dinos } from '../../assets/data/dinoData.js'



const cardEvents = (index) => {
    $(`#info-${index}`).on('click', ()=>{
        $('#infoModal').html(`${infoModal(index)}`)
        addDinos( 'kennel'[index])
    })
}

const addDinos = (array, div) => {
    $(`#${div}`).html("");
    array.forEach((item, index) => {
      $(`#${div}`).append(`<div class="card" style="width: 18rem;">
           <div class="img-container" style="background-image: url(${item.imageUrl})">
           </div>
          <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <div class="progress">
              <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${item.health}%</p></div>
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
  cardEvents(index)
    });
  };

  export { 
      addDinos
  }