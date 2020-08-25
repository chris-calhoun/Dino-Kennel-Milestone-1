import { dinos, adventures } from '/../assets/data/dinoData.js'

const infoModal = (index)=>{
    dinos.forEach((item, index)=>{
    $('#kennel').append(`
    <div class="modal fade" id="exampleModal-${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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