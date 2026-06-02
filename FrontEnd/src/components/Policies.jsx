import React,{useEffect,useState} from 'react';
import api from '../api';

function Policies(){

 const [policies,setPolicies]=useState([]);

 const [customerName,setCustomerName]=useState('');
 const [policyType,setPolicyType]=useState('');
 const [premium,setPremium]=useState('');

 useEffect(()=>{
   loadPolicies();
 },[]);

 const loadPolicies=async()=>{

   const response=await api.get('/policies');

   setPolicies(response.data);
 }

 const createPolicy=async()=>{

   await api.post('/policies',{
      customerName,
      policyType,
      premium
   });

   loadPolicies();
 }

 return(

   <div>

      <h2>Create Policy</h2>

      <input
       placeholder="Customer Name"
       onChange={(e)=>setCustomerName(e.target.value)}
      />

      <input
       placeholder="Policy Type"
       onChange={(e)=>setPolicyType(e.target.value)}
      />

      <input
       placeholder="Premium"
       onChange={(e)=>setPremium(e.target.value)}
      />

      <button onClick={createPolicy}>
         Save
      </button>

      <hr/>

      <h2>Policies</h2>

      <table border="1">

      <thead>
        <tr>
           <th>ID</th>
           <th>Name</th>
           <th>Policy</th>
           <th>Premium</th>
        </tr>
      </thead>

      <tbody>

       {
         policies.map(p=>(
           <tr key={p.id}>
             <td>{p.id}</td>
             <td>{p.customerName}</td>
             <td>{p.policyType}</td>
             <td>{p.premium}</td>
           </tr>
         ))
       }

      </tbody>

      </table>

   </div>
 )
}

export default Policies;
