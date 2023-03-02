import { useState } from 'react'
import {songs} from "./Songs"

export default function AudioPlayer(){
    const [currentSong, setCurrentSong] = useState({})
    setCurrentSong(songs)
    return 
    (
        <div>
            <audio controls>
                <source src="../Assets/yousayrun.mp3" type="audio/mp3"/>
            </audio>
        </div>
    )
}