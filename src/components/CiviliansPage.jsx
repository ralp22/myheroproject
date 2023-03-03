import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import images from '../Assets/heroesimages/mha'

export default function CiviliansPage(props) {

const [civilians, setCivilians] = useState("")

let { id } = useParams()

useEffect(()=>{
    let selectedCivilian = props.civilians[id];
    setCivilians(selectedCivilian)
},[civilians, id])

const image1 = (civilian) => {
    const civilianImage = images.find(img => img.id == civilian.id)
    if(civilianImage){
        return civilianImage.images.m
    } else {
        return null
    }
}
const image2 = (civilian) => {
    const civilianImage = images.find(img => img.id == civilian.id)
    if(civilianImage){
        return civilianImage.images.l
    } else {
        return null
    }
}
const song = (civilian) => {
    const civilianImage = images.find(img => img.id == civilian.id)
    if(civilianImage){
        return civilianImage.song
    } else {
        return null
    }
}

return civilians ? (
    <div>
        <Link to="/Civilians"><button style={{marginTop: '2vmin'}} className="nav-button">Back</button></Link>
    <div className="container civilians-container" style={{maxWidth: "100vw", maxHeight: "75vh", background: `url(${image2(civilians)})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
<div className="profile">
<div className="details" style={{maxHeight: "45vmin", minWidth: "fit-content", marginTop: "20vmin", marginLeft: "10vmin"}}>
<h1><span style={{color: "white", textShadow: "2px 2px 4px gold"}}>{civilians.name} {civilians.name_japanese}</span></h1>
<p style={{fontWeight: "bold", fontFamily: "Sans", textShadow: "0 0 10px aliceblue", fontSize: "2.25vmin", padding: "1.8vmin", marginTop: "1.8vmin", maxWidth: "40vmin"}}>{civilians.civilian_description}</p>
</div>
<img style={{maxHeight: "50vh", marginTop: "20vmin", marginLeft: '30vw'}} src={image1(civilians)}/>
</div>
</div>
<figure>
    <figcaption style={{margin: '0 auto', fontFamily: 'Impact', fontSize: "2.5vmin", color: 'white', textShadow: '0 0 10px gold'}}>
        Theme Song
    </figcaption>
    <audio controls src={song(civilians)}/>
</figure> 
</div>
) : <h1>Loading . . . </h1>;

}