import { VictoryBar , VictoryChart , VictoryAxis , VictoryStack , VictoryTheme, VictoryLegend } from 'victory';

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

const Legend = () => {

  return(
    <div className="legendChart">
      <p className="practica">practica</p>
      <p className="experiencia">experiencia</p>
    </div>
  )

}

/*<image x={x} y={y} href="ruta/a/la/imagen.png" width={12} height={12} />*/
const SkillDataviz = () => {

  const CustomTickLabel = (props:any) => {
    const { x,y,text } = props;
    console.log({props})
    return (
      <image x={x} y={y} 
      href={data[text].img}
      width={10} height={10}
      style={{margin:'0px',padding:'0px'}}
      />
    );
  }

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
    <>
      <VictoryChart
        theme={VictoryTheme.material}
      >

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
          tickFormat={(t) => t}
          style={{
          }}
          tickLabelComponent={<CustomTickLabel/>}
        />

        <VictoryStack>
          <VictoryBar data={parsed} y='experiencia' x='name'/>
          <VictoryBar data={parsed} y='practica' x='name'/>
        </VictoryStack>


      </VictoryChart>
      <Legend/>
    </>
  )

}

export default SkillDataviz