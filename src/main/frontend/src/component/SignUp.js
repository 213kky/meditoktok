import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function SignUp() {
    return(
        <section className="contents">
            <h1 style={{textAlign:"center",}}>회원가입</h1>
            <Link to="/signup/user"><div className="userSignUp" >일반 사용자<br/><div>회원가입</div></div></Link>
            <Link to="/signup/manager"><div className="managerSignUp" >병원 관리자<br/><div>회원가입</div></div></Link>
        </section>
    );
}
