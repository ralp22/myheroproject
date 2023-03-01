import { Link, useNavigate } from 'react-router-dom'
import "./Civilians.css"
import images from "../../Assets/heroesimages/mha"

export default function Civilians(props){
    console.log(props.civilians)
    let navigate = useNavigate()
    const showCivilian = (id) => {
        navigate(`${id}`)
    }

    const image = (civilian) => {
        const civilianImage = images.find(img => img.id == civilian.id)
        if(civilianImage){
            return civilianImage.images.s
        } else {
            return null
        }
    }

    return props.civilians ? (
       
        <div className="container civilians-container">
            <Link to="/"><button className="nav-button">Back</button></Link>
             <h1>Civilians</h1> 
             <div className="grid">
             {
                props.civilians.map((civilian, id)=>(
                    <img src={image(civilian)} onClick={()=>{showCivilian(id)}}className="card" key={id}/>
                ))
             }
             </div>
        </div>
    ):  <h1>Loading</h1>
}