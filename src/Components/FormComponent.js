import React,{useState}    from 'react';
import '../App.css';


function Form(){
    const [Formdata,setFormdata]=useState({});
    const [ArrayOfObjects,setArrayOfObjects]=useState([]);
    const [contaner,setcontaner]=useState(false);
    const [showform,setshowform]=useState(true);
    console.log(Formdata) ;



const handleformdata=(event)=>{
    const name=event.target.name;
    const values=event.target.value;
    setFormdata(value=>({...value,[name]:values}));
 
   console.log(Formdata)
}
function Container(){
    return(
        <>
        <div className='container' >
        {
        ArrayOfObjects.map(element=>
        <div className='card' key={element.name}>Name:{element.name}|Department:{element.Department}|Rating:{element.Rating}
       
        </div>)
        }
        </div>
        <button onClick={backfunc}>Back</button>
        </>
    )
}


console.log(Formdata)


function backfunc(){
    console.log("back function");
    setcontaner(!contaner);
    setshowform(!showform);
}

const handleSubmit=(event)=>{
    event.preventDefault();
    setArrayOfObjects([...ArrayOfObjects,Formdata]);
    setFormdata({name:"",Department:"",Rating:""});
   console.log(Formdata);
   setcontaner(!contaner);
   setshowform(!Formdata);
}

    return (
        <>
            {showform &&    <form>
        <h1>  Employee Feedback Form:</h1>
            <label>Name:<input type="text" name="name"  value={Formdata.name} onChange={handleformdata}/></label><br/><br/>
            <label>Department:<input type="text" name="Department" value={Formdata.Department || ""} onChange={handleformdata}/></label><br/><br/>
            <label>Rating:<input type="number" name="Rating" value={Formdata.Rating || ""} onChange={handleformdata}/></label><br/><br/>
            <button type="button" onClick={handleSubmit}>Submit</button>
         
         
         </form>}
           
     
<br/><br/><br/><br/><br/><br/><br/><br/>
{ contaner && <Container />}
        </>

       
    )
}


export default Form ;
