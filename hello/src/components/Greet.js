import React from 'react'

// function Greet(){
//     return <h1>
//         Hello Devansh
//     </h1>
// }

const Greet=(props)=>{ 
    console.log(props);
return (
    <div>
    <h1>Hello {props.name} a.k.a {props.nickname} </h1>
{props.children}
</div>
)
}

export default Greet