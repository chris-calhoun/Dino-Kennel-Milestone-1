import { dinos, kennel, hospital, graveyard } from './../../assets/data/dinoData.js'
import { addDinos } from './addDinos.js'


const divSorter = () =>{
    dinos.forEach((item)=>{
        if(item.health < 50 && item.health > 1){
            hospital.push(item)
                addDinos(hospital,'hospital')
        }
        if(item.health > 50){
            kennel.push(item)
            addDinos(kennel,'kennel')
        }
       if(item.health < 1){
           graveyard.push(item)
            addDinos(graveyard, 'graveyard')
        }
    })
}



export { divSorter }