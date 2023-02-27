import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function StudentsPage(props) {

const [students, setStudents] = useState("")

let { id } = useParams()

useEffect(()=>{
    let selectedStudent = props.students[id];
    setStudents(selectedStudent)
},[students, id])

return students ? (
<div>
<Link to="/Students"><button className="nav-button">Back</button></Link>
<div className="details">
<h1 className="student-name">{students.name} {students.name_japanese}</h1>
<h2 className="student-name">Alias: {Array.from(students.other_names).toString()}</h2>
<h3 className="student-name">Quirk: {students.quirk} {students.quirk_japanese}</h3>
<p className="student-name">{students.quirk_description}</p>
<section>{students.hero_school} : {students.class}</section>
</div>
</div>

) : <h1>Loading . . . </h1>;

}

