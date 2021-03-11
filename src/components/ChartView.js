import React,{Component} from 'react';
import Chart from "react-google-charts";// Chart component used to create charts,tables etc...

class ChartView extends Component {
  
    render() {
        return(
            <Chart
              width={1300}
              height={'700px'}
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={this.props.data} //data passed from Root component as props
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
  }

  export default ChartView;