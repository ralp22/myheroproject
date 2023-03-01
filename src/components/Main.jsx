import { Route, Routes } from "react-router-dom"
import {useState, useEffect} from 'react'
import { HEROES_PATH, VILLAINS_PATH, STUDENTS_PATH, CIVILIANS_PATH } from '../globals'
import axios from 'axios'
import Home from "./Home"
import Students from "./students/Students"
import Heroes from "./heroes/Heroes"
import Villains from "./villains/Villains"
import Civilians from "./civilians/Civilians"
import StudentsPage from "./StudentsPage"
import HeroesPage from "./HeroesPage"
import VillainsPage from "./VillainsPage"
import CiviliansPage from"./CiviliansPage"

export default function Main(){

    const [heroes, setHeroes] = useState(null)
    const [students, setStudents] = useState(null)
    const [villains, setVillains] = useState(null)
    const [civilians, setCivilians] = useState(null)

    useEffect(()=>{
        const getHeroes = async () => {
            const response = await axios.get(`${HEROES_PATH}`)
            console.log(response.data)
            setHeroes(response.data)
        }
        getHeroes()
    },[])

    useEffect(()=>{
        const getStudents = async () => {
            const response = await axios.get(`${STUDENTS_PATH}`)
            console.log(response.data)
            setStudents(response.data)
        }
        getStudents()
    },[])

    useEffect(()=>{
        const getVillains = async () => {
            const response = await axios.get(`${VILLAINS_PATH}`)
            console.log(response.data)
            setVillains(response.data)
        }
        getVillains()
    },[])

    useEffect(()=>{
        const getCivilians = async () => {
            const response = await axios.get(`${CIVILIANS_PATH}`)
            console.log(response.data)
            setCivilians(response.data)
        }
        getCivilians()
    },[])

    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Heroes" element={<Heroes heroes={heroes}/>}></Route>
                <Route path="/Students" element={<Students students={students}/>}></Route>
                <Route path="/Villains" element={<Villains villains={villains}/>}></Route>
                <Route path="/Civilians" element={<Civilians civilians={civilians}/>}></Route>
                <Route path="/Heroes/:id" element={<HeroesPage heroes={heroes}/>}></Route>
                <Route path="/Students/:id" element={<StudentsPage students={students}/>}></Route>
                <Route path="/Villains/:id" element={<VillainsPage villains={villains}/>}></Route>
                <Route path="/Civilians/:id" element={<CiviliansPage civilians={civilians}/>}></Route>
            </Routes>
        </div>
    )
}