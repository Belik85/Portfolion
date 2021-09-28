import React, {useState} from "react";
import style from './ButtonForm.module.scss';
import styleContainer from "../../styles/Container.module.css";
import {CircularProgress} from "@material-ui/core";


function ButtonForm(props) {
    return (
        <div className={style.btnForm}>
            {props.type === "btn"
                ? <button className={style.btnForClick}  type="submit" >Send</button>
                : <a className={style.btnForClick} href="">{props.title}</a>}
            {/*<a className={style.btnLink} href="">{props.title}</a>*/}
            {/*<a className={style.btnLink}  href='' target="_blank" rel="noreferrer">{props.title}</a>*/}
            {/*<a className={style.btnLink} href="">Download CV</a>*/}

        </div>
    );
}
// className={`${style.btnBox} ${style.btnLink}`}
export default ButtonForm