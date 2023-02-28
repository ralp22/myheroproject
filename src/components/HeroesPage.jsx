import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function HeroesPage(props) {

const [heroes, setHeroes] = useState("")

let { id } = useParams()

useEffect(()=>{
    let selectedHero = props.heroes[id];
    setHeroes(selectedHero)
},[heroes, id])

return heroes ? (
<div className="container">
<Link to="/Heroes"><button className="nav-button">Back</button></Link>
<h1>{heroes.hero_name} {heroes.hero_name_japanese}</h1>
<h3 className="hero-name">Real name: {heroes.name} {heroes.name_japanese}</h3>
<h3 className="hero-name">Quirk: {heroes.quirk} {heroes.quirk_japanese}</h3>
<p className="hero-name">{heroes.quirk_description}</p>
</div>
) : <h1>Loading . . . </h1>;

}