import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"


function Person(props: any):JSX.Element {
  
  const {name, height, mass, gender, homeworld, url } = props.person

  const navigate = useNavigate()

  const navigateToSinglePerson = () => {
    let newUrl = url.split("/")
    let path = `people/${newUrl[5]}`;
    navigate(path)
  }

  return (
    <PersonWrapper onClick={navigateToSinglePerson}>
        <PersonDetail>
            <h2>{name}</h2>
        </PersonDetail>
    </PersonWrapper>
  )
}

export default Person

const PersonWrapper = styled.div`
    width: 50vw;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    transition: all ease-in-out .2s;
    text-decoration: none;
    color: #111;

    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transform: scale(1.05);
        cursor: pointer;
    }

    @media (max-width: 768px){
        width: 90vw;
    }
`
const PersonDetail = styled.div`
    padding: .8rem .6rem;
    border-left: 4px solid #003049;
    border-radius: 4px;
`