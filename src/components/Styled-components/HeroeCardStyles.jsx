import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeroeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-bottom: 1.5rem;

`
export const ImgContainer = styled.div`
border: 1px solid gray;
max-width: 45vw;
height: 30.5vh;
border-radius: 4px;

&:hover{
    border: 1px solid #E61C23;
}
`
export const LinkContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2rem;
width: 45.5vw;

& h3{
    margin-top: .2rem;
    margin-bottom: 1rem;
    max-height: 70px;
    background-color: #250707;
}

`

export const Linkbtn = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
border-radius: 4px;
border: none;
border: 1px solid grey;
padding: 1rem 12vw;
font-size: 1em;
font-weight: 500;
background-color: #1a1a1a;
color: whitesmoke;
cursor: pointer;
transition: .4s;

&:hover{
    background-color: #E61C2321;
    border-color: #E61C23;
    color: #E61C23;
}
`
