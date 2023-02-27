import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function VillainsPage(props) {

const [villains, setVillains] = useState("")

let { id } = useParams()

useEffect(()=>{
    let selectedVillain = props.villains[id];
    setVillains(selectedVillain)
},[villains, id])

return villains ? (
<div>
<Link to="/Villains"><button className="nav-button">Back</button></Link>

<h1 className="villain-name">{villains.other_names}</h1>
<h3>{villains.name} {villains.name_japanese}</h3>
<h3 className="villain-name">{villains.quirk} {villains.quirk_japanese}</h3>
<p className="villain-name">{villains.quirk_description}</p>
</div>
) : <h1>Loading . . . </h1>;

}