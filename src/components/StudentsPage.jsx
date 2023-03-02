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
    <div>
    <div className="container" style={{backgroundSize: "100%", backgroundRepeat: "no-repeat", background: `url(${image2(students)})`}}>
    <Link to="/Students"><button className="nav-button">Back</button></Link>
<div className="profile">
<div className="details" style={{marginTop: "10vmin"}}>
<h1><span style={{color: "white", textShadow: "0 0 10px black"}}>{students.name} {students.name_japanese}</span></h1>
<h2><span style={{color: "white", textShadow: "0 0 10px black"}}>Alias/Hero Name:</span> {Array.from(students.other_names).toString()}</h2>
<h3><span style={{color: "white", textShadow: "0 0 10px black"}}>Quirk:</span> {students.quirk} {students.quirk_japanese}</h3>
<section style={{fontWeight: "bold"}}><span style={{color: "white", textShadow: "0 0 10px black"}}>{students.hero_school}:</span> {students.class}</section>
<p style={{fontWeight: "bold", textShadow: "0 0 10px aliceblue", fontFamily: "Verdana", fontSize: "1.8vmin", padding: "1.8vmin", marginTop: "1.8vmin", maxWidth: "40vmin", margin: "0 auto"}}>{students.quirk_description}</p>
</div>
<img style={{maxHeight: '50vmin', justifyItems: 'right'}} src={image1(students)}/>
</div>
</div>
</div>
) : <h1>Loading . . . </h1>;

}

