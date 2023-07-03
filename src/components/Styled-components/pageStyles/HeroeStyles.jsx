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
    min-height: 150px  ;
}

@media screen and (max-width:320px)  {
   /* very small */ 
   min-height:100vh  ;

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
        max-height: 35vh  ;
    }
    
}

@media screen and (min-width:700px){
    /*average */
    
    & img{

    height: 40vh;
    }

@media screen and (min-width:1200px){
    /*large */

    & img{
    max-width:30vw;
    height: 40vh  ;

    width: 30vw;
    min-height: 45vh  ;
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
margin-top: 2rem;
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
     min-height: 50vh ;
     margin-bottom: 0rem  ;margin-top: 0rem;


     & img{
        max-width:fit-content;
        margin-top: 2rem;
        height: 40vh;
    } 
}

@media screen and (min-width:480px) {
/* average*/
align-items: center;
margin-bottom: 4rem;

& img{
        max-width:45vw;
        margin-top: 0rem;
        min-height: 40vh !important;
    } 
}

@media screen and (max-height:300px){
    height: 100vh  ;
}

@media screen and (min-width:800px){
    min-height: 40vh  ;
    margin-bottom: 2rem  ;
    align-items: center;


    & img{
        width:fit-content;
        
    } 
}

@media screen and (min-width:1200px){
    /*large */
    justify-content: center;
        height:50vh;

    align-items: center; 
    width: 60vw;
    & img{
        max-width: 40vw;
    }
}

`

export const HeroeCardContainer = styled.div`
display: flex;
height: 40vh  ;

& img{
    min-height: 30vh;
}

@media screen and (min-width:480px) {
/* average*/
align-items: start;
/* min-height: 40vh;  */
& img{
margin-top:2rem;
}
    
}

@media screen and (max-height:300px){
    height: 40vh  ;
}

@media screen and (min-width:692px) {
/* average*/

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
margin: 2rem 0;
margin-left:.5rem;
text-align: center;

@media screen and (max-width:320px){
    margin: 4rem 0;

}
@media screen and (min-width:573px) and (max-width:820px) {
    width: 100%;
}
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
    margin-top:5rem  ;

    & span{
    overflow-y: scroll;
    height: 120px;
    }
}

@media screen and (max-width:479px) {
    /*small */  
     margin-top:0rem;
    margin-bottom:2rem;
    min-height: 30vh  ;
    text-align: center;
}

@media screen and (min-width:480px){
width: 45%;
min-height: 40vh  ;
margin-left: .5rem;
/* margin-bottom: 5rem; */
height: 100px;
    
}

@media screen and (max-width:699px){
margin-top: 2rem;

}

@media screen and (min-width:1200px){
    /*large */
    max-width: 40vw;
    margin-left: 0;
    margin: 0 auto;
}
`
