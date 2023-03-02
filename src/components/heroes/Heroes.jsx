import { Link, useNavigate } from 'react-router-dom'
import images from "../../Assets/heroesimages/mha"
import herologo from "../../Assets/herologo.webp"
import "./Heroes.css"

export default function Heroes(props){
    console.log(props.heroes)
    let navigate = useNavigate()
    const showHero = (id) => {
        navigate(`${id}`)
    }

    const image = (hero) => {
        const heroImage = images.find(img => img.id == hero.id)
        if(heroImage){
            return heroImage.images.s
        } else {
            return null
        }
    }

    return props.heroes ? (
        <div className="container heroes-container">
            <Link to="/"><button className="nav-button">Back</button></Link>
             <h1><img src={herologo} style={{maxHeight: "17.5vmin"}}/></h1> 
             <div className="grid">
             {
                props.heroes.map((hero, id)=>(
                    <img src={image(hero)} onClick={()=>{showHero(id)}}className="card" key={hero.id}/>  
                ))
             }
             </div>
        </div>
    ):  <h1>Loading</h1>
}