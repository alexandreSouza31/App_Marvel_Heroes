import styled from "styled-components";
import { Link } from "react-router-dom";


export const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
gap:1rem;
text-align: center;
height: 160px;
padding: 1rem;
margin-top:2rem;
background-color: #111;
color: #c5c5c5;


`
export const SectionSocial = styled.section`
display: flex;
justify-content: space-evenly;
width: 100%;

& ul{
    list-style: none;
display: flex;
justify-content: space-around;
width: 100%;

}

& svg{
    font-size: 1.5rem;
    fill: whitesmoke;
    transition: .4s;
    margin-bottom: .5rem;
}
& svg:hover{
    fill: #E61C23;
}

`
export const Copy = styled.span`
font-size: 1.5rem;
color: #E61C23;

`

export const SectionBrand = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
width: 50vw;

& span{
    display: flex;
    align-items:center;
}

@media screen and (max-width:359px) {
    /* small*/
width: 100vw;
justify-content: center;
flex-wrap: wrap;

}

`

export const Brand = styled(Link)`
font-size: 2rem;
transition: .4s;
color:whitesmoke;
background-color:#E61C23;
border-radius:4px;

&:hover{
    /* color: #E61C23; */
    border:1px solid #ffffff;

}
`




