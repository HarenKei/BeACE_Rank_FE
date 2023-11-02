import { useState, useEffect } from "react";

const LoginData = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const func = () => {
        //로그인 이벤트 처리
    }

    return(
        <>
            <form onSubmit={func}>
                <input type="text" id="id" value="아이디를 입력해주세요"/>
                <br />
                <input type="password"/>
                <br />
                <button type="submit" id="loginBtn">로그인</button>
                <br />
            </form>
        </>
    )
}

export default LoginData;