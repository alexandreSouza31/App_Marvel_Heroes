import styled from "styled-components"

export const HeroeContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& h1 {
    text-align: center;
    margin: .5rem auto;
}

& img{
    width: 100%;
    min-height: 150px !important;
}

@media screen and (max-width:320px)  {
   /* very small */ 
   min-height:100vh !important;

   }

@media screen and (max-width:479px) {
    /*small */   
    height:50%;
    justify-content: start;
    
    & h1{
        font-size: 1.5rem;
    }
    & img{
        width:70vw;
    }
}

@media screen and (min-width:480px)  {
    & img{
        max-height: 60vh !important;
    }
    
}

@media screen and (min-width:700px){
    /*average */
    
    & img{
    min-height: 40vh !important;

    height: 40vh !important;
    }

@media screen and (min-width:1200px){
    /*large */

    & img{
    max-width:30vw;
    height: 40vh !important;

    width: 30vw;
    min-height: 45vh !important;
        }
    }
}

`

export const Card = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: start;
margin-bottom: 2rem;
width: 90vw;
min-height: 20vh;

& img{
min-height: 39.5vh;
float:left;
border-radius: 4px;
border:2px solid #E61C23;

}

@media screen and (max-width:479px) {
    /*small */   
     min-height: 50vh!important;
     margin-bottom: 0rem !important;

     & img{
        max-width:fit-content;
        margin-top: 2rem;
        height: 40vh;
    } 
}

@media screen and (min-width:480px) {
/* average*/

    & img{
        max-width:45vw;
        margin-top: 2rem;
        height: 40vh;
    } 
}

@media screen and (max-height:300px){
    height: 100vh !important;
}


@media screen and (min-width:800px){
    min-height: 40vh !important;
    margin-bottom: 2rem !important;
}

@media screen and (min-width:1200px){
    /*large */
    justify-content: center;
        height:50vh;

    align-items: center; 
    width: 60vw;
    & img{
        max-width: fit-content;
    }
}

`

export const HeroeCardContainer = styled.div`
display: flex;
height: 40vh !important;

& img{
    min-height: 30vh;
}

@media screen and (min-width:480px) {
/* small*/
align-items: start;
min-height: 40vh; 
& img{
margin-top:2rem;    }
    
}

@media screen and (max-height:300px){
    height: 40vh !important;
}

@media screen and (min-width:692px) {
/* small*/

& img{
margin-top:0rem;
height: 50vh;
}
    
}

@media screen and (min-width:1200px){
    /*large */
    & img{
    min-height: 25vh;
    }
}

`

export const NotDescription = styled.p`
margin-top: 6rem;
margin-left:.5rem;
`

export const Description = styled.p`

display: flex;
flex-direction: column;
align-items: center;
width: 80vw;

& h3 {
    font-weight: bold;
    margin-bottom: 1rem;
}

& span{
    overflow-y: scroll;
}

@media screen and (max-height:300px){
    margin-top:5rem !important;

    & span{
    overflow-y: scroll;
    height: 120px;
    }
}

@media screen and (max-width:479px) {
    /*small */  
     margin-top:0rem;
    margin-bottom:0rem;
    min-height: 30vh !important;
    text-align: center;
}

@media screen and (min-width:480px){
width: 45%;
min-height: 40vh !important;
margin-left: .5rem;
height: 100px;
    
}

@media screen and (max-width:699px){
margin-top: 2rem;

}

@media screen and (min-width:611px){
& span{
    overflow-y: hidden;
    }    
}


@media screen and (min-width:1200px){
    /*large */
    max-width: 40vw !important;
    margin-left: 0;
}

`
// export const NotFound = styled.span`

// @media screen and (max-width:479px) {
//     /*small */
// }

// @media screen and (min-width:1200px){
//     /*large */

// }

// `

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

export const ComicCard = styled.div`/**PRECISO ARRUMAR!! */

/* display: grid;
grid-template-columns: 1fr 1fr; */
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