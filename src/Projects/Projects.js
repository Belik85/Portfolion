import React from "react";
import style from './Projects.module.scss';
import styleContainer from '../../src/common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/title/Title";
import todoImage from "../common/images/133908320-concept-of-to-do-list-with-businessman.jpg"
import socialImage from "../common/images/social-media-sites-800x440.jpg"
import counterImage from "../common/images/counter.jpg"
import searcherImage from "../common/images/searcher.jpg"


function Projects(props) {

    const social = {

        backgroundImage: `url(${socialImage})`,
    };

    // const social = {
    //
    //     backgroundImage: 'url(' + "../common/images/social-media-sites-800x440.jpg" + ')',
    // };


    const todo = {

        backgroundImage: `url(${todoImage})`,
    };

    // const todo = {
    //
    //     backgroundImage: 'url(' + "../common/images/133908320-concept-of-to-do-list-with-businessman.jpg" + ')',
    // };

    const counter = {

        backgroundImage: `url(${counterImage})`,
    };

    const searcher = {

        backgroundImage: `url(${searcherImage})`,
    };


    return (
        <div name={"projects"} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={social} title={'Social Network'} description={'A social networking service. An online platform for people to build social networks or social relationships with other people.'}/>
                    <Project style={todo} title={'To Do List'} description={'An app for Task Management, Project Management, Productivity. No matter who you are and what you do - you will be better organized!'}/>
                    <Project style={counter} title={'Counter'} description={'React, a JavaScript library for creating interactive user interfaces(UIs) is getting more popular. How can we code a counter app in React-Redux?'}/>
                    <Project style={searcher} title={'School Finder'} description={'There are a wide variety of schools in Your Area. All you need is to find it in your geographical area? With this app based on React it is simple!'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects