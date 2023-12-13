import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useCookie } from "@/src/Common/Cookie";

const LoginData = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    // 쿠키 저장 변수
    const { cookieValue, setCookie } = useCookie();

    const router = useRouter();

    const handleId = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setId(e.target.value)
    }

    const handlePw = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        setIsLogin(true);
    }

    const Login = async () => {
        //로그인 이벤트 처리
        try{
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE}/signIn`, {
                    id,
                    password,
                }
            );

            // 로그인 성공, 세션 쿠키 받아오기
            const CookieValue = 'your_server_cookie_value'; // 스프링에서 지정한 쿠키의 값, 전부 이걸로 바꿔줘야 함.
            setCookie(CookieValue);

            handleLogin();
            console.log('로그인 성공', response.data);
            alert('로그인 성공');
        } catch (error) {
            alert('아이디와 비밀번호를 확인해 주세요!');
            console.error('로그인 실패', error);
        }
    };

    useEffect(()=>{
        if(isLogin){
            window.location.href='/';
            console.log(cookieValue); // 확인 결과 쿠키 값이 존재하지 않을 경우 undefined로 뜸.
            // 조건을 !== undefined로 설정하면 될 듯.
        }
    }, [isLogin, router])

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