import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function Test2() {
    const [id, setId] = useState(0);
    const navigate = useNavigate();
    axios.get(`/test22/${id}`)
        .then(response => {
            // Do something with the response data
        })
        .catch(error => {
            // Handle any errors
        });
    return (
        <section className="contents">

            <h2>로그인</h2>


        </section>
    );
}