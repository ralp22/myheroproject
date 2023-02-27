import { Link, useNavigate } from 'react-router-dom'


export default function Students(props){
    console.log(props.students)
    let navigate = useNavigate()
    const showStudent = (id) => {
        navigate(`${id}`)
    }

    return (
        <div className="students-container">
            <Link to="/"><button className="nav-button">Back</button></Link>
             <h1>Students</h1> 
             <div className="grid">
             {
                props.students.map((student, id)=>(
                    <div onClick={()=>{showStudent(id)}}className="card" key={student.id}>
                    {student.id}
                    </div>
                ))
             }
             </div>
        </div>
    )
}