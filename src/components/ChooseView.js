import React,{Component} from 'react';

class ChooseView extends Component {
    constructor(props){
      super(props);
      this.state = { userChoice: 'Chart', choices: ['Chart','Table'] }
    }
  
    render() {
        const choiceList=[]
        this.state.choices.forEach((choice)=>{
            choiceList.push(<option value={choice} key={choice}>{choice}</option>)
       })
        return(
            <div className="dropdown" style= {{marginTop: "10px",marginLeft: "200px"}}>
                <label htmlFor="views">Choose view :</label>
                <select name="views" style={{width: "200px"}} id="views" onChange={(e)=>{
                    this.setState({userChoice: e.target.value});
                    this.props.handleView(e.target.value);
                }}>
                    {choiceList}
                </select>
            </div>
        )
    }
  }

  export default ChooseView;