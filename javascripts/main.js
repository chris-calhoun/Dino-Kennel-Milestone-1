
import { divSorter } from "./components/divSort.js";
import { randomID } from "./components/addDinos.js";
import { addDinoForm } from './components/cardButtons.js'



const clickAdd = () =>{
    $('#submitForm').on('click', (e)=>{
    e.preventDefault()
     addDinoForm()
     
        
    }
    )
}



const init = () => {

divSorter();
randomID()
clickAdd();

};
init();
