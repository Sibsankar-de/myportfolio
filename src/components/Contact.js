import React, { useState } from 'react'

export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        !name?setNameError(true):setEmailError(false);
        !email?setEmailError(true):setEmailError(false);
        !subject?setSubjectError(true):setSubjectError(false);
        !message?setMessageError(true):setMessageError(false);
        if (name && email && subject && message){
            console.log(name, email, subject, message);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }
    }
    return (
        <>
            <div id='contact' className="m-container container container-fluid d-flex flex-column justify-content-center align-items-center mb-4">
                <div className="about-heading mb-5 ">
                    <h1 className='text-center'>Contact Me</h1>
                </div>
                <div className="row d-flex justify-content-center contact-info mb-5">
                    <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
                        <div className="align-self-stretch box text-center p-4 shadow">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-signpost-2-fill" viewBox="0 0 16 16">
                                    <path d="M7.293.707A1 1 0 0 0 7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586A1 1 0 0 0 7.293.707z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-4">Address</h3>
                                <p>Haur, Medinipur, West Bengal, India, 721131</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
                        <div className="align-self-stretch box text-center p-4 shadow">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-send-fill" viewBox="0 0 16 16">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-4">Email Address</h3>
                                <p><a href="mailto:sibsankarde910@outlook.com">Click to Mail</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
                        <div className="align-self-stretch box text-center p-4 shadow">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-globe-central-south-asia" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-4">Website</h3>
                                <p><a href="https://www.sibsankarde.com">sibsankarde.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-heading mt-4 mb-3">
                    <h2>Make Your Review</h2>
                </div>
                <form className=" g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6 form-elem">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className={`form-control ${nameError&&'form-error'}`} id="inputName" placeholder='Your name' value={name} onChange={e=>setName(e.target.value)} />
                    </div>
                    <div className="col-md-6 form-elem">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className={`form-control ${emailError&&'form-error'}`} id="inputEmail4" placeholder='Your email' value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="col-md-2 form-elem">
                        <label htmlFor="inputZip" className="form-label">Subject</label>
                        <input type="text" className={`form-control ${subjectError&&'form-error'}`} id="inputZip" placeholder='subject' value={subject} onChange={e=>setSubject(e.target.value)}/>
                    </div>
                    <div className="form-group form-elem">
                        <label className="form-label">Message</label>
                        <textarea name="" id="" cols="30" rows="7" className={`form-control ${messageError&&'form-error'}`} placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="col-12 form-elem">

                        <button className="btn btn-primary rounded-5 px-4 py-2">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
