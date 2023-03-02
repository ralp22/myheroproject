import { Link, useNavigate } from 'react-router-dom'
import images from "../Assets/heroesimages/mha"
import plusultra from "../Assets/plusultra.png"

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
       
        <div className="container civilians-container" style={{opacity: 0.8}}>
            <Link to="/"><button className="nav-button">Back</button></Link>
             <h1><img src={plusultra} style={{maxHeight: "15vmin"}}/></h1> 
             <div style={{marginBottom: "20vmin"}} className="grid">
             {
                props.civilians.map((civilian, id)=>(
                    <img src={image(civilian)} onClick={()=>{showCivilian(id)}}className="card" key={id}/>
                ))
             }
             </div>
        </div>
    ):  <h1>Loading</h1>
}