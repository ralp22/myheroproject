import { useNavigate, Link } from 'react-router-dom'
import images from "../Assets/heroesimages/mha"

export default function Students(props){


    let navigate = useNavigate()
    const showStudent = (id) => {
        navigate(`${id}`)
    }


    return props.students ? (
        <div className="container">
            <Link to="/"><button className="nav-button">Back</button></Link>
             <h1>Students</h1> 
             <div className="grid">
             {
                props.students.map((student, id)=>(
                    //parseImg() will use .filter or .find to find where api id equals json id. Make function return image path. Use function as src
                    // <img src={selectedImg} onClick={()=>{showStudent(id)}} className="card" key={student.id} />
                    <img src={images[0].images.s} onClick={()=>{showStudent(id)}} className="card" key={student.id}/>
                ))
             }
             </div>
        </div>
    ) :  <h1>Loading</h1>
}


