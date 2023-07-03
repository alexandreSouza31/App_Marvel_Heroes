import styled from "styled-components"

export const Dialog = styled.dialog`
width: 100vw;
height: 100vh;
 display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
position: absolute;
top:15%;
text-align: center;
background-color: #000000ca;


& img{
    width: 200px;
}

@media screen and (max-height:300px) {
    /* very small*/
top: 45%;

& img{
    width: 150px;
}
}
@media screen and (min-height:301px) and (max-height:800px) {
    /* small*/
top: 20%;

& img{
    width: 150px;
    }
}
`