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
const song = (student) => {
    const studentImage = images.find(img => img.id == student.id)
    if(studentImage){
        return studentImage.song
    } else {
        return null
    }
}

return students ? (
    <div>
        <Link to="/Students"><button style={{marginTop: '2vmin'}} className="nav-button">Back</button></Link>
    <div className="container students-container" style={{maxWidth: "100vw", maxHeight: "75vh", background: `url(${image2(students)})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
<div className="profile">
<div className="details" style={{maxHeight: "45vmin", minWidth: "fit-content", marginTop: "20vmin", marginLeft: "10vmin"}}>
<h1><span style={{color: "white", textShadow: "4px 4px 4px green"}}>{students.name} {students.name_japanese}</span></h1>
<h2><span style={{color: "white", textShadow: "0 0 10px black"}}>Alias/Hero Name:</span> <span style={{textShadow: "0 0 10px aliceblue"}}>{Array.from(students.other_names).toString()}</span></h2>
<h3><span style={{color: "white", textShadow: "0 0 10px black"}}>Quirk:</span> <span style={{textShadow: "0 0 10px aliceblue"}}>{students.quirk} {students.quirk_japanese}</span></h3>
<section style={{fontWeight: "bold"}}><span style={{color: "white", textShadow: "0 0 10px black"}}>{students.hero_school}:</span> <span style={{textShadow: "0 0 10px aliceblue"}}>{students.class}</span></section>
<p style={{fontWeight: "bold", fontFamily: "Sans", textShadow: "0 0 10px aliceblue", fontSize: "2.25vmin", padding: "1.8vmin", marginTop: "1.8vmin", maxWidth: "40vmin"}}>{students.quirk_description}</p>
</div>
<img style={{maxHeight: "50vh", marginTop: "20vmin", marginLeft: '30vw'}} src={image1(students)}/>
</div>
</div>
<figure>
    <figcaption style={{margin: '0 auto', fontFamily: 'Impact', fontSize: "2.5vmin", color: 'white', textShadow: '0 0 10px green'}}>
        {students.name}'s Theme Song
    </figcaption>
    <audio controls src={song(students)}/>
</figure> 
</div>
) : <h1>Loading . . . </h1>;

}

