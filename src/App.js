import React,{Component} from 'react';
import ChartView from './components/ChartView';
import ChooseOrbit from './components/ChooseOrbit';
import ChooseView from './components/ChooseView';
import TableView from './components/TableView';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      dataLoadingStatus: 'loading',
      neos: [],
      nonFilteredChartData: [],
      filteredChartData: [],
      chartHeaders: ['Name', 'Min Estimated Diameter (km)', 'Max Estimated Diameter (km)'],
      selectedOrbi: 'none',
      view: 'Chart'
    }
  }
  // trigger this method when App component is mounted to DOM tree.
  componentDidMount(){
    // Function responsible for fetching data from API
    const fetchData=async ()=>{
      // Use personal key, because the DEMO one has a restricted number of requests
      const API_KEY='ExunHUTlsBb0m1lJRTOXagBfYrZ3auNKcJ0XaHbv';
      const API_URL = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`
      const response = await fetch(API_URL);
      // get response in json format
      const json = await response.json();
      // Extract near_earth_objects attribute from response
      const neos=json.near_earth_objects;
      // Initialize Chart as empty array
      const chartData = []
      // Loop through neos and get exact data from it
      for (let i = 0; i < neos.length; i += 1) {
        chartData.push([neos[i].name,
                        neos[i].estimated_diameter.kilometers.estimated_diameter_min,
                        neos[i].estimated_diameter.kilometers.estimated_diameter_max
                      ])
      }
      // Sorting neos by average estimated diameter descending.
      chartData.sort((a,b)=>{
        return (b[1]+b[2])/2 - (a[1]+a[2])/2
      })
      // Prepend chart Data with Headers
      chartData.unshift(this.state.chartHeaders)
      // after data fetching set states to new values
      this.setState({
        dataLoadingStatus: 'ready',
        neos: neos,
        nonFilteredChartData: chartData,
        filteredChartData: chartData
      })
    }
    fetchData();
  }

  // Function to handle Orbit body filtering
  handleOrbit = (orbit) => {
    // update the selectedOrbit
    this.setState({selectedOrbi: orbit});
    // If user selected none then show all neos
    if(orbit==='none'){
      this.setState({filteredChartData: this.state.nonFilteredChartData})
    }else{
      // container used to collect filtered NEOs
      const tmpFilteredData=[];
      // Loop through all neos
      this.state.neos.forEach((neo)=>{
        // get Neos with specific orbiting_body in their close_approach_data attribute
        for(let j=0;j<neo.close_approach_data.length;j++){
          if(neo.close_approach_data[j].orbiting_body===orbit){
            tmpFilteredData.push([
              neo.name,
              neo.estimated_diameter.kilometers.estimated_diameter_min,
              neo.estimated_diameter.kilometers.estimated_diameter_max]
              );
            break; // if that orbit exists on that neo, pass to the next neo
          }
        }
      })
      // Sorting neos by average estimated diameter descending.
      tmpFilteredData.sort((a,b)=>{
        return (b[1]+b[2])/2 - (a[1]+a[2])/2
      })
      // Prepend filtered Data with Headers
      tmpFilteredData.unshift(this.state.chartHeaders);
      // Set filtredChartData state to the new neos 
      this.setState({filteredChartData: tmpFilteredData});
    }
  }
  // function to handle view selection
  handleView= (view) =>{
    this.setState({view: view});
  }

  render() {
    return (
    <div className="App">
      {/* Check if data is fully loaded from API */}
      {this.state.dataLoadingStatus === 'ready' ? (
         <div className="chart-panel">
            <ChooseOrbit handleOrbit={this.handleOrbit} />
            <ChooseView handleView={this.handleView} />
            {/* If user choice is chart render Chart Component ,else render Table Component */}
            {this.state.view==="Chart" ? 
              <ChartView data={this.state.filteredChartData} /> : 
              <TableView data={this.state.filteredChartData} />
            }
       </div>
    ) : (
      // if Data is not ready show a message
      <div>Fetching data from API, Wait Please</div>
    )}
    </div>)
  }
}

export default App;