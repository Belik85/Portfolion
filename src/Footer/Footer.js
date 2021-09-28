import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../../src/common/styles/Container.module.css'
import {LinkedinSquare} from "@styled-icons/boxicons-logos/LinkedinSquare";
import {Instagram} from "@styled-icons/boxicons-logos/Instagram";
import {Github} from "@styled-icons/boxicons-logos/Github";
import {FacebookCircle} from "@styled-icons/boxicons-logos/FacebookCircle";


function Footer(props) {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Dmytro</h2>
                <div className={style.socialIcons}>

                    <a target={"blank"}
                       href={"https://www.linkedin.com/in/dmytro-beletskyi-906725143/"}>
                        <div className={style.socialIcon}><LinkedinSquare/></div>
                    </a>

                    <a target={"blank"}
                       href={"https://www.linkedin.com/in/dmytro-beletskyi-906725143/"}>
                        <div className={style.socialIcon}><Instagram/></div>
                    </a>

                    <a target={"blank"}
                        href={"https://www.linkedin.com/in/dmytro-beletskyi-906725143/"}>
                        <div className={style.socialIcon}><Github/></div>
                    </a>
                    <a target={"blank"}
                        href={"https://www.facebook.com/dmitriy.beletskiy"}>
                        <div className={style.socialIcon}><FacebookCircle/></div>
                    </a>
                </div>
                <span className={style.copyright}>© 2021, All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer