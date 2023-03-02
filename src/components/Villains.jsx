import { Link, useNavigate } from 'react-router-dom'
import images from "../Assets/heroesimages/mha"
import villainlogo from '../Assets/villainlogo.png'


export default function Villains(props){
    console.log(props.villains)
    let navigate = useNavigate()
    const showVillain = (id) => {
        navigate(`${id}`)
    }

    const image = (villain) => {
        const villainImage = images.find(img => img.id == villain.id)
        if(villainImage){
            return villainImage.images.s
        } else {
            return null
        }
    }

    return props.villains ? (
        <div className="container villains-container">
            <Link to="/"><button className="nav-button">Back</button></Link>
             <h1><img src={villainlogo}/></h1> 
             <div className="grid">
             {
                props.villains.map((villain, id)=>(
                    <img src={image(villain)} onClick={()=>{showVillain(id)}}className="card villains-card" key={villain.id}/>
                    
                ))
             }
             </div>
        </div>
    ):  <h1>Loading</h1>
}