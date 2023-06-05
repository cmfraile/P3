import regularExpressions from "../misc/regularExpressions";
import { useEffect, useState } from "react";
import { EmailJSResponseStatus , init , send } from "@emailjs/browser";

const useForm = (initialForm:{[key:string]:string},regexp?:RegExp) => {

    const [formState,setFormState] = useState(initialForm);

    const onInputChange = ( {target}:{target:{name:string,value:string}} ) => {

        const { name , value } = target ;
        const setFormStateCallback = () => setFormState({...formState,[ name ]:value});
        setFormStateCallback();
        
    }

    const onResetForm = () => {setFormState(initialForm)};
    
    return({ formState , onInputChange , onResetForm , setFormState });

}

const initialForm = { email:'', name:'' , subject:'' , body:'' };
const initialErrors:{ [key:string]:boolean } = { email:false , subject:false , body:false , name:false };
const contactForm = () => {

    const { formState ,
            onInputChange , onResetForm } = useForm(initialForm);

    const [ errors , setErrors ] = useState<typeof initialErrors>(initialErrors) ;
    const [ isEnabled , setIsEnabled ] = useState<boolean>(true)

    const submitMiddleware =
    (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() ;
        const { emailRegExp } = regularExpressions ; setErrors( v => ({...initialErrors}) ) ; let errors = {...initialErrors} ;
    
        Object.keys(formState).map( x => {
            if( formState[x].trim().length <= 6 ){ errors[x] = true };
            if( x == 'body' && formState['body'].length <= 15 ){ errors[x] = true } ;
            if( x == 'email' && !emailRegExp.test(formState['email']) ){ errors[x] = true } ;
        })
    
        if( Object.keys(formState).filter(x => errors[x]).length > 0 ){

            setErrors({...errors})
            //No se envia

        }else{

            setIsEnabled(v => false);
            send('service_ee4nk1s','template_hzc9mvq',formState,'SlreEML6ED8glhoud')
            .then((res:EmailJSResponseStatus) => {
                setErrors({...initialErrors});
                alert(`Su mensaje ha sido enviado`);
                onResetForm();
                window.scroll(0,0);
                setTimeout(() => setIsEnabled(v => true),30000)
            })
            .catch(console.log);

        }

    }

    useEffect(() => init('SlreEML6ED8glhoud'),[])

    return({    
                formState , onInputChange ,
                submitMiddleware ,
                errors,isEnabled
            })
                

}

export default contactForm