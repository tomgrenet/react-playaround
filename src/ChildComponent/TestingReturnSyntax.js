import React from 'react'

//This works
// const childComponent = () => (
//     <p>This return syntax works</p>
// );

//This works
const childComponent = () => {
    return <p>This return syntax works</p>
}

//This does not work
//Err Mess: Expected an assignment or function call and instead saw an expression
//Explanation: was expecting to have something returned from the method
//But there is nothing returned here; the {} are only here to declare multi-line code
// const childComponent = () => {
//     <p>This return syntax does not work</p>
// }

export default childComponent;
