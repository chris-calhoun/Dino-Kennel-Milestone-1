
import { divSorter } from "./components/divSort.js";
import { infoModal } from "./components/infoModal.js"
import { randomID } from "./components/addDinos.js";
import { addDinoForm } from './components/cardButtons.js'


const clickAdd = () =>{
    $('#submitForm').on('click', (e)=>{
        e.preventDefault()
     addDinoForm()
     infoModal()
        
    }
    )
}



const init = () => {
 infoModal();
divSorter();
randomID()
clickAdd();

};
init();
