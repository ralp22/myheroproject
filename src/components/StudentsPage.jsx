import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import images from "../Assets/heroesimages/mha"

export default function StudentsPage(props) {

const [students, setStudents] = useState("")
// const [charImage, setCharImg] = useState(Array.from(images))

let { id } = useParams()

useEffect(()=>{
    let selectedStudent = props.students[id];
    setStudents(selectedStudent)
    // setCharImg(selectedStudent.id)
},[students, id])



return students ? (
<div className="container">
<Link to="/Students"><button className="nav-button">Back</button></Link>
<div className="details">
<h1 className="student-name">{students.name} {students.name_japanese}</h1>
<h2 className="student-name">Alias: {Array.from(students.other_names).toString()}</h2>
<h3 className="student-name">Quirk: {students.quirk} {students.quirk_japanese}</h3>
<p className="student-name">{students.quirk_description}</p>
<section>{students.hero_school} : {students.class}</section>
{/* <img src={charImage}/> */}
</div>
</div>

) : <h1>Loading . . . </h1>;

}

