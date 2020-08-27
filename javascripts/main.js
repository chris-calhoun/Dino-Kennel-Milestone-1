
import { divSorter } from "./components/divSort.js";
import { randomID } from "./components/addDinos.js";




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
