import { useNavigate, Link } from 'react-router-dom'
import images from "../Assets/heroesimages/mha"
import ualogo from "../Assets/ualogo.png"

export default function Students(props){


    let navigate = useNavigate()
    const showStudent = (id) => {
        navigate(`${id}`)
    }
    const image = (student) => {
        const studentImage = images.find(img => img.id == student.id)
        if(studentImage){
            return studentImage.images.s
        } else {
            return null
        }
    }

    return props.students ? (
        <div className="container students-container">
            <Link to="/"><button className="nav-button">Back</button></Link>
             <h1><img src={ualogo} style={{maxHeight: "17.5vmin"}}/></h1> 
             <div className="grid">
             {
                props.students.map((student, id)=>(
                    <img src={image(student)} onClick={()=>{showStudent(id)}} className="card students-card" key={id}/>
                ))
             }
             </div>
        </div>
    ) :  <h1>Loading</h1>
}


