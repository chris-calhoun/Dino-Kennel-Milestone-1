import { singleDino, deadDino } from "./addDinos.js";
import { adventureRandomizer } from "./adventuresList.js";
import { kennel, hospital, graveyard } from "./../../assets/data/dinoData.js";

import { infoModal } from "./infoModal.js";

const feedButton = (array, index, item) => {
  $(`#feed-${item.id}`).on("click", () => {
    if (item.health < 100) {
      item.health += 10;
      if (item.health > 100) {
        item.health = 100;
      }
      $(`#progressBar-${item.id}-modal`).html(``);
      $(`#progressBar-${item.id}-modal`).html(
        ` <div class="progress-bar progress-bar-striped ${
          item.health > 50 ? "bg-success" : "bg-warning"
        } progress-bar-animated" style="width: ${
          item.health
        }%" id="progress-${index}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${
          item.health
        }%</p></div>`
      );
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

      sorter(array, item, index);
    }
    infoModal(array);
  });
  // DELETE

  $(`#delete-${item.id}`).on("click", () => {
    $(`#card-${item.id}`).remove();
  });
};
const petButton = (array, index, item) => {
  $(`#pet-${item.id}`).on("click", () => {
    if (item.health < 100) {
      item.health += 5;
      if (item.health > 100) {
        item.health = 100;
      }
      $(`#progressBar-${item.id}-modal`).html(``);
      $(`#progressBar-${item.id}-modal`).html(
        ` <div class="progress-bar progress-bar-striped ${
          item.health > 50 ? "bg-success" : "bg-warning"
        } progress-bar-animated" style="width: ${
          item.health
        }%" id="progress-${index}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${
          item.health
        }%</p></div>`
      );
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
      sorter(array, item, index);

      infoModal(array);
    }
  });
};
const adventureButton = (array, index, item) => {
  $(`#adventure-${item.id}`).on("click", () => {
    let randomObj = adventureRandomizer();
    $(`#modalLink-${item.id}`).append(` <tr>
          <th class="date" scope="row">${Date()}</th>
          <th class="activity" scope="row">${randomObj.title}</th>
          <th class="health" scope="row">-${randomObj.healthHit}</th>
         </tr>`);
    $(`#adventure-alert-${item.id}`).html(`<div class="alert alert-warning" role="alert">
    ${randomObj.title} deducted ${randomObj.healthHit} Health!
  </div>`)
  setTimeout(function(){
    $(`#adventure-alert-${item.id}`).remove();
  }, 4000)
    item.health -= randomObj.healthHit;
    if (item.health < 0) {
      item.health = 0;
    }
    $(`#progressBar-${item.id}-modal`).html(``);
    $(`#progressBar-${item.id}-modal`).html(
      ` <div class="progress-bar progress-bar-striped ${
        item.health > 50 ? "bg-success" : "bg-warning"
      } progress-bar-animated" style="width: ${
        item.health
      }%" id="progress-${index}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${
        item.health
      }%</p></div>`
    );
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
    sorter(array, item, index);
    infoModal(array);
  });
};

const sorter = (array, item, index) => {
  let boolVal = true;
  if (array === kennel && item.health < 1 && boolVal) {
    graveyard.push(item);
    $(`.card-${item.id}`).remove();
    $("#graveyard").append(deadDino(item));
    boolVal = false;
  }
  if (array === kennel && item.health < 50 && item.health > 1 && boolVal) {
    hospital.push(item);
    $(`#card-${item.id}`).remove();
    $("#hospital").append(singleDino(item));
    boolVal = false;
    feedButton(array, index, item);
    petButton(array, index, item);
    adventureButton(array, index, item);
  }
  if (array === graveyard && item.health > 1 && boolVal) {
    hospital.push(item);
    $(`.card-${item.id}`).remove();
    $("#hospital").append(singleDino(item));
    boolVal = false;
    feedButton(array, index, item);
    petButton(array, index, item);
    adventureButton(array, index, item);
  }

  if (array === hospital && item.health > 50 && boolVal) {
    kennel.push(item);
    $(`.card-${item.id}`).remove();
    $("#kennel").append(singleDino(item));
    boolVal = false;
    feedButton(array, index, item);
    petButton(array, index, item);
    adventureButton(array, index, item);
  }
  if (array === hospital && item.health < 1 && boolVal) {
    graveyard.push(item);
    $(`.card-${item.id}`).remove();
    $("#graveyard").append(deadDino(item));
    boolVal = false;
  }
};

export { feedButton, petButton, adventureButton };
