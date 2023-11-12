import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) =>{
    const dataPointsValues = props.dataPoints.map((data) => data.value)
    //обьектин ичиндеги значенияларды кайтарат
    const totalMix = Math.max(...dataPointsValues)
    //эн чон сан totalMixтин ичинде болот
    return (
    <div className='chart'>
        {props.dataPoints.map((dataPoint) =>(
        <ChartBar
         key={dataPoint.label} //ошибка чыкпаш учун ключ берилет
        value={dataPoint.value} 
        maxValue={totalMix}
        label={dataPoint.label}
        />
       ))}
    </div>
    )
}

export default Chart