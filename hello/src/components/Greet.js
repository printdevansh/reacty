import React from 'react'

// function Greet(){
//     return <h1>
//         Hello Devansh
//     </h1>
// }

const Greet=(props)=>{ 
    const  {name,nickname}=props
    // console.log(props);
return (
    <div>
    <h1>Hello {name} a.k.a {nickname} </h1>
{/* {props.children} */}
</div>
)
}

export default Greet