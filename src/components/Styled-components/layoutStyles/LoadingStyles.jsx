import styled from "styled-components"

export const Dialog = styled.dialog`
width: 100vw;
height: 150%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
position: absolute;
top:0%;
text-align: center;
background-color: #000000ca;

& img{
    max-width: 150px;
}

@media screen and (max-height:300px) {
    /* very small*/
height: 150%;
top: 45%;
}

@media screen and (min-height:801px) {
    /* small*/
top: 15%;
height: 100%;

}
`