import React,{Component} from 'react';
import Chart from "react-google-charts";

class TableView extends Component {
  
    render() {
        return(
            <Chart
              width={1300}
              height={'700px'}
              chartType="Table"
              loader={<div>Loading Chart</div>}
              data={[
                [
                  { type: 'string', label: 'Neo Name' },
                  { type: 'number', label: 'Min Estimated Diameter (km)' },
                  { type: 'number', label: 'Max Estimated Diameter (km)' },
                ], ...this.props.data.slice(1)
              ]}
              options={{
                showRowNumber: true,
              }}
              rootProps={{ 'data-testid': '1' }}
            />  
        )
    }
  }

  export default TableView;