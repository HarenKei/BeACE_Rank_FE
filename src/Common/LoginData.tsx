import { useState, useEffect } from "react";
import axios from "axios";

const LoginData = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleId = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setId(e.target.value)
    }

    const handlePw = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }

    const Login = async () => {
        //로그인 이벤트 처리
        try{
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE}/login`, {
                    id,
                    password,
                }
            );
            // 로그인 성공
            console.log('로그인 성공', response.data);
            // useNavigate를 통해 메인 페이지로 이동시켜보자..
        } catch (error) {
            console.error('로그인 실패', error);
        }
    };

    return(
        <>
            <form id="loginForm">
                <label>아이디(학번):</label><br/>
                <input type="text" id="id" onChange={handleId}/><br/>
                <label>비밀번호:</label><br/>
                <input type="password" onChange={handlePw}/><br/>
                <button type="submit" id="loginBtn" onClick={Login}>로그인</button><br />
            </form>
        </>
    )
}

export default LoginData;