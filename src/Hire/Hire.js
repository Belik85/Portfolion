import React from "react";
import style from './Hire.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import ButtonCV from "../common/components/buttons/ButtonCV";
import Dmytro from '../common/cv/Dmytro Beletskyi copy.pdf';


function Hire(props) {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>

                <Title text={"I Am Availiable For Your Suggestions"}/>

                {/*<h2 className={style.title}>I am availiable for you suggestions</h2>*/}
                <div className={style.btnCv}>
                    <ButtonCV title={"Download CV"} href={Dmytro} />
                </div>
                {/*<a href="" className={style.hireBtn}>Download CV</a>*/}
            </div>
        </div>
    );
}

export default Hire