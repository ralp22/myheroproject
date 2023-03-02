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
<div className="civilians-container" style={{backgroundSize: "cover", backgroundRepeat: "no-repeat", background: `url(${image2(civilians)})`}}>
<h1>{civilians.name} {civilians.name_japanese}</h1>
<p>{civilians.civilian_description}</p>
</div>
<div>
<img style={{maxHeight: '50vmin', justifyItems: 'right'}} src={image1(civilians)}/>
</div>
<figure style={{marginTop: '-5vmin'}}>
    <figcaption style={{fontFamily: 'Impact', fontSize: "2vmin", color: 'black', textShadow: '0 0 10px white'}}>
        {civilians.name}'s Theme Song
    </figcaption>
    <audio controls src={song(civilians)}/>
</figure> 
</div>
) : <h1>Loading . . . </h1>;

}