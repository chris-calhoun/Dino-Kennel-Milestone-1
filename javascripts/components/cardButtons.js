
import {hospital, kennel, graveyard} from "../../assets/data/dinoData.js";

import { singleDino, randomID, addDinos } from './addDinos.js'


const addDinoForm = () =>{
    const name = $("#name").val();
        const type = $("#type").val();
        const age = $("#age").val();
        const owner = $("#owner").val();
        
        const imageUrl = $("#imageUrl").val();
    
        kennel.push({
            id: randomID(),
            name: name,
            type: type,
            age: age,
            owner: owner,
            adventures: [],
            health: 100,
            imageUrl: imageUrl
        });
        addDinos(kennel, 'kennel')
}



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

    // DELETE

    $(`#delete-${item.id}`).on("click", () => {
        $(`#card-${item.id}`).remove();
    })

 


  };

  export { cardEvents, addDinoForm }