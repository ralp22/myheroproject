import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import images from "../Assets/heroesimages/mha"

export default function VillainsPage(props) {

const [villains, setVillains] = useState("")

let { id } = useParams() 

useEffect(()=>{
    let selectedVillain = props.villains[id];
    setVillains(selectedVillain)
},[villains, id])

const image1 = (villain) => {
    const villainImage = images.find(img => img.id == villain.id)
    if(villainImage){
        return villainImage.images.m
    } else {
        return null
    }
}
const image2 = (villain) => {
    const villainImage = images.find(img => img.id == villain.id)
    if(villainImage){
        return villainImage.images.l
    } else {
        return null
    }
}
const song = (villain) => {
    const villainImage = images.find(img => img.id == villain.id)
    if(villainImage){
        return villainImage.song
    } else {
        return null
    }
}

return villains ? (
    <div>
        <Link to="/Villains"><button style={{marginTop: '2vmin'}} className="nav-button">Back</button></Link>
        <div className="container villains-container" style={{backgroundImage: `url(${image2(villains)})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", maxWidth: '100vw', maxHeight: '75vh'}}>
    <div className="profile">
    <img style={{maxHeight: "35vh", marginTop: "20vmin", marginLeft: '10vw'}} src={image1(villains)}/>
    <div className="details" style={{marginTop: "20vmin", marginLeft: '45vw', marginRight: "10vw", height: "fit-content"}}>
        <h1><span style={{color: "white", textShadow: "4px 4px 4px rgb(54, 0, 88)"}}>{Array.from(villains.other_names).toString()}</span></h1>
        <h3><span style={{color: "white", textShadow: "0 0 10px black"}}>Real name: </span>{villains.name} {villains.name_japanese}</h3>
        <h3><span style={{color: "white", textShadow: "0 0 10px black"}}>Quirk: </span>{villains.quirk} {villains.quirk_japanese}</h3>
        <p style={{fontWeight: "bold", fontFamily: "Sans", textShadow: "0 0 10px red", fontSize: "2vmin", padding: "1.8vmin", marginTop: "1.8vmin", maxWidth: "40vmin"}}>{villains.quirk_description}</p>
    </div>
    </div>
    <figure style={{marginTop: '-15vmin'}}>
        <figcaption style={{fontFamily: 'Impact', fontSize: "2.5vmin", color: 'white', textShadow: '0 0 12px red'}}>
            Theme Song
        </figcaption>
        <audio controls src={song(villains)}/>
    </figure>
    </div>
    </div>

) : <h1>Loading . . . </h1>;

}