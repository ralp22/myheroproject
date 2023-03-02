import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import images from '../Assets/heroesimages/mha'

export default function HeroesPage(props) {

const [heroes, setHeroes] = useState("")

let { id } = useParams()

useEffect(()=>{
    let selectedHero = props.heroes[id];
    setHeroes(selectedHero)
},[heroes, id])

const image1 = (hero) => {
    const heroImage = images.find(img => img.id == hero.id)
    if(heroImage){
        return heroImage.images.m
    } else {
        return null
    }
}
const image2 = (hero) => {
    const heroImage = images.find(img => img.id == hero.id)
    if(heroImage){
        return heroImage.images.l
    } else {
        return null
    }
}
const song = (hero) => {
    const heroImage = images.find(img => img.id == hero.id)
    if(heroImage){
        return heroImage.song
    } else {
        return null
    }
}

return heroes ? (
    <div>
        <Link to="/Heroes"><button style={{marginTop: '2vmin'}} className="nav-button">Back</button></Link>
<div className="heroes-container" style={{maxHeight: '75vh', background: `url(${image2(heroes)})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
    <div className="profile">
        <div className="details" style={{maxHeight: "45vmin", marginTop: "25vmin", marginLeft: "10vmin"}}>
<h1><span style={{fontSize: "4vmin", color: "white", textShadow: "4px 4px 4px navy"}}>{heroes.hero_name} {heroes.hero_name_japanese}</span></h1>
<h3><span style={{color: "white", textShadow: "0 0 10px black"}}>Real name: </span><span style={{textShadow: "0 0 10px aliceblue"}}>{heroes.name} {heroes.name_japanese}</span></h3>
<h3><span style={{color: "white", textShadow: "0 0 10px black"}}>Quirk: </span><span style={{textShadow: "0 0 10px aliceblue"}}>{heroes.quirk} {heroes.quirk_japanese}</span></h3>
<p style={{fontWeight: "bold", fontFamily: "Sans", textShadow: "0 0 10px aliceblue", fontSize: "2vmin", padding: "1.8vmin", marginTop: "1.8vmin", maxWidth: "40vmin"}}>{heroes.quirk_description}</p>
</div>
<img style={{marginTop: "20vmin", marginLeft: '30vw'}} src={image1(heroes)}/>
</div>
</div>
<figure>
<figcaption style={{fontFamily: 'Impact', fontSize: "2.5vmin", color: 'white', textShadow: '0 0 10px red'}}>
        {heroes.hero_name}'s Theme Song
    </figcaption>
    <audio controls src={song(heroes)}/>
</figure> 
</div>

) : <h1>Loading . . . </h1>; 

}