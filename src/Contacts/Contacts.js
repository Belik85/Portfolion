import React, {useState, useEffect} from "react";
import style from './Contacts.module.scss';
import styleContainer from '../../src/common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import {useFormik} from 'formik';
import emailjs from 'emailjs-com';
import ButtonForm from "../common/components/buttons/ButtonForm";
import {CircularProgress} from '@material-ui/core';
import WindowMessage from '../Contacts/WindowMessage';
import ErrorWindowMessage from "./ErrorWindowMessage";



const ContactForm = () => {
    // const [send, setSend] = useState(false)
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted

    // const [requestStatus, setRequestStatus] = useState('none');
    // const [isloading, setIsloading] = useState(false)
    // const [showModalWindow, setShowModelWindow] = useState(false);

    const [requestStatus, setRequestStatus] = useState('');
    const [isloading, setIsloading] = useState(false)


    // useEffect(() => {
    //     const timer = setTimeout(() => setStatus(201), 2000)
    //
    //     return timer;
    // })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = ('Name is required')
            } else if (values.name.length < 2) {
                errors.name = ('Are you sure?')
            }
            if (!values.email) {
                errors.email = ('Email is required')
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(values.email)) {
                errors.email = ('Invalid email address')
            }
            return errors;
        },
        onSubmit: values => {

            sendEmail(values)
            console.log(JSON.stringify(values, null, 2));

        },
    });

    const sendEmail = (values) => {

        let servId = 'service_g9hbjpf' //process.env.REACT_APP_MAIL_PROCESS_KEY;
        // if (servId) {

        setIsloading(true)

        console.log('aaaaaaa')
        // setSend(true)

        emailjs.send(servId, 'template_iqnv249', {
            from_name: values.name,
            to_name: values.email,
            message: values.message
        }, 'user_xnOlpUjdUWPQGlsDBK8XL')
            .then((response) => {
                // setRequestStatus('success')
                console.log('SUCCESS!', response.status, response.text);
                // setShowModelWindow(true);

                setRequestStatus('success')

                // setTimeout(() => {
                //     // setShowModelWindow(false);
                //     // setRequestStatus('');
                //
                //     setRequestStatus('')
                //
                // }, 3000)

            })
            .catch((error) => {
                // setRequestStatus('error')
                console.log('FAILED...', error);

                setRequestStatus('error')

                // setTimeout(() => {
                //     setRequestStatus('')
                //
                // }, 3000)
            })


            .finally(() => {
                setIsloading(false)
                setTimeout(() => {

                    setRequestStatus('')

                }, 3000)

            })
        formik.resetForm()

        // values.target.reset()
    }
    // }
    //
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    //     }, 800);
    //
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);


    // ранний return || early return

    // if (status === 200) {
    //     return <CircularProgress className={style.krutilka}/>
    // }


    return (
        <div name={"contact"} id="contact" className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                <Title text={"Contact"}/>

                <form className={style.formWrapper} onSubmit={formik.handleSubmit}>
                    {/*<label htmlFor="email">Name</label>*/}
                    <input className={style.nameArea}
                           placeholder="Name"
                           id="name"
                           type="text"
                           {...formik.getFieldProps('name')}

                    />
                    {formik.touched.name && formik.errors.name ?
                        <div className={style.nameError}>{formik.errors.name}</div> : null}
                    {/*<label htmlFor="email">Email Address</label>*/}
                    <input className={style.mailArea}
                           placeholder="E-mail"
                           id="email"
                           type="email"
                           {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ?
                        <div className={style.emailError}>{formik.errors.email}</div> : null}
                    {/*<label htmlFor="email">Message</label>*/}
                    <textarea className={style.messageArea}
                              placeholder="Message"
                              id="message"
                              name="message"
                              type="textarea"
                              onChange={formik.handleChange}
                              value={formik.values.message}
                    />

                    <div className={style.btnSubmit}>
                        <ButtonForm type="btn" title={"Send"} disabled={!!formik.errors.name || !!formik.errors.email}/>
                        {isloading && <CircularProgress className={style.loadProcess}/>}

                        {/*делаем крутилку физической*/}
                        {/*{!isloading && <CircularProgress className={style.loadProcess}/>}*/}

                        {/*<CircularProgressWithLabel value={progress} />*/}
                        {/*<buttons  type="submit">Submit</buttons>*/}
                    </div>

                    {/*{!isloading ? <CircularProgress className={style.krutilka}/> : <div className={style.krutilka}/>}*/}
                </form>

                {/*{requestStatus === 'success' && <div>success</div>}*/}
                {/*{requestStatus === 'error' && <div>error</div>}*/}

                {/*{showModalWindow && <WindowMessage  message={ `Your message has been sent.` + `\n` + `Thank you!`}/>}*/}
                {/*{!showModalWindow && <WindowMessage  message={["Your message has been sent.","Thank you"]}/>}*/}


                {requestStatus === 'success' &&
                <WindowMessage message={`Your message has been sent.` + `\n` + `Thank you!`}/>}
                {requestStatus === 'error' &&
                <ErrorWindowMessage message={`Your message has not been sent.` + `\n` + `Try again please!`}/>}


            </div>

        </div>
    );
};

export default ContactForm


// <buttons type="submit">Submit</buttons>


// function Contacts(props) {
// return (
//     <div name={"contact"} id="contact" className={style.contactsBlock}>
//         <div className={`${styleContainer.container} ${style.contactsContainer}`}>
{/*<Title text={"Contact"}/>*/
}


{/*/!*<h2 className={style.title}>Contacts</h2>*!/*/
}


{/*<form className={style.formWrapper}>*/
}
{/*    <input className={style.nameArea} placeholder="Name" type="text"></input>*/
}
{/*    <input className={style.mailArea} placeholder="E-mail" type="email"></input>*/
}
{/*    <textarea className={style.messageArea} placeholder="Message"></textarea>*/
}
{/*    <div className={style.btnSubmit}>*/
}
{/*        <ButtonCV title={"Send"}/>*/
}
{/*    </div>*/
}


{/*    /!*<buttons className={style.btnSubmit} type="submit">Send</buttons>*!/*/
}
{/*</form>*/
}


{/*<form className={style.contactForm}>*/
}
{/*    <input type="text"/>*/
}
{/*    <input type="text"/>*/
}
{/*    <textarea/>*/
}
{/*    <buttons type="submit" className={style.submitBtn}>Send</buttons>*/
}
{/*</form>*/
}


//
//             </div>
//         </div>
//     );
// }

// export default Contacts

