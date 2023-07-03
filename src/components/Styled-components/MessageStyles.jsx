import styled from "styled-components"

export const Dialog = styled.dialog`
width: 95vw;
height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
position: absolute;
top:20%;
text-align: center;
background-color: #0000009d;

& p{
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
}
`