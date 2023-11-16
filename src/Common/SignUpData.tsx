import { use, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SignUpData = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [msgPw, setMsgPw] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [msgCheckPw, setMsgCheckPw] = useState("");
    const [pwState, setPwState] = useState<boolean>();
    const [checkPwState, setCheckPwState] = useState<boolean>();
    const [idToken, setIdToken] = useState<boolean>();

    // useState 비동기에 주의..
    const validatePw = async () => {
        if(password.length > 10) {
            setMsgPw("최대 10자리까지 가능합니다.");
            setPwState(false);
        } else {
            setMsgPw("");
            if (checkPassword === password){
                setMsgCheckPw("");
                setCheckPwState(true);

            } else {
                setMsgCheckPw("비밀번호와 일치하지 않습니다.");
                setCheckPwState(false);
            }
        }
    }

    const checkDuplication = async () => {
        try{
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_BASE}/user?student_id=${id}`
                );
            // 사용 가능한 아이디(학번)일 경우
            setIdToken(response.data.exists);
            alert('이미 가입된 아이디(학번)입니다.');
        } catch (error) {
            console.error('중복 확인에 에러 발생', error);
        }
    }

    const submit = async () => {
        try {
            // 중복 확인
            await checkDuplication();

            if(idToken) {
                alert('아이디(학번)을 확인해주세요.');
                return;
            }
        
            // 이후 회원가입 로직
            const signUpResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/signUp`, {
                userId: id, //학번
                name: name,
                password: password,
            });

            // 회원가입 성공 시
            console.log('회원가입 성공', signUpResponse.data);
            // useNavigate를 사용해 로그인 페이지로 이동되게끔 시도했으나 실패함.
        } catch (error) {
            // 회원가입 실패 시
            console.error('회원가입 실패', error);
        }
    }

    return(
        <form className="signUp">
            <label>아이디(학번):</label><br/>
            <input className="signUp" type="text" onChange={event => {setId(event.target.value);}}></input>
            <button id="duplicateCheckBtn" onClick={checkDuplication}>중복확인</button><br />
            <label>이름:</label><br/>
            <input className="signUp" type="text" onChange={event => {setName(event.target.value);}}></input><br/>
            <label>비밀번호:</label><br/>
            <input className="signUp" type="password" onChange={event => {setPassword(event.target.value); validatePw();}}></input><br/>
            {msgPw && <p style={{color:"red"}}>{msgPw}</p>}
            <label>비밀번호 확인:</label><br/>
            <input className="signUp" type="password" onChange={event => {setCheckPassword(event.target.value); validatePw();}}></input><br/>
            {msgCheckPw && <p style={{color:"red"}}>{msgCheckPw}</p>}

            <button type="submit" id="signUpBtn" onClick={submit}>회원가입</button>
        </form>
    );
}

export default SignUpData;