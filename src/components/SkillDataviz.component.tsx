import { VictoryBar , VictoryChart , VictoryAxis , VictoryStack } from 'victory';

interface dataForDataVizProps {img:string,practica:number,experiencia:number};
const urlBase = 'src/assets/stackIcons'
const data:{[key:string]:dataForDataVizProps} = {
  'angular':{img:`${urlBase}/angular.png`,practica:26,experiencia:3},
  'bootstrap':{img:`${urlBase}/bootstrap.png`,practica:36,experiencia:12},
  'css3':{img:`${urlBase}/css3.png`,practica:36,experiencia:12},
  'django':{img:`${urlBase}/django.png`,practica:3,experiencia:0},
  'docker':{img:`${urlBase}/docker.png`,practica:27,experiencia:12},
  'express':{img:`${urlBase}/express.png`,practica:22,experiencia:12},
  'html5':{img:`${urlBase}/html5.png`,practica:36,experiencia:12},
  'mongodb':{img:`${urlBase}/mongodb.png`,practica:22,experiencia:12},
  'nodejs':{img:`${urlBase}/nodejs.png`,practica:22,experiencia:12},
  'php':{img:`${urlBase}/php.png`,practica:2,experiencia:0},
  'mySQL':{img:`${urlBase}/mySQL.png`,practica:2,experiencia:0},
  'python':{img:`${urlBase}/python.png`,practica:3,experiencia:0},
  'react':{img:`${urlBase}/react.png`,practica:12,experiencia:9},
  'reactiveX':{img:`${urlBase}/reactiveX.png`,practica:22,experiencia:3},
  'redux':{img:`${urlBase}/redux.png`,practica:3,experiencia:3},
  'socket.io':{img:`${urlBase}/socket.io.png`,practica:2,experiencia:0},
  'typescript':{img:`${urlBase}/typescript.png`,practica:26,experiencia:12},
  'sass':{img:`${urlBase}/sass.png`,practica:36,experiencia:12},
}

const SkillDataviz = () => {

  const CustomTick = ({img}:{img:string}) => <img src={img} alt="Custom tick" style={{ width: '30px', height: '3px' }}/>

  const parsed:dataForDataVizProps[] = Object.keys(data)
  .sort( (a,b) => {
    const accumulated = (index:string) => data[index].experiencia + data[index].practica ;
    if(accumulated(a) < accumulated(b)){return 1};
    if(accumulated(a) > accumulated(b)){return -1};
    return 0
  })
  .map( x => {
    const { img , practica , experiencia } = data[x];
    return {name:x,img,practica,experiencia,suma:practica+experiencia}
  })

  return(
      <VictoryChart>

        <VictoryAxis
          dependentAxis
          label='años'
          style={{
            tickLabels: {angle: 270, fontSize: 8},
            axisLabel: {angle: 270, fontSize: 8}
          }}
          tickFormat={(x:number) => (Math.floor(x/12))}
        />

        <VictoryAxis
          label='tecnologias'
          tickFormat={(t) => t}
          style={{
            tickLabels: {angle: 270, fontSize: 8},
            axisLabel: {angle: 180, fontSize: 8}
          }}
        />

        <VictoryStack>
          <VictoryBar data={parsed} y='experiencia' x='name'/>
          <VictoryBar data={parsed} y='practica' x='name'/>
        </VictoryStack>


      </VictoryChart>
  )

}

export default SkillDataviz