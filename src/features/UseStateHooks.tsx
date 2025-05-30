import React from "react";

import EmployeeUseStatushooks from "./EmployeeUseStatushooks";
const UseStateHooks = () =>{

    const[lanluageName, setLanguageName] = React.useState<string>("JavaScript");


   // let language = "JavaScript";

    const changeLanguage = ()=>{
        // language = "Python";
        // console.log("Language changed to: ", language);

        setLanguageName("Python");
    }
    return(
        <>
            <h1>My Favourite Language is {lanluageName}</h1>
            <button onClick={()=> changeLanguage()}>Change Language</button>

            <br></br><br></br><br></br>
            <EmployeeUseStatushooks/>
        </>
    )
}
export default UseStateHooks;