import React,{Component} from 'react';
import { CSVLink } from "react-csv";



class DownloadCsv extends Component {
  
    render() {
        return(
                <CSVLink data={this.props.data} filename={"nasa.csv"} enclosingCharacter={''}>
                    Download CSV
                </CSVLink>
        )
    }
  }

  export default DownloadCsv;