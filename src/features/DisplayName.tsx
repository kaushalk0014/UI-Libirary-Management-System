import React from "react";

const DisplayNames = () =>{

    const [inputValue, setInputValue] = React.useState("");
    const[show, setShow] = React.useState(false);
    const[nameList, setNameList] = React.useState<string[]>([]);

    const handelSubmit = () =>{
        setShow(true);
        setNameList((prev)=>[
            ...prev,
            inputValue
        ]);
        setInputValue("");
    }

    const handelChanges = (e: any) => {
        setInputValue(e.target.value);
        setShow(false);
    }

    return (
        <div>

            <input type= "text" onChange={(e)=>handelChanges(e)} value= {inputValue}/>

            <button onClick= {()=>handelSubmit()}>Submit</button>
            <div>
                {
                    show? <b>
                        your name is {nameList}
                    </b>:<div></div>
                }

            </div>
        </div>
    )

}

export default DisplayNames;