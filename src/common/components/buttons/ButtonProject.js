import React from "react";
import style from './ButtonProject.module.scss';
import styleContainer from "../../styles/Container.module.css";


function ButtonProject(props) {
    return (
        <div className={style.btnProject}>

            <a className={style.btnProjectLink}  href='' target="_blank" rel="noreferrer">{props.title}</a>
            {/*<a className={style.btnLink} href="">{props.title}</a>*/}

            {/*<a className={style.btnLink} href="">Download CV</a>*/}
        </div>
    );
}

export default ButtonProject