import React from "react";
import style from './ButtonCV.module.scss';


function ButtonCV(props) {
    return (
        <div className={style.btnBox}>
            {props.href
                ? <a className={style.btnLink} href={props.href} target="_blank" rel="noreferrer">{props.title}</a>
                : <button className={style.btnLink}>{props.title}</button>
            }

            {/*<a className={style.btnLink} href="">Download CV</a>*/}
        </div>
    );
}

export default ButtonCV