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

return villains ? (
<div className="container villains-container" style={{backgroundSize: "100%", backgroundRepeat: "no-repeat", background: `url(${image2(villains)})`}}>
<Link to="/Villains"><button className="nav-button">Back</button></Link>
<div className="profile">
{/* <img src={image2(villains)} style={{maxHeight: "50vmin", maxWidth: "125vmin"}}/> */}
<section>
<img style={{maxHeight: '50vmin'}} src={image1(villains)}/>
</section>
<div className="details">
<h1>{Array.from(villains.other_names).toString()}</h1>
<h3>{villains.name} {villains.name_japanese}</h3>
<h3>{villains.quirk} {villains.quirk_japanese}</h3>
<p>{villains.quirk_description}</p>
</div>
</div>
</div>
) : <h1>Loading . . . </h1>;

}