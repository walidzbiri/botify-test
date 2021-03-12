import Chart from "react-google-charts";

const ChartView=({data})=>{
  return(
    <Chart
      width={1300}
      height={'700px'}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        legend: { position: 'top'},
        chartArea: {width: '50%'},
        colors: ['#48ACF0', '#BF0603'],
        hAxis: {
          title: 'Estimated diameter (km)',
          minValue: 0
        },
        vAxis: {
          title: 'NEO Name'
        }
      }}
    />  
  )
}


export default ChartView;