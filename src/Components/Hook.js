import React,{useState} from  'react';

function SimpleForm(){
    let [variable,setvariable]=useState("");
    let [newvariable,setnewvariable]=useState("");
let inputfunc=(event)=>{
let result=event.target.value;
console.log(result);
   setvariable(result); 
}

let Sumbitfunc=()=>{

console.log(variable);
setnewvariable(variable)   
setvariable("" )
    
}


return(
    <>
    <form>
        <label>Enter Name:<input type="text" name="name" onChange={inputfunc} value={variable}/></label>
        <button type='button' onClick={Sumbitfunc} >Submit</button>
        <p>You entered: {newvariable}</p>
    </form>
    
    </>
)

}

export default SimpleForm;