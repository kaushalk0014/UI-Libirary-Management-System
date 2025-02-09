
import React from "react";

import { useGetBookByIdQuery} from './BookListApi';


const BookList = () =>{

    const { data: booklist} = useGetBookByIdQuery(9);

    return(
        <>
            <h1>{booklist}</h1>
        </>
    )
}

export default BookList;


