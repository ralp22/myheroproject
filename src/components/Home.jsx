import yousayrun from "../Assets/yousayrun.mp3"

export default function Home(){
    console.log(yousayrun)
    return (
        <div className="home">
            <audio controls src={yousayrun} autoPlay/>
        </div>
    )
}