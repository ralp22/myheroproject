import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CiviliansPage(props) {

const [civilians, setCivilians] = useState("")

let { id } = useParams()

useEffect(()=>{
    let selectedCivilian = props.civilians[id];
    setCivilians(selectedCivilian)
},[civilians, id])

return civilians ? (
<div className="container">
<Link to="/Civilians"><button className="nav-button">Back</button></Link>
<div>
<h1 className="civilian-name">{civilians.name} {civilians.name_japanese}</h1>
<p className="civilian-name">{civilians.civilian_description}</p>
</div>
</div>
) : <h1>Loading . . . </h1>;

}