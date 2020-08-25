import { dinos } from '/../assets/data/dinoData.js'

const infoModal = ()=>{
    dinos.forEach((item)=>{
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
<div class="img-container col-md-8 ml-auto" style="background-image: url(${item.imageUrl})">
</div>
<div class="dino-info col-md-5 ml-auto">
    <li class="dinoList"><h5>Name:</h5> ${item.name}</li>
    <li class="dinoList"><h5>Type:</h5> ${item.type}</li>
    <li class="dinoList"><h5>Age:</h5> ${item.age}</li>
    <li class="dinoList"><h5>Owner:</h5> ${item.owner}</li>
    <li class="dinoList"><h5>Health:</h5> ${item.health}</li>
</div>
</div>
<table class="table">
   <h2 class="adventureHeader">Adventures</h2>
  <thead class="thead-dark">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
    </tr>
  </tbody>
</table>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
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