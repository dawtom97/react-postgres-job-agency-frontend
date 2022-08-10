import React from 'react'
import { AddCompany } from '../components/AddCompany';
import { CompaniesList } from '../components/CompaniesList';
import { Header } from '../components/Header'
import { useGetCompaniesQuery } from '../state/services/companiesApi'

export const HomePage:React.FC = ():any => {

  const {data: content, isFetching} = useGetCompaniesQuery(null);
  if(isFetching) return "Loading..."
  content.status === "success" && console.log(content);

  return (
    <div>
      <Header/>
      <AddCompany/>
      <CompaniesList companies={content.data.company}/>
    </div>
  )
}
