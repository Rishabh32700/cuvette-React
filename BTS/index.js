import React from "react";
import ReactDOM from "react-dom/client";
// jsx react jsx element
let hello = 1
// components
// components are nothing but functions with some extra superpowers
// all the properties that a funxction owns is there in componets + some extra
// a peice of code that we can reuse
// more powerful as compared to functions
// lifecycle
// max lines of code that u can write in a comp is 150 - 200 
const hello2 = () =>{
    return (
        <div>
           {hello++}
           {console.log(hello)}
           {hello++}
            <>hello</>
        </div>
    )
}
// const hello2 = () =>{
//     console.log("hello 2")
// }
// hello2()

const root = ReactDOM.createRoot(document.getElementById("root"));
// babel
root.render(hello2());
