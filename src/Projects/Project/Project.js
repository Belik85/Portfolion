import React from "react";
import style from './Project.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import ButtonProject from "../../common/components/buttons/ButtonProject";


function Project(props) {

    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>

                <ButtonProject title={"Look at"}/>
                {/*<a href="" className={style.viewBtn}>Look at</a>*/}
            </div>

           <div className={style.projectInfo}>
               <h3 className={style.projectTitle}>{props.title}</h3>
               <span className={style.description}>{props.description}</span>
           </div>

        </div>
    );
}

export default Project;