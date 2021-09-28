import React from "react";
import style from './Skill.module.scss';

import {Typescript} from "@styled-icons/simple-icons/Typescript";
import {LogoJavascript} from "@styled-icons/ionicons-solid/LogoJavascript";
import {LogoReact} from "@styled-icons/ionicons-solid/LogoReact";
import {Server} from "@styled-icons/bootstrap/Server";
import {Css3} from "@styled-icons/remix-line";
import {Html5} from "@styled-icons/remix-line/Html5";
import {Redux} from "@styled-icons/simple-icons/Redux";
import {Sass} from "@styled-icons/simple-icons";


function Skill(props) {
    return (
        <div className={style.skill}>

            <div className={style.icon}>

                {/*{props.icon()}*/}

                {props.icon === "JS" && <LogoJavascript/>}
                {props.icon === "TS" && <Typescript/>}
                {props.icon === "React" && <LogoReact/>}
                {props.icon === "Redux" && <Redux/>}
                {props.icon === "HTML" && <Html5/>}
                {props.icon === "Css" && <Css3/>}
                {props.icon === "Sass" && <Sass/>}
                {props.icon === "REST API" && <Server/>}


            </div>


            <h3 className={style.techName}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Skill