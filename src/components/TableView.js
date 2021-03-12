import Chart from "react-google-charts";


const TableView=({data})=>{
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
        ], ...data.slice(1)
      ]}
      options={{
        showRowNumber: true,
      }}
      rootProps={{ 'data-testid': '1' }}
    />  
  )}
export default TableView;