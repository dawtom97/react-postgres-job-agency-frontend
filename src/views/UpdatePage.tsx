import React, {  ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSingleCompanyQuery, useUpdateCompanyMutation } from '../state/services/companiesApi';


export const UpdatePage:React.FC  = ():any => {
 const [updateContent, setUpdateContent] = useState({
  id: "",
  name:"",
  location:"",
  price_range:""
 })
 const {id} = useParams();
 const {data:content, isFetching} = useGetSingleCompanyQuery(Number(id));
 const [updateCompany] = useUpdateCompanyMutation();
 const navigate = useNavigate();

 useEffect(()=>{
   if(isFetching) return;
   setUpdateContent(content.data.company)
 },[content, isFetching]);

 
 const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
   e.preventDefault()
   setUpdateContent({
    ...updateContent,
    [e.target.name]:e.target.value
   })
   console.log(updateContent)
 }

 const handleSubmit = (e:any) => {
     e.preventDefault();
     updateCompany(updateContent);
     console.log("Zaktualizowano");
     navigate('/');
 }


  return (
    <div>
      <h1>Update Company</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input value={updateContent.name} onChange={handleChange} type="text" name="name" placeholder="Company Name" />
        </div>
        <div>
          <input value={updateContent.location} onChange={handleChange} type="text" name="location" placeholder="Company location" />
        </div>
        <div>
           <select value={updateContent.price_range} onChange={handleChange} name="price_range" id="">
            <option value="">Price range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
           </select>
        </div>
        <button type="submit">Update Company</button>
      </form>
    </div>
  )
}
