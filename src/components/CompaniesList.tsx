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

  const handleDelete = async (id: number) => {
    await deleteCompany(id);
  };

  const handleUpdate = (id:number) => {
    navigate(`/companies/${id}/update`)
  }

  return (
    <div>
      <table>
        <thead>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.location}</td>
              <td>{"$".repeat(company.price_range)}</td>
              <td>reviews</td>
              <td>
                <button onClick={()=>handleUpdate(company.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(company.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </thead>

        <tbody></tbody>
      </table>
    </div>
  );
};

