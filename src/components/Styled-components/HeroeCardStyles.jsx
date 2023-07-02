import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeroeCardContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-bottom: 1.5rem;

& img{
    border: 2px solid gray;
}

& img:hover{
    border-color: #E61C23;
}

@media screen and (max-width:360px) {
    /* small*/
width: 46vw;

    & img {
        height: 30vh;
    }
}
@media screen and (min-width:480px) {
    min-height: 50vh;   
height: 50vh;
}

@media screen and (min-width:1200px){
    /*large */
    width: 25%;
    height: 50vh;
    align-items: center;
}

`
export const ImgContainer = styled.div`
border: 2px solid gray;
max-width: 45vw;
height: 30.5vh;
border-radius: 4px;
transition: .4s;

& img{

    border: 2px solid gray;
}

& img:hover{
    border-color: #E61C23;
}

@media screen and (max-width:360px) {
    /* small*/
width: 46vw;
    & img {
        height: 30vh;
    }

@media screen and (min-width:600px) {
    /* average*/
width: 29.5vw;
height: 30vh; 
    }

@media screen and (min-width:1200px){
    /*large */
    width: 20vw;
    height: 50vh;
    }
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
}

@media screen and (max-width:360px) {
    /* small*/
    justify-content: space-between;

    & h3 {
        font-size: 1rem;
        max-height: 60px;
    }
}

@media screen and (min-width:600px) {
    /* average*/
width: 30vw;

@media screen and (min-width:1200px){
    /*large */
    width: 20vw;
    }

    & h3 {
        font-size: 1rem;
    }
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
font-weight: 400;
background-color: #1a1a1a;
color: whitesmoke;
cursor: pointer;
transition: .4s;

&:hover{
    background-color: #E61C2321;
    border-color: #E61C23;
    color: #E61C23;
}

@media screen and (min-width:600px) {
width: 29.5vw;
}

@media screen and (min-width:1200px){
    /*large */
    padding: 1rem 25%;
    width: 20vw;
}

`