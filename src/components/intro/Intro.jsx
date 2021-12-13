import React, {useEffect, useRef} from 'react'
import { init } from 'ityped'
import './intro.scss'

const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 50,
            strings: ['Developer', 'Designer', 'Content Designer' ] 
        })
    
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm </h2>
                    <h1>Huy Hung Nguyen</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>                
            </div>
        </div>
    )
}

export default Intro
