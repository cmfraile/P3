import regularExpressions from "../misc/regularExpressions";
import { useState } from "react";

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
            setErrors({...initialErrors})
            alert(`Su mensaje ha sido enviado`) ; onResetForm() ;
            //Si se envia
        }

    }

    return({    
                formState , onInputChange ,
                submitMiddleware ,
                errors
            })
                

}

export default contactForm