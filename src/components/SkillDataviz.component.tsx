import { VictoryBar , VictoryChart , VictoryAxis , VictoryStack } from 'victory';
import { skillsData , dataForDataVizProps } from '../misc/data';

interface dataInView {name:string,img?:string,practica:number,experiencia:number,suma:number}

export const Legend = () => {

  return(
    <div className="legendChart">
      <p className="experiencia">▣ experiencia</p>
      <p className="practica">▣ practica</p>
    </div>
  )

}

/*<image x={x} y={y} href="ruta/a/la/imagen.png" width={12} height={12} />*/
const SkillDataviz = () => {

  const CustomTickLabel = (props:any) => {
    const { x,y,text } = props;
    return (
      <image x={x-8} y={y}
      href={skillsData[text].img}
      width={15}
      />
    );
  }

  const parsed:dataInView[] = Object.keys(skillsData)
  
  .sort( (a,b) => {
    const accumulated = (index:string) => skillsData[index].experiencia + skillsData[index].practica ;
    if(accumulated(a) < accumulated(b)){return 1};
    if(accumulated(a) > accumulated(b)){return -1};
    return 0
  })

  .sort((a,b) => {
    return Number(skillsData[b].mainStack) - Number(skillsData[a].mainStack);
    return skillsData[b].experiencia - skillsData[a].experiencia ;
    return 0
  })
  
  .map( x => {
    const { img , practica , experiencia , mainStack } = skillsData[x];
    return {name:x,img,practica,experiencia,suma:practica+experiencia}
  })

  return(
      <VictoryChart
        height={400}
        style={{
          parent:{minWidth:'100%',margin:0,padding:0}
        }}
      >

        <VictoryAxis
          dependentAxis
          label='años'
          style={{
            axis:{stroke:'none'},
            tickLabels: {angle: 270, fontSize: 10 , fontFamily:'Montserrat',padding:15},
            axisLabel: {angle: 270, fontSize: 15 , fontFamily:'Montserrat'},
          }}
          tickFormat={(x:number) => (Math.floor(x/12)+1)}
        />

        <VictoryAxis
          label='tecnologías'
          tickLabelComponent={<CustomTickLabel/>}
          style={{
            axis: { stroke: 'none' },
            axisLabel: {
              angle: 180,
              fontSize: 15,
              fontFamily: 'Montserrat',
              margin: 'auto',
              padding: 50 // Añade el margen deseado aquí
            },
          }}
        />


        <VictoryStack>
          <VictoryBar colorScale={['#E74C3C']} data={parsed} barRatio={0.75} y='experiencia' x='name'/>
          <VictoryBar colorScale={['#27AE60']} data={parsed} barRatio={0.5} y='practica' x='name'/>
        </VictoryStack>


      </VictoryChart>
  )

}

export default SkillDataviz