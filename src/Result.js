import React from "react";

function Result ({secretNum,term}){

    let result;

    if(term){
    if(term>secretNum){
       result= 'Higher 😪';
     }else if(term<secretNum){
        result = 'LOWER 😜';
     }else if(term==secretNum){
        result ='Yepee!! Correct 😊🎊'
     }else{
        result = 'Enter Valied input 😒'
     }
    }

    return <h3>You Guessed : {result}</h3>
}

export default Result;