
import { infoModal } from "./infoModal.js";
import { addDinos, singleDino } from './addDinos.js'
import { kennel, dinos } from './../../assets/data/dinoData.js'
const clickAdd = () =>{
    $('#submitForm').on('click', (e)=>{
    e.preventDefault()
     addDinoForm()
     }
    )
}

const randomID = () => {
    const random = [Math.floor(Math.random() * 100)];
    return random;
  };

const addDinoForm = () => {
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
      imageUrl: imageUrl,
    });
    
    addDinos(kennel, "kennel");
    
  };

  export{ 
      addDinoForm,
      clickAdd

}