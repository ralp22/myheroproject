import { Link, useNavigate } from 'react-router-dom'


export default function Villains(props){
    console.log(props.villains)
    let navigate = useNavigate()
    const showVillain = (id) => {
        navigate(`${id}`)
    }

    return (
        <div className="villains-container">
            <Link to="/"><button className="nav-button">Back</button></Link>
             <h1>Villains</h1> 
             <div className="grid">
             {
                props.villains.map((villain, id)=>(
                    <div onClick={()=>{showVillain(id)}}className="card" key={villain.id}>
                    {villain.id}
                    </div>
                ))
             }
             </div>
        </div>
    )
}