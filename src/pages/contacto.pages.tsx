import contactForm from "../hooks/contactForm.hook";
import '../styles/contact.sass';

const RootContacto = () => {

    const { formState : {email,name,subject,body} , onInputChange , submitMiddleware , errors } = contactForm() ;

    return(
        <div className="root_component root_contacto" id='R6'>

            <form onSubmit={submitMiddleware}>

                <div className="formItem">
                    <label>Nombre :</label>
                    <input name='name' type="text" autoComplete="off" value={name} onChange={onInputChange}/>
                    { (errors.name) ? <small>Correo incorrecto</small> : <small className="smallVoid"></small>}
                </div>

                <div className="formItem">
                    <label>Correo electrónico :</label>
                    <input name='email' type="text" autoComplete="off" value={email} onChange={onInputChange}/>
                    { (errors.email) ? <small>Nombre demasiado corto</small> : <small className="smallVoid"></small>}
                </div>

                <div className="formItem">
                    <label>Asunto :</label>
                    <input name='subject' type="text" autoComplete="off" value={subject} onChange={onInputChange}/>
                    { (errors.subject) ? <small>Asunto demasiado corto</small> : <small className="smallVoid"></small>}
                </div>

                <div className="formItem">
                    <label>Mensaje :</label>
                    <textarea name='body' autoComplete='off' value={body} onChange={onInputChange}/>
                    { (errors.body) ? <small className="form-text">Mensaje demasiado corto</small> : <small className="smallVoid"></small> }
                </div>

                <div className="submit"><button type='submit'>Enviar</button></div>

            </form>

        </div>
    )
    
}

export default RootContacto

/*
const ContactForm = (props:onlyWithBackProps) => {

    const localized = reports[props.languaje] ;
    const { formState: { email , subject , body } , onInputChange , submitMiddleware , errors } = contactForm(props.setPointerToMain,localized['thank'].text) ;
    
    return(
        <WithBackButton props={props}>

            <div className="root_contactForm">

                <form onSubmit={submitMiddleware}>

                <div className="form-group">
                    <label>{localized['email'].text} : </label>
                    <input name='email' autoComplete='off' value={email} onChange={onInputChange} className="form-control"/>
                    { (errors.email) ? <small className="form-text">{localized['email'].error}</small> : <div className='smallVoid'></div>}
                </div>

                <div className="form-group">
                    <label>{localized['subject'].text} : </label>
                    <input name='subject' autoComplete='off' value={subject} onChange={onInputChange} className="form-control"/>
                    { (errors.subject) ? <small className="form-text">{localized['subject'].error}</small> : <div className='smallVoid'></div> } 
                </div>

                <div className="form-group">
                    <label>{localized['body'].text} : </label>
                    <textarea name='body' autoComplete='off' value={body} onChange={onInputChange} className="form-control"/>
                    { (errors.body) ? <small className="form-text">{localized['body'].error}</small> : <div className='smallVoid'></div> }
                </div>

                    <div className="submit"><button type='submit' className="btn btn-primary">{ localized['send'].text }</button></div>

                </form>

            </div>

        </WithBackButton>
    )

}
*/