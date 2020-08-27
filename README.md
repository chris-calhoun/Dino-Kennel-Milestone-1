# Dino-Kennel-Milestone-1
This was our first Milestone project at NSS. The goal was to build a single page app as a dino kennel and have dynamic features within it. Here is a list of the requirments :
    Healthy dinos show in the kennel
    Sick dinos show in the hospital
    Dead dinos show in the graveyard
    Dinos can be removed from the kennel
    Dinos can be added to the kennel
    Dinos can be fed
    Dinos can be petted
    Dinos can be sent on an adventure
    
## Motivation
The motivation was for us to showcase all the skills we had learned with Vanilla Javascript up until this point. We had to do the whole project solo and incorporate all the things we had learned. It was a really fun challenge that helped us see what we needed to work on and show how comfortable we were doing these things solo.

## Build Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/4ad1b103-0814-468c-be7a-f63851641f63/deploy-status)](https://app.netlify.com/sites/dino-kennelcl/deploys)


## Screenshots
![Screen Shot 2020-08-27 at 1 53 41 PM](https://user-images.githubusercontent.com/66916708/91484096-50ed5880-e86e-11ea-8a2d-bb4b643e7d34.png)
![Screen Shot 2020-08-27 at 1 56 22 PM](https://user-images.githubusercontent.com/66916708/91484144-62366500-e86e-11ea-931f-f435a25df0b6.png)


## Tech/Framwork
Javascript ES6
JQuery 3.5.1

## Features
The user is able to add their own dino, pet and feed the dinos to add health, and send the dinos on adventures which deducts health

## Code Example 
``` const adventureButton = (array, index, item) => {
  $(`#adventure-${item.id}`).on("click", () => {
    let randomObj = adventureRandomizer();
    $(`#modalLink-${item.id}`).append(` <tr>
          <th class="date" scope="row">${Date()}</th>
          <th class="activity" scope="row">${randomObj.title}</th>
         </tr>`);
    item.health -= randomObj.healthHit;
    if (item.health < 0) {
      item.health = 0;
     
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
    sorter(array, item, index);
    infoModal(array);
  });
};
```
## Deployed Site
https://dino-kennelcl.netlify.app/


