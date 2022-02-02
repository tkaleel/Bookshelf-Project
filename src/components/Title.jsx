import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Title = (props) => {
    const [books, setBooks] = useState([]);
    const [data, setData] = useState({});

    const { userQuery } = useParams();

    useEffect(() => {
        axios.get("http://openlibrary.org/search.json?title=" + userQuery)
            .then(response => {
                console.log(response.data.docs);
                setBooks(response.data.docs);
                setData(response.data);
            })
            .catch(error => console.log(error))
    }, [userQuery]);

    return (
        <div>
            <h3>Your Search Results: {data.numFound}</h3>
            <hr />
            {
                books.map((book, idx) => {
                    return(
                        <div key={book.key} >
                            <h3>{book.title}</h3>
                            <p>Author: {book.author_name}</p>
                            <p>Published: {book.first_publish_year}</p>
                        </div>
                    )
                })
            }
        </div>

    );
};

export default Title;
