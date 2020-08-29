import { feedButton, petButton, adventureButton, sorter } from "./cardButtons.js";

import { infoModal } from "./infoModal.js";
import { divSorter } from "./divSort.js";
const singleDino = (item, array) => {
  let dinoString = `<div class="card card-${item.id}" id="card-${item.id}" style="width: 18rem;">
  <div class="img-container" style="background-image: url(${item.imageUrl})">
  </div>
 <div class="card-body">
     <h5 class="card-title">${item.name}</h5>
     <div class="progress" id="progressBar-${item.id}">
     <div class="progress-bar progress-bar-striped ${item.health > 50 ? "bg-success" : "bg-warning"} progress-bar-animated" style="width: ${item.health}%" id="progress-${item.id}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${item.health}%</p></div>
 </div>
 <div class="button-section-${item.id}" id="button-section-${item.id}">
     <button type="button" id="pet-${item.id}" class="btn btn-outline-primary">Pet</button>
     <button type="button" id="feed-${item.id}" class="btn btn-outline-success">Feed</button>
     <button type="button" data-toggle="popover" title="Your Adventure Was" id="adventure-${item.id}" class="btn btn-outline-warning">Adventure</button>
     <button type="button1" id="delete-${item.id}" class="btn btn-outline-danger">Delete</button>
     <div class="infoButton">
     <button type="button" id="info-${item.id}" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal-${item.id}">
     Info
     </button></div>
     <div id="adventure-alert-${item.id}"></div>
     </div>
     </div>
`;
  feedButton(array, item);
  petButton(array,item);
  adventureButton(array,item);
  sorter(array, item)
  return dinoString;
  
};
const deadDino = (item) => {
    let dinoString = `<div class="card card-${item.id}" id="card-${item.id}" style="width: 18rem;">
    <div class="img-container" style="background-image: url(${item.imageUrl})">
    </div>
   <div class="card-body">
       <h5 class="card-title">${item.name}</h5>
       <div class="progress" id="progressBar-${item.id}">
       <div class="progress-bar progress-bar-striped ${item.health > 50 ? "bg-success" : "bg-warning"} progress-bar-animated" style="width: ${item.health}%" id="progress-${item.id}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${item.health}%</p></div>
   </div>
   
   <div class="img-container-death" style="background-image: url(./images/death2.jpg)">
   
   <div class="infoButton">
   <button type="button" id="info-${item.id}" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal-${item.id}">
   Info
   </button>
   </div>
       </div>
       </div>
  `;
  
    return dinoString;
    
  };

const addDinos = (array, div) => {
  $(`#${div}`).html("");
  array.forEach((item, index) => {
    $(`#${div}`).append(`<div class="card card-${item.id}" id="card-${item.id}" style="width: 18rem;">
           <div class="img-container" style="background-image: url(${item.imageUrl})">
           </div>
          <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <div class="progress" id="progressBar-${item.id}">
              <div class="progress-bar progress-bar-striped ${
                item.health > 50 ? "bg-success" : "bg-warning"
              } progress-bar-animated" style="width: ${item.health}%" id="progress-${item.id}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${item.health}%</p></div>
          </div>
          <div class="button-section-${item.id}" id="button-section-${item.id}">
              <button type="button" id="pet-${item.id}" class="btn btn-outline-primary">Pet</button>
              <button type="button" id="feed-${item.id}" class="btn btn-outline-success">Feed</button>
              <button type="button" id="adventure-${item.id}" class="btn btn-outline-warning">Adventure</button>
              <button type="button1" id="delete-${item.id}" class="btn btn-outline-danger">Delete</button>
              <div class="infoButton">
                <button type="button" id="info-${item.id}" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal-${item.id}">
                Info
                </button>
                <div id="adventure-alert-${item.id}"></div>
                </div>
              </div>
              </div>
  `);
  infoModal(array);
  feedButton(array, item);
  petButton(array, item)
  adventureButton(array, item)
    ;
  });
  
};



   




export { addDinos, singleDino, deadDino };
