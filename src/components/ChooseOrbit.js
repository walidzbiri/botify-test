import {useState} from 'react';


const ChooseOrbit=({handleOrbit})=>{
    const orbitingBody=['Earth','Juptr','Mars','Merc'];
    const choiceList=orbitingBody.map((orbit)=>{
        return(<option value={orbit} key={orbit}>{orbit}</option>)
   })
    return(
        <div className="dropdown" style= {{marginTop: "10px",marginLeft: "200px"}}>
            <label htmlFor="orbits">Choose orbit :</label>
            <select name="orbits" style={{width: "200px"}} id="orbits" onChange={(e)=>{
                handleOrbit(e.target.value);
            }}>
                <option value="none">All</option>
                {choiceList}
            </select>
        </div>
    )
}


export default ChooseOrbit;