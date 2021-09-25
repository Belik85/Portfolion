import React from "react";
import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";


function Nav() {
    return (
        <div className={style.navBlock}>
            <div className={style.nav}>

                <Link to="main" className={style.link}
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      duration={500}
                >Main
                </Link>

                <Link to="skills" className={style.link}
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      duration={500}
                >Skills
                </Link>

                <Link to="projects" className={style.link}
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      duration={500}
                >Projects
                </Link>

                <Link to="contact" className={style.link}
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      duration={500}
                >Contact
                </Link>



                    {/*<a href="" className={style.link}>Main</a>*/}
                    {/*<a href="" className={style.link}>Skills</a>*/}
                    {/*<a href="" className={style.link}> Projects</a>*/}
                    {/*<a href="" className={style.link}>Contact</a>*/}
                </div>
        </div>






















        // <div className={style.nav}>
        //     <a href="" className={style.link}>Main</a>
        //     <a href="" className={style.link}>Skills</a>
        //     <a href="" className={style.link}>Projects</a>
        //     <a href="" className={style.link}>Contacts</a>
        //
        //  </div>

        // <div class={style.navBlock}>
        //     <div className={style.nav}>
        //         <div className={style.link}>
        //             <a href="" className={style.text}>Main</a>
        //         </div>
        //         <div className={style.link}>
        //             <a href="" className={style.text}>Skills</a>
        //         </div>
        //         <div className={style.link}>
        //
        //             <a href="" className={style.text}>Projects</a>
        //         </div>
        //         <div className={style.link}>
        //             <a href="" className={style.text}>Contact</a>
        //         </div>
        //     </div>
        // </div>


    // <div className={style.navBlock}>
    //     <div className={style.nav}>
    //         <div className={style.link}>
    //             <a href="" className={style.text}>Main</a>
    //             <a href="" className={style.text}>Skills</a>
    //             <a href="" className={style.text}>Projects</a>
    //             <a href="" className={style.text}>Contact</a>
    //         </div>
    //     </div>
    // </div>
    );
}

export default Nav