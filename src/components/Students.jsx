import { useNavigate, Link } from 'react-router-dom'
import images from "../Assets/heroesimages/mha"


export default function Students(props){


    let navigate = useNavigate()
    const showStudent = (id) => {
        navigate(`${id}`)
    }
    const image = (student) => {
        const studentImage = images.find(img => img.id == student.id)
        // console.log(studentImage)
        // console.log(student.id)
        // console.log(images[0].id)
        if(studentImage){
            return studentImage.images.s
        } else {
            return null
        }
    }

    return props.students ? (
        <div className="container">
            <Link to="/"><button className="nav-button">Back</button></Link>
             <h1>Students</h1> 
             <div className="grid">
             {
                props.students.map((student, id)=>(
                    <img src={image(student)} onClick={()=>{showStudent(id)}} className="card" key={student.id}/>
                ))
             }
             </div>
        </div>
    ) :  <h1>Loading</h1>
}


