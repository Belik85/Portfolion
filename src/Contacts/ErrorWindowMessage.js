import React, {useState, useEffect} from "react";
import style from './ErrorWindowMessage.module.scss'


const ErrorWindowMessage = (props) => {
    return <div className={style.wrapperError}>
        <div className={style.windowError}>{props.message}</div>
        {/*<div className={style.window}>*/}
        {/*<p>{props.message[0]}</p>*/}
        {/*<p>{props.message[1]}</p>*/}
        {/*</div>*/}
    </div>
}

export default ErrorWindowMessage;