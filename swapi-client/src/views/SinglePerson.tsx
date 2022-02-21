import { Link, useParams } from "react-router-dom"
import gql from "graphql-tag"
import { useQuery, } from "react-apollo"
import { BiArrowBack } from "react-icons/bi"

import styled from "styled-components"
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"

//   get user query
const PERSON_QUERY = gql`
query ExampleQuery($person: Float!) {
    getPerson(person: $person) {
      name
      height
      mass
      gender
      homeworld
      url
      created
    }
  }
`

function SinglePerson(): JSX.Element {

    const heey: string = useParams().name || ''
    const newHeey = parseFloat(heey)
    
    const [person, setPerson] = useState(0)

    const { loading, error, data, refetch } = useQuery(PERSON_QUERY, {
        variables: { person },
        pollInterval: 500,
    })

    useEffect(() => {
        // Update the document title using the browser API
        if (newHeey) {
            setPerson(newHeey)
            refetch({person})
        }
      }, [person]);

    if (loading) return <p>Loading ...</p>

    if (error) return <p>{error}</p>

    return (
        <>
            <Navbar />
            <BackToMenu>
                <BackToMenuWrapper to="/">
                    <BiArrowBack />
                    <p>Back To Menu</p>
                </BackToMenuWrapper>
            </BackToMenu>
            <SingleWrapper>
                <h2>{data.getPerson.name}</h2>

                <div>
                    <PersonWrapper>
                        <PersonLabel>Name</PersonLabel>
                        <div>{data.getPerson.name}</div>    
                    </PersonWrapper> 

                    <PersonWrapper>
                        <PersonLabel>Gender</PersonLabel>
                        <div>{data.getPerson.gender}</div> 
                    </PersonWrapper>  

                    <PersonWrapper>
                        <PersonLabel>Height</PersonLabel>
                        <div>{data.getPerson.height}</div>
                    </PersonWrapper>

                    <PersonWrapper>
                        <PersonLabel>Mass</PersonLabel>
                        <div>{data.getPerson.mass}</div>
                    </PersonWrapper>

                    <PersonWrapper>
                        <PersonLabel>HomeWorld</PersonLabel>
                        <div>{data.getPerson.homeworld}</div>
                    </PersonWrapper>
                </div>
            </SingleWrapper>
        </>
    )
}

export default SinglePerson

const SingleWrapper = styled.div`
    border-left: 3px solid #111;
    width: 50vw;
    margin: 0 auto;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    @media (max-width: 768px){
        width: 80vw;
        padding: .2rem .6rem;
    }
`

const BackToMenu = styled.div`
    width: 52vw;
    margin: .8rem auto;
    cursor: pointer;
    transition: all ease-in-out .2s;

    @media (max-width: 768px){
        width: 90vw;
        padding: .2rem 1rem;
    }
`

const BackToMenuWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: .5rem;
    width: 200px;
    color: #111;

    &:hover {
        text-decoration: underline;
    }
`

const PersonLabel = styled.div`
    font-weight: 700;
`   

const PersonWrapper = styled.div `
    margin: 1rem 0;
`