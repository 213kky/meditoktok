import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function Test() {
    const [id, setId] = useState(0);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            id: id
        };
        axios.post('/test11', formData)
            .then(response => {
                // console.log(response);
                alert(response.data);
                // navigate("/");
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <section className="contents">

            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
                </div>
                <button type="submit">로그인</button>
            </form>

        </section>
    );
}