import React, {useState} from "react";
import ProgressBar from "./ProgressBar";


const ProgressBarComponent = () => {
    const [htmlSate, setHtmlState] = useState(0);
    const [cssState, setCssState] = useState(0)
    const [JSState, setJSState] = useState(0)
    const [reactState, setReactState] = useState(0)
    const [reduxState, setReduxState] = useState(0)
    const [nodeState, setNodeState] = useState(0)
    const [sassState, setSassState] = useState(0)
    const [gitState, setGitState] = useState(0)

    window.addEventListener('scroll',()=>{
        const scrollPosition = window.scrollY;
        // console.log(scrollPosition);
        if(Math.round(scrollPosition)>=1400){
            setInterval(() => {
                setHtmlState(Math.floor(1 * 90))
                // setHtmlState(90)
                setCssState(70)
                setJSState(50)
                setReactState(60)
                setReduxState(70)
                setNodeState(30)
                setSassState(85)
                setGitState(67)
            }, 550);
        }
    })



    return (
        <div className={'container-fluid px-0'}>
            <ProgressBar html={htmlSate} css3={cssState} js={JSState}
                         react={reactState} redux={reduxState} node={nodeState}
                         sass={sassState} git={gitState}/>
        </div>
    )
}

export default ProgressBarComponent;