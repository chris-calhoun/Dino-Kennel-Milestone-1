import { cardEvents } from "./cardButtons.js";
import { dinos } from "./../../assets/data/dinoData.js"
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
    $(`#${div}`).append(`<div class="card" id="card-${item.id}" style="width: 18rem;">
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
  `);
  cardEvents(array, index, item)
    ;
  });
  
};
const randomID =()=>{
   const random = [Math.floor(Math.random() * 100)]
   return random
   
}

console.log(randomID())
// const captureNew = ()=>{
//     $('#submitForm').on('click', ()=>{
//     const name = $("#name").val();
//     const type = $("#type").val();
//     const age = $("#age").val();
//     const owner = $("#owner").val();
//     const health = $("#health").val();
//     const imageUrl = $("#imageUrl").val();

//     dinos.push({
//         id: randomID(),
//         name: name,
//         type: type,
//         age: age,
//         owner: owner,
//         adventures: [],
//         health: health,
//         imageUrl: imageUrl
//     });
//     singleDino(item)
// }
// )
   ;




export { addDinos, singleDino, randomID };
