import { dinos } from '/../assets/data/dinoData.js'

const infoModal = (array)=>{
    array.forEach((item)=>{
    $('#modaltarget').append(`
    <div class="modal fade" id="exampleModal-${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
<div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Dino Profile</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
</div>
<div class="modal-body container-fluid">
<div class="modal-image-container">
<img class="ml-auto modal-image" src="${item.imageUrl}" alt="modal image">
</div>
<div class="dino-info col-md-8 ml-auto">
    <li class="dinoList"><h5 class="boldModal">Name:</h5> ${item.name}</li>
    <li class="dinoList"><h5 class="boldModal">Type:</h5> ${item.type}</li>
    <li class="dinoList"><h5 class="boldModal">Age:</h5> ${item.age}</li>
    <li class="dinoList"><h5 class="boldModal">Owner:</h5> ${item.owner}</li>
    <div class="progress-modal" id="progressBar-${item.id}-modal">
    <div class="progress-bar progress-bar-striped ${
      item.health > 50 ? "bg-success" : "bg-warning"
    } progress-bar-animated" style="width: ${item.health}%" id="progress-${item.id}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><p class="health-status">${item.health}%</p></div>
    </div>
</div>

</div>
<table class="table">
   <h2 class="adventureHeader">Adventures</h2>
  <thead class="thead-dark">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Type</th>
      <th scope="col">Health Hit</th>
    </tr>
  </thead>
  <tbody id="modalLink-${item.id}">
   
  </tbody>
</table>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
    </div>
</div>
</div>
</div>
</div>
</div>`)

})}

export{
    infoModal
}