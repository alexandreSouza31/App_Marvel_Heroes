import styled from "styled-components"

export const HomeContainer = styled.div`
width: 100%;
min-height: 90vh;
display: flex;
flex-direction: column;
gap: 2rem;
text-align: center;

& h2{
    
    text-align: center;
    color: #ccc;
    margin-top: 1rem;
}


@media screen and (max-width:360px) {
    /* small*/

     div img {
        height: 30vh;
    }
}
`

export const HomeCard = styled.div`
flex-wrap: wrap;
display: flex;
justify-content: space-evenly;
text-align: center;
color: whitesmoke;
margin-top: 1rem;


& img {
    width: 44vw;
    height: 30vh;
    border-radius: 4px;
}

`

