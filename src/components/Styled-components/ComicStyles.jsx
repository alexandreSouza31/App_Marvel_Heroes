import styled from "styled-components";

export const ComicContainer = styled.div`

display: flex;
flex-direction: row;
justify-content: space-evenly;
gap: 1rem;
width:100%;
flex-wrap:wrap;
text-align: center;
margin-top:3rem;

& h3{
    width: 100%;
}

@media screen and (min-width:480px) {

    width:90vw;
    margin: 2rem auto;

    & section{
        width:22vw;
    }

    & img{
    width: 22vw;
    border-radius:4px;
    }
}

`

export const ComicCard = styled.div`

display:flex;
flex-direction: row;
justify-content: center;

& div{
width: 40vw;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-bottom: 2rem;

}

& h4{
    color:#b0b0b0;
}

& img{
    width: 40vw;
    border-radius:4px;
    object-fit: cover;

}

@media screen and (min-width:480px) {
   
    & div{
        width:22vw;
    }

    & img{
    width: 22vw;
    border-radius:4px;
    }

}

@media screen and (min-width:800px){
    /*large */
    & div{
        width:17vw;
    }

    & img{
    width: 17vw;
    border-radius:4px;
    }
   
}
@media screen and (min-width:1200px){
    /*large */
    & div{
        width:14vw;
    }

    & img{
    width: 14vw;
    border-radius:4px;
    }
   
}
@media screen and (min-width:1444px){
    /*large */
    & div{
        max-width:10vw;
    }

    & img{
    width: 10vw;
    border-radius:4px;
    }
   
}
`

export const Hr = styled.hr`
text-decoration:none;
list-style:none;
width:80%;
margin:0 auto;
background-color:#222;
opacity: .2;

`