import React from "react";
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../common/components/title/Title";
import Fade from "react-reveal";
import {Typescript} from "@styled-icons/simple-icons/Typescript";
import {LogoJavascript} from "@styled-icons/ionicons-solid/LogoJavascript";
import {LogoReact} from "@styled-icons/ionicons-solid/LogoReact";
import {Html5} from "@styled-icons/remix-line/Html5";
import {Css3} from "@styled-icons/simple-icons/Css3";
import {Server} from "@styled-icons/bootstrap/Server";
import {Redux} from "@styled-icons/simple-icons/Redux";
import {LogoSass} from "@styled-icons/ionicons-solid/LogoSass";

function Skills() {



    return (
        <div name={"skills"} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <Fade right>
                    <div className={style.skills}>
                        <Fade left>
                            <Skill title={"REACT"}
                                   description={"SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination..."}
                                   icon={"React"}
                                   size={"100x"}
                                   // icon={()=> <LogoReact/>}
                            />

                        </Fade>

                        <Fade left>
                            <Skill title={"REDUX"}
                                   description={"SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination..."}
                                   icon={"Redux"}
                                // icon={()=> <LogoReact/>}
                            />

                        </Fade>

                        <Fade left>
                            <Skill title={"JS"}
                                   description={"Data Types, Functions, Loops, This, Array Methods, Recursion, EventLoop, Promise, Async-Await..."}
                                   icon={"JS"}
                                   // icon={()=> <LogoJavascript/>}
                            />
                        </Fade>


                        <Fade left>

                            <Skill title={"TYPESCRIPT"}
                                   description={"Migrate projects from JS to TS, Generics, typeof, ReturnType, Enum..."}
                                   icon={"TS"}
                            />


                        </Fade>

                        <Fade right>
                            <Skill title={'HTML'}
                                   description={'Landing Pages, Semantic tags, Forms...'}
                                   icon={"HTML"}
                            />
                        </Fade>

                        <Fade right>
                            <Skill title={'CSS'}
                                   description={'CSS3, CSS-Modules, Styled Components...'}
                                   icon={"Css"}
                            />
                        </Fade>

                        <Fade right>
                            <Skill title={'SASS'}
                                   description={'CSS3, CSS-Modules, Styled Components...'}
                                   icon={"Sass"}
                            />
                        </Fade>

                        <Fade right>
                            <Skill title={'REST API'}
                                   description={'CRUD Operations, working with Axios library...'}
                                   icon={"REST API"}
                            />
                        </Fade>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Skills