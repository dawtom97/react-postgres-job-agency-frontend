import React from "react";
import { useDeleteCompanyMutation } from "../state/services/companiesApi";

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

  const handleDelete = async (id: number) => {
    await deleteCompany(id);
  };

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
                <button>Edit</button>
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
