import styled from "styled-components"

export const Container = styled.div`
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
`

export const Card = styled.div`
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

@media screen and (max-width:360px) {
    /* small*/

    & img {
        height: 30vh;
    }
}

@media screen and (min-width:600px) {
    /* average*/
    & img {
            width: 29vw;
            height: 29.5vh;
        }
    
}

@media screen and (min-width:1200px){
    /*large */
    & img {
        width: 20vw;
        height: 30vh;
    }
}

`
export const Result = styled.span`
color: #E61C23;
font-size: 1.3rem;
`
