import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import images from "../Assets/heroesimages/mha"

export default function StudentsPage(props) {

const [students, setStudents] = useState("")

let { id } = useParams()

useEffect(()=>{
    let selectedStudent = props.students[id];
    setStudents(selectedStudent)
},[students, id])

const image1 = (student) => {
    const studentImage = images.find(img => img.id == student.id)
    if(studentImage){
        return studentImage.images.m
    } else {
        return null
    }
}
const image2 = (student) => {
    const studentImage = images.find(img => img.id == student.id)
    if(studentImage){
        return studentImage.images.l
    } else {
        return null
    }
}

return students ? (
    <div className="container">
    <Link to="/Students"><button className="nav-button">Back</button></Link>
<div className="profile">
<img src={image2(students)} style={{maxHeight: "50vmin", maxWidth: "125vmin"}}/>
<section>
<img style={{maxHeight: '50vmin'}} src={image1(students)}/>
</section>
<div className="student-details">
<h1 className>{students.name} {students.name_japanese}</h1>
<h2 className>Alias: {Array.from(students.other_names).toString()}</h2>
<h3 className>Quirk: {students.quirk} {students.quirk_japanese}</h3>
<p className>{students.quirk_description}</p>
<section>{students.hero_school} : {students.class}</section>
</div>
</div>
</div>

) : <h1>Loading . . . </h1>;

}

