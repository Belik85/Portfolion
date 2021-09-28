import React, {useState, useEffect} from "react";
import style from './WindowMessage.module.scss'


const WindowMessage = (props) => {
    return <div className={style.wrapper}>

        <div className={style.window}>{props.message}</div>

        {/*<div className={style.window}><pre>{props.message}</pre></div> чтобы перенос работал нужно обернуть в пре*/}


        {/*<div className={style.window}>*/}
                {/*<p>{props.message[0]}</p>*/}
                {/*<p>{props.message[1]}</p>*/}
            {/*</div>*/}
    </div>
}

export default WindowMessage;