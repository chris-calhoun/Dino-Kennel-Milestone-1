import { dinos, kennel, hospital, graveyard } from './../../assets/data/dinoData.js'
import { addDinos } from './addDinos.js'
import { infoModal } from './infoModal.js'

const divSorter = () =>{
    
    dinos.forEach((item, index)=>{
        if(item.health < 50 && item.health > 1){
            hospital.push(item)
           
        }
        if(item.health > 50){
            kennel.push(item)
            
        }
       if(item.health < 1){
           graveyard.push(item)
            
        }
    })
    addDinos(kennel,'kennel')
    addDinos(graveyard, 'graveyard')
    addDinos(hospital, 'hospital')
    infoModal(dinos)
}


export { divSorter }