import React from "react";
import style from './Header.module.scss';
import Nav from "./../Nav/Nav";
import styleContainer from '../common/styles/Container.module.css';
import logo from "../common/images/logo.jpg";
import Logo from "../common/components/headerLogo/Logo";

function Header() {
    return (

        <div className={style.header}>
            <div className={styleContainer.container}>

                <Nav/>
                <img src={logo} className={style.logotip} alt="logo"/>
                {/*<Logo/>*/}
            </div>
        </div>
    );
}


// <div className={style.header}>

//         <Nav/>

// </div>


{/*<div className={style.header}>*/
}
{/*     <div className={`${styleContainer.container} ${style.header}`}>*/
}
{/*         <Nav/>*/
}
{/*     </div>*/
}
{/*<div/>*/
}


{/*<div className={style.header}>*/
}
{/*    <div className={styleContainer.container}>*/
}
{/*      <Nav/>*/
}
{/*   </div>*/
}
{/*<div/>*/
}


export default Header
















