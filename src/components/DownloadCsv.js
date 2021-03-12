import { CSVLink } from "react-csv";

const DownloadCsv=({data})=>{
    return(
        <CSVLink data={data} filename={"nasa.csv"} enclosingCharacter={''}>
            Download CSV
        </CSVLink>
)
}

export default DownloadCsv;