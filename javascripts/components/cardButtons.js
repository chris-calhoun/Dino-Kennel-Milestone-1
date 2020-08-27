
import {hospital, kennel, graveyard, dinos} from "../../assets/data/dinoData.js";

import { singleDino, randomID, addDinos } from './addDinos.js'

import { infoModal } from './infoModal.js'

import { adventureRandomizer } from './adventuresList.js' 

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
        infoModal(dinos)
}



const cardEvents = (array, index, item) => {
    // FEED\
 
    let bool = true;
    $(`#feed-${item.id}`).on("click", () => {
      
      if (array[index].health < 100) {
        array[index].health += 10;

        if(array[index].health > 100){
            array[index].health = 100
           }
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
      infoModal(array);
      
    });
     bool = true
    // PET
    $(`#pet-${item.id}`).on("click", () => {
    if (array[index].health < 100) {
        array[index].health += 5;
        if(array[index].health > 100){
            array[index].health = 100
           }
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
          $("#hospital").append(singleDino(item))
          bool = false;
        }
      }
      infoModal(array);
    });

    // DELETE

    $(`#delete-${item.id}`).on("click", () => {
        $(`#card-${item.id}`).remove();
    })
     bool = true
    // ADVENTURE
    $(`#adventure-${item.id}`).on('click',()=>{
        let randomObj = adventureRandomizer()
        $(`#modalLink-${item.id}`).append(` <tr>
        <th scope="row">${Date()}</th>
        <th scope="row">${randomObj.title}</th>
       </tr>`)
       array[index].health -= randomObj.healthHit;
       if(array[index].health < 0){
        array[index].health = 0
       }
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
       if (array === kennel && array[index].health <= 50 && array[index].health > 1 && bool === true) {
        hospital.push(item);
        $(`#card-${item.id}`).remove();
        $("#hospital").append(singleDino(item));
        bool = false;
      }
      if (array === hospital && array[index].health < 1 && bool === true) {
        graveyard.push(item);
        $(`#card-${item.id}`).remove();
        $("#graveyard").append(singleDino(item))
        bool = false;
      }
      
       console.log(array[index].health)
    })


  };

  export { cardEvents, addDinoForm }