import axios from 'axios'

import React,{useState,useEffect} from 'react'
 /** */ 
 
function data() {
    
    const[country,setcountry]=useState([]);
    const[countryName,setcountryName]=useState();
    const[img,setimg]=useState();
    useEffect(()=>{fetchdata()},[])
    
   const fetchdata=async()=>{
    
      return axios.get('http://localhost:9001/testAPI')
        .then(res=>{
            //  set all data in country        
            setcountry(res.data); 
            // set default value for list and image 
            setcountryName(res.data[0].name)
            setimg(res.data[0].img)
               
        })
        .catch(err=>
            {
                console.log(err)
            })
           }

           function handlefromname(e){
               // set selected option for list and image
            setcountryName(e.target.value)
            setimg(e.target.value)
              
           }
                return (
                    <>
                    <div class='heading-content'>
                        {/* project heading */}
                    <h1>FLAG FINDER</h1>
                    </div>
                    
               <div class="main">
                   {/* list of country in drop-down */}
                   <div class="Country_select">
                        <select  class='selectOption' value={countryName} onChange={handlefromname}>
                        {
                            country.map(option =>(
                            <option key={option.name} value={option.img}>{option.name}</option>))
                        }
                        </select>
                   </div>
                   {/* flag image display  */}
                   <div class="flagImg">
                        <img src={img} alt='hai'></img>
                   </div>
               </div>
             </>

         
            
        )
}

export default data
