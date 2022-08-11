import React from "react";
import { useDeleteCompanyMutation } from "../state/services/companiesApi";
import {useNavigate} from 'react-router-dom'

interface ICompany {
  companies: {
    id: number;
    name: string;
    location: string;
    price_range: number;
  }[];
}

export const CompaniesList = ({ companies }: ICompany) => {
  const [deleteCompany, { isSuccess }] = useDeleteCompanyMutation();
  const navigate = useNavigate();

  const handleDelete = async (id: number,e:any) => {
    e.stopPropagation();
    await deleteCompany(id);
  };

  const handleUpdate = (id:number,e:any) => {
    e.stopPropagation();
    navigate(`/companies/${id}/update`)
  }

  const handleNavigate = (id:number) => {
    navigate(`/companies/${id}`)
  }

  return (
    <div>
      <table>
        <thead>
          {companies.map((company) => (
            <tr key={company.id} onClick={()=>handleNavigate(company.id)}>
              <td>{company.name}</td>
              <td>{company.location}</td>
              <td>{"$".repeat(company.price_range)}</td>
              <td>reviews</td>
              <td>
                <button onClick={(e)=>handleUpdate(company.id,e)}>Edit</button>
              </td>
              <td>
                <button onClick={(e) => handleDelete(company.id,e)}>Delete</button>
              </td>
            </tr>
          ))}
        </thead>

        <tbody></tbody>
      </table>
    </div>
  );
};

