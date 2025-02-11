
import React from "react";

import { useGetBookByIdQuery} from './BookListApi';


const BookList = () =>{

    const [resData, setResDate] = React.useState<any>(null);

    const { data, isSuccess} = useGetBookByIdQuery(9);

    React.useEffect(()=>{
        console.log(isSuccess);
        if(isSuccess){
            setResDate(data);
        }
    },[data]);

    return(
        <>
            <h1>Welcome</h1><br></br>
            <div>Id: {data?.id}</div>
            <div>Name: {data?.name}</div>
        </>
    )
}

export default BookList;


