import styled from "styled-components"

export const Dialog = styled.dialog`
width: 95vw;
height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
position: absolute;
top:20%;
text-align: center;
background-color: #000000be;
border-radius: 4px;

& p{
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
}
`