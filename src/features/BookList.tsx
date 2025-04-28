
import React from "react";

import { useGetBookByIdQuery } from './BookListApi';


const BookList = () => {

    const [resData, setResDate] = React.useState<any>(null);

    const { data, isSuccess } = useGetBookByIdQuery(9);

    const [mokeData, setMokeData] = React.useState<any>(null);
    const [isEdit, setIsEdit] = React.useState<boolean>(false);

    React.useEffect(() => {
        console.log(isSuccess);
        if (isSuccess) {
            setResDate(data);
        }
    }, [data]);

    const edit = (id: number) => {
        console.log("Edit button clicked" + id);
    }
    const deleteBook = (id: number) => {
        console.log("Delete button clicked" + id);
    }

    const addData = () => {

        setIsEdit(true);
    }


    return (
        <>
            <table style={{"border" :"1px solid black; width: 100%; text-align: center"}}>
                <tr>
                    <th>Action</th>
                    <th>To Do</th>
                </tr>
                {mokeData?.forEach((item: any) => {
                    <tr>
                        <td >
                            <button onClick={() => edit(item.id)}>Edit</button>
                            <button onClick={() => deleteBook(item.id)}>Delete</button>
                        </td>
                        <td>
                            {resData?.title}
                        </td>
                    </tr>
                })}
                {isEdit ?
                    <tr>
                        <td colSpan={2}><input type="text" placeholder="Enter to do" /></td>
                    </tr> : <></>
                }

                <tr>
                    <td colSpan={2}><button onClick={()=> addData()}>Add</button></td>
                    <td colSpan={2}><button onClick={()=> setIsEdit(false)}>Submit</button></td>
                </tr>

            </table>
        </>
    )
}

export default BookList;
