import { Link, useNavigate } from 'react-router-dom'


export default function Heroes(props){
    console.log(props.heroes)
    let navigate = useNavigate()
    const showHero = (id) => {
        navigate(`${id}`)
    }

    return props.heroes ? (
        <div className="container">
            <Link to="/"><button className="nav-button">Back</button></Link>
             <h1>Heroes</h1> 
             <div className="grid">
             {
                props.heroes.map((hero, id)=>(
                    <div onClick={()=>{showHero(id)}}className="card" key={hero.id}>
                    {hero.id}
                    </div>
                ))
             }
             </div>
        </div>
    ):  <h1>Loading</h1>
}