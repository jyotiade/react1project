import video1 from '../../assests/video/video1.mp4';
import '../../assests/style/index.css'
const Video = () => {

    return (
        <>
            <div id='round'>
            <img style={{ margin: "20px" }} width={"300px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SGrhdV0xzZeb5mzhiUebYr7mqa5Pew_Jpw&usqp=CAU" alt="" />
            <img style={{ margin: "20px" }} width={"300px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SGrhdV0xzZeb5mzhiUebYr7mqa5Pew_Jpw&usqp=CAU" alt="" />
            <img  style={{ margin: "20px" }} width={"300px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SGrhdV0xzZeb5mzhiUebYr7mqa5Pew_Jpw&usqp=CAU" alt="" />
            <img  style={{ margin: "20px" }} width={"300px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SGrhdV0xzZeb5mzhiUebYr7mqa5Pew_Jpw&usqp=CAU" alt="" />
            <img  style={{ margin: "20px" }} width={"300px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SGrhdV0xzZeb5mzhiUebYr7mqa5Pew_Jpw&usqp=CAU" alt="" />
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8lDBxJI1-C4?si=h0gCmzxecfGX7xaw" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>

            <video controls width={"400px"} height={"200px"}>
                <source  src={video1} type='video/mp4'/>
            </video>

            
        </>
    )
}
export { Video };