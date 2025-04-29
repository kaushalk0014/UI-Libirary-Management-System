
import React from "react";

import { useGetBookByIdQuery } from './BookListApi';
import appStyle from './appStyle.css';


const BookList = () => {

    const [resData, setResDate] = React.useState<any>(null);

    const { data, isSuccess } = useGetBookByIdQuery(9);

    const [mockData, setMockData] = React.useState<any[]>([]);
    const [isAdd, setIsAdd] = React.useState<boolean>(false);

    const[initialData, setInitialData] = React.useState<any>({
        bookName: "",
        author:"",
        publicYear:"",
        edition:"",
        volume:"",
        language:"",
    })

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
        
        setIsAdd(true);
    }

    const addNewbook = () => {
        return Object.assign(
            {
                bookName: initialData.bookName,
            }
        )

    }

    const viewDetailsBook = (book: any) => {
        return book.bookName;
    }

    const submitBook = () => {
        setMockData([...mockData, addNewbook()]);
        setIsAdd(false);
    }

    const setBookName = (event:any) => {
        setInitialData({
            ...initialData,
            bookName: event.target.value
        })
    }

    return (
        <>
            <table style={{ border: "1px solid black", width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black" }}>Sl No.</th>
                        <th style={{ border: "1px solid black" }}>Book Name</th>
                        <th style={{ border: "1px solid black" }}>Author</th>
                        <th style={{ border: "1px solid black" }}>Publice Year</th>
                        <th style={{ border: "1px solid black" }}>Edition</th>
                        <th style={{ border: "1px solid black" }}>Volume</th>
                        <th style={{ border: "1px solid black" }}>Language</th>
                        <th style={{ border: "1px solid black" }}>View Details</th>
                        <th style={{ border: "1px solid black" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mockData.map((item: any, index: number) => (
                        <tr key={`key-${index + 1}`}>
                            <td style={{ border: "1px solid black" }}>{index + 1}</td>
                            <td style={{ border: "1px solid black" }}>{item.bookName}</td>
                            <td style={{ border: "1px solid black" }}>{item.author}</td>
                            <td style={{ border: "1px solid black" }}>{item.publicYear}</td>
                            <td style={{ border: "1px solid black" }}>{item.edition}</td>
                            <td style={{ border: "1px solid black" }}>{item.volume}</td>
                            <td style={{ border: "1px solid black" }}>{item.language}</td>
                            <td style={{ border: "1px solid black" }}>
                                <button onClick={() => alert(viewDetailsBook(item))}>View Details</button>
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <button onClick={() => edit(item.id)}>Edit</button>
                                <button onClick={() => deleteBook(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    {isAdd &&
                        <tr key={`key-new_Id`}>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                                <input type="text" placeholder="Enter book name"
                                 onChange={(event)=>setBookName(event)} value={initialData.bookName}/>
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input type="text" placeholder="Enter author name" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input type="date" placeholder="Enter public year" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input type="text" placeholder="Enter edition" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input type="text" placeholder="Enter volume" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input type="text" placeholder="Enter language" />
                            </td>
                            <td></td>
                            <td></td>
                        </tr>}
                        
                   

                    <tr>
                        <td colSpan={2}><button onClick={() => addData()} disabled={isAdd}>Add</button></td>
                        <td colSpan={2}><button onClick={() => submitBook()}>Submit</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default BookList;
