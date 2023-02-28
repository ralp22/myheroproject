import { Link } from 'react-router-dom'

export default function Nav(){
    return (
        <div className="nav-buttons">
            <Link to="/"><button className="nav-button">Home</button></Link>
            <Link to="/Heroes"><button className="nav-button">Heroes</button></Link>
            <Link to="/Students"><button className="nav-button">Students</button></Link>
            <Link to="/Villains"><button className="nav-button">Villains</button></Link>
            <Link to="/Civilians"><button className="nav-button">Civilians</button></Link>
        </div>
    )
}