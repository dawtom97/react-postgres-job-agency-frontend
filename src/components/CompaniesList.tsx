import React from "react";

export const CompaniesList = ({companies}:any) => {
  return (
    <div>
      <table>

        <thead>
          {companies.map((company:any,index:number)=>(
             <tr key={index}>
               <td>{company.name}</td>
               <td>{company.location}</td>
               <td>{company.price_range}</td>
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
