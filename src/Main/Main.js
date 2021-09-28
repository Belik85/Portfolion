import React from "react";
import style from './Main.module.scss';
import styleContainer from '../../src/common/styles/Container.module.css'
import me from '../common/img/me.jpg'
import Fade from "react-reveal/Fade";
import Particles from "react-particles-js";
import Tilt from 'react-tilt';

let ParticleParamsDots ={
    particles: {
        size: {
            value: 1
        },
        line_linked: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1,
            straight: false,
            radius: 10
        },

    }
}

let ParticleParamsLines ={
    particles: {
        size: {
            value: 1
        },
        line_linked: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1,
            straight: false,
            radius: 10
        },
    }
}


function Main() {
    return (
        <div name={"main"} className={style.mainBlock}>
            <Particles className={style.particles} params={ParticleParamsDots}/>
            <Particles className={style.particles}  params={ParticleParamsLines}/>

            <Fade bottom>
                <div className={styleContainer.container}>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am <span>Dmytro Beletskyi</span></h1>
                        <p>A Front-End Developer.</p>
                    </div>
                    <div className={style.myName}>
                        <Tilt className='Tilt' options={{max: 40, speed: 4000}}>
                            <img src={me} className={style.photo} alt='me'/>
                        </Tilt>

                    </div>
                </div>

            </Fade>

        </div>
    );
}

export default Main