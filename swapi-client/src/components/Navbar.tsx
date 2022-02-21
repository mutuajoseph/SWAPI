import styled from "styled-components"

function Navbar() {
  return (
    <Nav>People</Nav>
  )
}

export default Navbar

const Nav = styled.nav`
    text-align: center;
    font-size: 3rem;
    margin-bottom:1rem;
    background: #00b4d8;
    padding: .4rem 0;
    font-family: 'Shizuru', cursive;
`