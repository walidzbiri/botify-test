import {useState} from 'react';


const ChooseView=({handleView})=>{
    const choices= ['Chart','Table'];
    const choiceList=choices.map((choice)=>{
        return (<option value={choice} key={choice}>{choice}</option>)
   })
    return(
        <div className="dropdown" style= {{marginTop: "10px",marginLeft: "200px"}}>
            <label htmlFor="views">Choose view :</label>
            <select name="views" style={{width: "200px"}} id="views" onChange={(e)=>{
                handleView(e.target.value);
            }}>
                {choiceList}
            </select>
        </div>
    )
}

export default ChooseView;