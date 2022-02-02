import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Search = () => {
    const [type, setType] = useState("title");
    const [userQuery, setUserQuery] = useState("");
    const history = useHistory();

    const sendSearch = (e) => {
        e.preventDefault();
        history.push("/" + type + "/" + userQuery);
    }


    return (
        <div>
            <form onSubmit={sendSearch}>
                <label>Select: </label>
                <select value={type} id="type" onChange={(e) => setType(e.target.value)}>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                </select>
                <label>Your Search: </label>
                <input value={userQuery} type="text" onChange={(e) => setUserQuery(e.target.value)}></input>
                <button>Search!</button>
            </form>
        </div>
    );
};

export default Search;
