import React,{useState}    from 'react';
import '../App.css';
function Form(props){
    const [Formdata,setFormdata]=useState({});
    const [ArrayOfObjects,setArrayOfObjects]=useState([]);

    console.log(Formdata) 
const handleformdata=(event)=>{
    const name=event.target.name;
    const values=event.target.value;
    setFormdata(value=>({...value,[name]:values}));
 
   console.log(Formdata)
}
console.log(Formdata)
const handleSubmit=(event)=>{
    event.preventDefault();
    setArrayOfObjects([...ArrayOfObjects,Formdata])
    setFormdata({name:"",Department:"",Rating:""})
   console.log(Formdata)
}

function Card(props){
    return (
        <h1>This is {props.condition}</h1>
    )
}



    return (
        <>
   <form>
            <label>Name:<input type="text" name="name" value={Formdata.name} onChange={handleformdata}/></label><br/><br/>
            <label>Department:<input type="text" name="Department" value={Formdata.Department || ""} onChange={handleformdata}/></label><br/><br/>
            <label>Rating:<input type="number" name="Rating" value={Formdata.Rating || ""} onChange={handleformdata}/></label><br/><br/>
            <button type="button" onClick={handleSubmit}>Submit</button>
         </form>

<br/><br/><br/><br/><br/><br/><br/><br/>
         <div className='container' >
            {
            ArrayOfObjects.map(element=>
            <div className='card' key={element.name}>Name:{element.name}|Department:{element.Department}|Rating:{element.Rating}
            </div>
                  )
            }

            
            </div>
        </>

       
    )
}


export default Form;