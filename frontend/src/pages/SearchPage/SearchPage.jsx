import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { API_KEY_1 } from '../../API_KEY';
import { Link } from 'react-router-dom';

//This page is actually closer to a SearchPage
const SearchPage = () => {
    const [userInputs, setUserInputs] = useState([]);

    useEffect(() => {
        const fetchUserInputs = async () => {
            try {
                let response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                setUserInputs(response.data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchUserInputs();
    },  []);
    return (
        <div>
            <h1>UserInput</h1>
            {userInputs &&
                userInputs.map((user) => {
                    return (
                        <li key={user.id}>
                            <Link to={`/details/${user.id}`}>
                        {user.name}
                            </Link>
                        </li>
                    );
            })}
        </div>
    );
};
 
export default SearchPage;