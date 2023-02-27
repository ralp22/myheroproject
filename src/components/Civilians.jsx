import { Link, useNavigate } from 'react-router-dom'

export default function Civilians(props){
    console.log(props.civilians)
    let navigate = useNavigate()
    const showCivilian = (id) => {
        navigate(`${id}`)
    }

    return (
       
        <div className="civilians-container">
            <Link to="/"><button className="nav-button">Back</button></Link>
             <h1>Civilians</h1> 
             <div className="grid">
             {
                props.civilians.map((civilian, id)=>(
                    <div onClick={()=>{showCivilian(id)}}className="card" key={id}>
                    {civilian.id}
                    </div>
                ))
             }
             </div>
        </div>
    )
}