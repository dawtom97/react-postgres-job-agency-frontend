import React, { useState } from "react";
import { useAddCompanyMutation } from "../state/services/companiesApi";


const initialState = {
  name:"",
  location:"",
  price_range:""
}

export const AddCompany:React.FC = () => {

  const[company, setCompany] = useState(initialState);
  const [addCompany,{isLoading}] = useAddCompanyMutation();

  const handleChange = (e:any) => {
    setCompany({
      ...company,
     [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if(company.name.length > 3) {
       addCompany(company);
       setCompany(initialState);
       console.log("udało się dodać")
    } 
    else {
      console.log("nazwa za krótka")
    }

  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} type="text" name="name" placeholder="Company Name" />
        </div>
        <div>
          <input onChange={handleChange} type="text" name="location" placeholder="Company location" />
        </div>
        <div>
           <select onChange={handleChange} name="price_range" id="">
            <option selected disabled>Price range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
           </select>
        </div>
        <button type="submit">Add New</button>
      </form>
    </div>
  );
};
