import { infoModal } from "./infoModal.js";
import { divSorter } from "./divSort.js";
import {
  graveyard,
  hospital,
  kennel,
  dinos,
} from "../../assets/data/dinoData.js";

const cardEvents = (array, index, item) => {
  // FEED\
  let bool = true;
  $(`#feed-${item.id}`).on("click", () => {
    if (array[index].health < 100) {
      array[index].health += 10;
      $(`#progressBar-${item.id}`).html(``);
      $(`#progressBar-${item.id}`).html(
        ` <div class="progress-bar progress-bar-striped ${
          item.health > 50 ? "bg-success" : "bg-warning"
        } progress-bar-animated" style="width: ${
          item.health
        }%" id="progress-${index}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${
          item.health
        }%</p></div>`
      );
      if (array === hospital && array[index].health > 50 && bool === true) {
        kennel.push(item);
        $(`#card-${item.id}`).remove();
        $("#kennel").append(singleDino(item));
        bool = false;
      }
      if (array === graveyard && array[index].health > 1 && bool === true) {
        hospital.push(item);
        $(`#card-${item.id}`).remove();
        $("#hospital").append(singleDino(item));
        bool = false;
      }
    }
  });
  
  // PET
  $(`#pet-${item.id}`).on("click", () => {
    if (array[index].health < 100) {
      array[index].health += 5;
      $(`#progressBar-${item.id}`).html(``);
      $(`#progressBar-${item.id}`).html(
        ` <div class="progress-bar progress-bar-striped ${
          item.health > 50 ? "bg-success" : "bg-warning"
        } progress-bar-animated" style="width: ${
          item.health
        }%" id="progress-${index}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${
          item.health
        }%</p></div>`
      );

      if (array === hospital && array[index].health > 50 && bool === true) {
        kennel.push(item);
        $(`#card-${item.id}`).remove();
        $("#kennel").append(singleDino(item));
        bool = false;
      }
      if (array === graveyard && array[index].health > 1 && bool === true) {
        hospital.push(item);
        $(`#card-${item.id}`).remove();
        $("#hospital").append(singleDino(item));
        bool = false;
      }
    }
  });
};

const singleDino = (item) => {
  let dinoString = `<div class="card" id="card-${
    item.id
  }" style="width: 18rem;">
    <div class="img-container" style="background-image: url(${item.imageUrl})">
    </div>
   <div class="card-body">
       <h5 class="card-title">${item.name}</h5>
       <div class="progress" id="progressBar-${item.id}">
       <div class="progress-bar progress-bar-striped ${
         item.health > 50 ? "bg-success" : "bg-warning"
       } progress-bar-animated" style="width: ${item.health}%" id="progress-${
    item.id
  }" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${
    item.health
  }%</p></div>
   </div>
   <div class="button-section">
       <button type="button" id="pet-${
         item.id
       }" class="btn btn-outline-primary">Pet</button>
       <button type="button" id="feed-${
         item.id
       }" class="btn btn-outline-success">Feed</button>
       <button type="button" id="adventure-${
         item.id
       }" class="btn btn-outline-warning">Adventure</button>
       <button type="button1" id="delete-${
         item.id
       }" class="btn btn-outline-danger">Delete</button>
       <button type="button" id="info-${
         item.id
       }" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal-${
    item.id
  }">
       Info
       </button>
</div>
</div>
`;
  return dinoString;
};

const addDinos = (array, div) => {
  $(`#${div}`).html("");
  array.forEach((item, index) => {
    $(`#${div}`).append(`<div class="card" id="card-${
      item.id
    }" style="width: 18rem;">
           <div class="img-container" style="background-image: url(${
             item.imageUrl
           })">
           </div>
          <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <div class="progress" id="progressBar-${item.id}">
              <div class="progress-bar progress-bar-striped ${
                item.health > 50 ? "bg-success" : "bg-warning"
              } progress-bar-animated" style="width: ${
      item.health
    }%" id="progress-${
      item.id
    }" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${
      item.health
    }%</p></div>
          </div>
          <div class="button-section">
              <button type="button" id="pet-${
                item.id
              }" class="btn btn-outline-primary">Pet</button>
              <button type="button" id="feed-${
                item.id
              }" class="btn btn-outline-success">Feed</button>
              <button type="button" id="adventure-${
                item.id
              }" class="btn btn-outline-warning">Adventure</button>
              <button type="button1" id="delete-${
                item.id
              }" class="btn btn-outline-danger">Delete</button>
              <button type="button" id="info-${
                item.id
              }" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal-${
      item.id
    }">
              Info
              </button>
              </div>
              </div>
  `);

    cardEvents(array, index, item);
  });
};

export { addDinos };
