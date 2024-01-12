import '../styles/pages/trabajos.sass'
import TrabajoCard from '../components/cards/trabajo.card';
import Trabajos from '../assets/svgs/trabajos.svg';

import { trabajos } from '../misc/data';
import WorkScroll from '../components/worksScroll.component';
import { useLayoutEffect, useState } from 'react';

export interface workBook { longOfPage:number , pages:number[] , index:number }

const RootTrabajos = () => {

    const [ workBook , setWorkBook ] = useState<workBook|undefined>(undefined) ;

    const commands = {
        left:() => { 
            if(workBook?.index == 0){ return false }else{
            setWorkBook(v => {
                if(!v){return v}
                return ({...v,index:v.index-1})
            })
            return true
        }},
        right:() => { 
            if(workBook?.index == workBook?.pages.length){ return false }else{
            setWorkBook(v => {
                if(!v){return v}
                return ({...v,index:v.index-1})
            })
            return true
        }},
        button:(index:number,newIndex:number) => {
            if(index == newIndex){ return false }
            setWorkBook(v => {
                if(!v){return}
                return({...v,index:newIndex})
            });
            return true
        }
    }

    useLayoutEffect(() => {
        const newBook:workBook = { longOfPage:4 , pages:[0] , index:0 } ;
        const paginas = Math.ceil(trabajos.length/newBook.longOfPage);
        for(let i = 1 ; i <= paginas ; i++){
            const lastPage = newBook.pages[newBook.pages.length - 1]; 
            newBook.pages.push(lastPage+newBook.longOfPage)
        };
        setWorkBook(newBook)
    },[trabajos]);

    return(
        <div className="root_component root_trabajos" id='R3'>
            <h2>Trabajos</h2>
            {
            (workBook) &&
                <>    
                    <div className="trabajosList animate__animated animate__fadeIn">
                        {trabajos
                        .sort( (a,b) => a.customIndex - b.customIndex)
                        .map( (x,i) => <TrabajoCard     key={i} 
                                                        foto={x.foto} 
                                                        nombre={x.nombre} 
                                                        estado={x.estado}
                                                        descripcion={x.descripcion} 
                                                        despliegueURL={x.despliegueURL} repoURL={x.repoURL}
                                                        side={x.side} customIndex={x.customIndex}/>)
                        .slice(
                            workBook.pages[workBook.index],
                            workBook.pages[workBook.index+1]
                        )
                        }
                        <WorkScroll workBook={workBook} left={commands.left} right={commands.right} button={commands.button}/>
                    </div>
                </>
            }
            <Trabajos stylestring='placeholder' mainColor='#2C3E50'/>
        </div>
    )

}

export default RootTrabajos