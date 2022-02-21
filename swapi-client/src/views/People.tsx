
import gql from "graphql-tag"
import { useQuery } from "react-apollo"
import styled from 'styled-components'

import Person from "../components/Person"
import Navbar from "../components/Navbar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {BiSearch} from 'react-icons/bi'


const PEOPLE_QUERY = gql`
query ExampleQuery($pageNumber: Float) {
  getPeople(pageNumber: $pageNumber) {
    name
    height
    mass
    gender
    homeworld
    url
  }
}
`

//   get user query
const PERSON_QUERY = gql`
query SearchQuery($search: String) {
    searchPerson (search: $search) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`

function People(): JSX.Element {

  const [pageNumber, setPageNumber] = useState(1)
  const [personSearch, setPersonSearch] = useState('')

  const navigate = useNavigate()

  const handleButtonClick = () => {

    if (pageNumber == 1 || pageNumber == 0) {
      setPageNumber(2)
    } else if (pageNumber == 2 || pageNumber == 0) {
      setPageNumber(1)
    }
  }

  const { loading, error, data, refetch } = useQuery(PEOPLE_QUERY, {
    variables: { pageNumber, search:personSearch },
  }) 


  if (loading) return (
    <>
      <Navbar />
      <NoResults>Loading...</NoResults>
    </>
  )

  if (error) return (
    <>
      <Navbar />
      <NoResults>{error}</NoResults>
    </>
  )

  return <>
    <Navbar />
    
    <PeopleWrapper>
      {data.getPeople.length > 0 ? data.getPeople.map((person:any) => (
        <Person person={person} />
      )): <NoResults>No results found</NoResults>}
      <PaginationWrapper>
          <button onClick={handleButtonClick}>1</button>
          <button onClick={handleButtonClick}>2</button>
        </PaginationWrapper>
    </PeopleWrapper>
  </>
}

export default People

const PeopleWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`
const SearchSection = styled.div`
  width: 50vw;
  margin: 2rem auto;
  display: flex;
  align-items: center;

  @media (max-width: 768px){
    width: 100vw;
    padding: 2rem .4rem;   
  }

  > button {
    background: none;
    border: none;
    outline: none;
    font-size: 1.8rem;
    padding-top: .5rem;
  }
`

const SearchInput = styled.input`
  outline: none;
  border: none;
  padding: .6rem;
  width: 20vw;
  border-bottom: 1px solid #111;
  font-size: 1.2rem;

  @media (max-width: 768px){
    width: 92vw;
}
`
const NoResults = styled.div`
  border: 1px solid #111;
  width: 50vw;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap:1rem;
  margin: 1rem 0;

  > button {
    width: 40px;
    height: 40px;
  }
`