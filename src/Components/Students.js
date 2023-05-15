import React,{useState}  from 'react';
import '../Studentstyle.css';

function Studentdata(props){
    return(
        <tr>
            <td className='name'>{props.name}</td> 
            <td>{props.age}</td>
            <td>{props.course}</td>
            <td>{props.batch}</td>
            <td><a href='#'>Edit</a></td>
        </tr>
    )
}


function Student(){
const [formdata,setformdata]=useState({});
const [ArrayofObjects,setarray]=useState([
    {name:"vamshi",age:23,course:"MERN",batch:"EA21",change:"edit"},
        {name:"vivek",age:23,course:"MERN",batch:"EA21",change:"edit"},
        {name:"pavan",age:23,course:"MERN",batch:"EA21",change:"edit"}
]);
    function handledata(event){
        const key=event.target.name;
        const value=event.target.value;
       
        setformdata((values)=>({...values,[key]:value}));
        console.log(formdata);
    }
    let handlesubmit=(event)=>{
        event.preventDefault();
       
        setarray([...ArrayofObjects,formdata    ]);
      
    }
    console.log(ArrayofObjects); 

    return(
   
     <>
        <div className="topheadingandbtn">   
            <h1>Student Details  <button type="button" id="addnewstudent">Add New student</button></h1>
        </div> 
        <table>
            <thead>
            <tr>
                <th className='name'>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th >Change</th>

            </tr>
            </thead>
            <tbody>
          
               {ArrayofObjects.map((studata)=><Studentdata key={studata.name} name={studata.name}  age={studata.age}
                                course={studata.course} batch={studata.batch}  />)}

          
            </tbody>
        </table>
        <br/>

        <form>
            <label className='flating-lable'><input  type='text' name='name' value={formdata.name} onChange={handledata} placeholder='Enter name' /></label>
            <label><input  type='number' name='age' value={formdata.age} onChange={handledata} placeholder='Enter age' /></label>
            <label><input  type='text' name='course' value={formdata.course} onChange={handledata} placeholder='Enter course' /></label>
            <label><input  type='text' name='batch' value={formdata.batch} onChange={handledata} placeholder='Enter batch'/></label>
          

        </form>
     <button className="submitbtn" type='button' onClick={handlesubmit}>Submit</button>  

     </>    
    )
}
export default Student;