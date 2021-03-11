import React,{Component} from 'react';

class ChooseOrbit extends Component {
    constructor(props){
      super(props);
      this.state = { userChoice: 'none', orbitingBody: ['Earth','Juptr','Mars','Merc'] }
    }
  
    render() {
        const choiceList=[]
        this.state.orbitingBody.forEach((orbit)=>{
            choiceList.push(<option value={orbit} key={orbit}>{orbit}</option>)
       })
        return(
            <div className="dropdown" style= {{marginTop: "10px",marginLeft: "200px"}}>
                <label htmlFor="orbits">Choose orbit :</label>
                <select name="orbits" style={{width: "200px"}} id="orbits" onChange={(e)=>{
                    this.setState({userChoice: e.target.value});
                    this.props.handleOrbit(e.target.value);
                }}>
                    <option value="none">All</option>
                    {choiceList}
                </select>
            </div>
        )
    }
  }

  export default ChooseOrbit;