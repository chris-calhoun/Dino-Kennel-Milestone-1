import { adventures } from './../../assets/data/dinoData.js'

const adventureRandomizer = () =>{
 let random = adventures[Math.floor(Math.random() * adventures.length)]
 return random

}


export { adventureRandomizer }