import {dinos, adventures} from "./../assets/data/dinoData.js"
import { infoModal } from "./components/infoModal.js"


const addDinos = (array, div) => {
    
    $(`#${div}`).html('')
    array.forEach((item, index)=> {
         $(`#${div}`).append(`<div class="card" style="width: 18rem;">
         <div class="img-container" style="background-image: url(${item.imageUrl})">
         </div>
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <div class="progress">
            <div class="progress-bar" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="button-section">
            <button type="button" id="pet-${item.id}" class="btn btn-outline-primary">Pet</button>
            <button type="button" id="feed-${item.id}" class="btn btn-outline-success">Feed</button>
            <button type="button" id="adventure-${item.id}" class="btn btn-outline-warning">Adventure</button>
            <button type="button" id="delete-${item.id}" class="btn btn-outline-danger">Delete</button>
            <button type="button" id="info-${item.id}" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">
            Info
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
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
})

    }

const init = ()=>{
    addDinos(dinos, 'kennel');
    
}
init()