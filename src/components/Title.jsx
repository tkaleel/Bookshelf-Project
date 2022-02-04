import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import filledheart from '../heart.svg';
// import emptyheart from '../filledheart.svg';
import bookcover from '../cover.png';

const Title = (props) => {
    const [books, setBooks] = useState([]);
    const [data, setData] = useState({});


    const { userQuery } = useParams();

    // const heartstyle = {
    //     height: "20px",
    //     width: "20px"
    // }
    const [cover, setCover] = useState(bookcover);
    const coverstyle = {
        width: "25%"
    }


    // const [heart, setHeart] = useState(filledheart);
    

    // const changeHeart = () => {
    //     console.log("Clicked!");

    //     if (heart === emptyheart) {
    //         setHeart(filledheart);
    //     } else {
    //         setHeart(emptyheart);
    //     }
    // }

    useEffect(() => {
        axios.get("http://openlibrary.org/search.json?title=" + userQuery)
            .then(response => {
                console.log(response.data.docs);
                console.log(response.data.docs[0].author_name["0"])
                setBooks(response.data.docs);
                setData(response.data);
            })
            .catch(error => console.log(error))
    }, [userQuery]);

    return (
        <div>
            <h3>Your Search Results: {data.numFound}</h3>
            <hr />
            <ol>
                {books ?
                    books.map((book, idx) => {
                        return (
                            <li key={idx}>

                                <div key={book.key} >

                                    <h3>{book.title}</h3>
                                    <p>Author: {book.author_name ? (book.author_name[0]) : "Hello"}</p>
                                    <p>Published: {book.first_publish_year}</p>
                                    {/* <img src={heart} alt="Empty Heart" style={heartstyle} onClick={changeHeart} /> */}
                                    <img src={cover} alt="Book Cover" style={coverstyle} />
                                </div>
                            </li>
                        )
                    }) : <div>Loading...</div>
                }
            </ol>

        </div>
    );
};

export default Title;
