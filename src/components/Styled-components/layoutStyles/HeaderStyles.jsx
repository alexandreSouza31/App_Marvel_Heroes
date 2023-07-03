import styled from "styled-components"

export const HeaderStyles = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
padding: 2rem .5rem !important;
width: 100%;
min-height: 15vh;
background-color: #E61C23;

& h1 {
    color: whitesmoke;
    font-size: 2.5rem;
}

& form {
    display: flex;
    align-items: center;
}

& button {
    font-size: .8rem;
    border-radius: 8px;
    border: none;
    padding: 0.4em .8em;
    margin-left: .5rem;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    color: whitesmoke;
    border: 1px solid whitesmoke;
    transition: .4s;
}

& button:hover{
    color: #E61C23;
}

@media screen and (max-width:360px) {
    min-height: 20vh;

    & h1 {
        font-size: 2rem;
    }
}

@media screen and (max-width:428px) {
margin: 0 auto;
justify-content: center;

    & img {
        margin: .5rem auto;
        width: 50px;
    }
    
    & input{
        width: 150px;
    }
    
}

@media screen and (min-width:650px) {
        justify-content: space-between;
        min-height: 5vh;
    
}
`