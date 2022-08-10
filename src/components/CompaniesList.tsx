import React from "react";


interface ICompany {
  companies: {
    id:number,
    name:string,
    location:string,
    price_range:number
  }[]
}

export const CompaniesList = ({companies}:ICompany) => {
  return (
    <div>
      <table>

        <thead>
          {companies.map((company)=>(
             <tr key={company.id}>
               <td>{company.name}</td>
               <td>{company.location}</td>
               <td>{"$".repeat(company.price_range)}</td>
               <td>
                reviews
               </td>
               <td>
                  <button>Edit</button>
               </td>
               <td>
                  <button>Delete</button>
               </td>
             </tr>
          ))}
     
        </thead>

        <tbody>
           
        </tbody>

      </table>
    </div>
  );
};
