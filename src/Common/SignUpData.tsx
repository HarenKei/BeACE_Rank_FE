import { use, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface signUp {
    id: string,
    name: string,
    deptName: string,
    currentBeACEScore: number,
    grade: number,
    password: string,
    confirmPassword: string,
}

const SignUpData = () => {

    // const [data, setData] = useState<signUp>({
    //     id:"",
    //     name:"",
    //     deptName:"",
    //     currentBeACEScore:0,
    //     grade:1,
    //     password:"",
    //     confirmPassword:"",
    // });
    // (event) => {setData({...data, id: event.target.value})} < onChange의 파라미터 값 예시

    // 회원가입에 필요한 값들
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [deptName, setDeptName] = useState("");
    const [currentBeACEScore, setCurrentBeACEScore] = useState<number>(0);
    const [grade, setGrade] = useState<number>(1);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState<boolean>();

    // 사용자 편의를 위한 메시지를 띄우기 위해 필요한 값들.
    const [msgId, setMsgId] = useState("");
    const [msgName, setMsgName] = useState("");
    const [msgDeptName, setMsgDeptName] = useState("");
    const [msgBeACE, setMsgBeACE] = useState("");
    const [msgGrade, setMsgGrade] = useState("");
    const [msgPw, setMsgPw] = useState("");


    const [idToken, setIdToken] = useState<boolean>();
    const [nameState, setNameState] = useState<boolean>();
    const [deptNameState, setDeptNameState] = useState<boolean>();
    const [beACEState, setBeACEState] = useState<boolean>();
    const [gradeState, setGradeState] = useState<boolean>();
    const [pwState, setPwState] = useState<boolean>();

    const router = useRouter();

    // useState 비동기에 주의..
    const validator = async () => {
        if(name == null || name == "") {
            setMsgName("이름은 공백일 수 없습니다.");
            setNameState(false);
            console.log(name);
        } else if(deptName == null || deptName == "") {
            setMsgDeptName("학과명은 공백일 수 없습니다.")
            setDeptNameState(false);
        } else if (currentBeACEScore == null) {
            setMsgBeACE("0 혹은 그 이상의 숫자를 입력해 주세요.");
            setBeACEState(false);
        } else if (grade == null) {
            setMsgGrade("학년은 공백일 수 없습니다.");
            setGradeState(false);
        }
        else if(password.length > 10) {
            setMsgPw("최대 10자리까지 가능합니다.");
            setPwState(false);
        }  else if(password != confirmPassword) {
            alert('비밀번호가 일치하는지 다시 한 번 확인해주세요.');
        } else {
            setMsgName("");
            setMsgDeptName("");
            setMsgBeACE("");
            setMsgGrade("");
            setMsgPw("");
        }
    }

    const checkDuplication = async () => {
        try{
            // console.log(`${data}`)
            console.log(`${id}`)
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_BASE}/findUserInfo?userId=${id}`
                );
            // 사용 가능한 아이디(학번)일 경우
            setIdToken(response.data.exists);
            alert('이미 가입된 아이디(학번)입니다.');
        } catch (error) {
            setMsgId("사용 가능한 아이디(학번)입니다.");
            console.error("중복되지 않음", error);
        }
    }

    const submit = async () => {
        try {
            // 중복 확인
            await checkDuplication();
            await validator();

            if(idToken) {
                alert('아이디(학번)을 확인해주세요.');
                return;
            }
        
            // 이후 회원가입 로직
            const signUpResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/signUp`, {
                id: id,
                name: name,
                deptName: deptName,
                currentBeACEScore: currentBeACEScore,
                grade: grade,
                password: password,
                confirmPassword: confirmPassword
            });

            // 회원가입 성공 시
            console.log('회원가입 성공', signUpResponse.data);
            setIsSignUp(true);
            router.push('/Login');
        } catch (error) {
            // 회원가입 실패 시
            console.error('회원가입 실패', error);
        }
    }

    // useEffect(()=>{
    //     // 클라이언트 측에서만 실행되도록 처리
    //     if(typeof document !== 'undefined'){
    //         router.push('/Login');
    //     }
    // }, [isSignUp])

    return(
        <form className="signUp">
            <label>아이디(학번):</label><br/>
            <input className="signUp" type="text" onChange={event => setId(event.target.value)}></input>
            <button id="duplicateCheckBtn" type="button" onClick={checkDuplication}>중복확인</button><br />
            {msgId && <p style={{color:"green"}}>{msgId}</p>}
            <label>이름:</label><br/>
            <input className="signUp" type="text" onChange={event => setName(event.target.value)}></input><br/>
            <label>학과:</label><br/>
            <input className="signUp" type="text" onChange={event => setDeptName(event.target.value)}></input><br/>
            <label>BeACE 점수:</label><br/>
            <input className="signUp" type="text" onChange={event => setCurrentBeACEScore(event.target.valueAsNumber)}></input><br/>
            <label>학년</label><br/>
            <input className="signUp" type="text" onChange={event => setGrade(event.target.valueAsNumber)}></input><br/>
            <label>비밀번호:</label><br/>
            <input className="signUp" type="password" onChange={event => setPassword(event.target.value)}></input><br/>
            {msgPw && <p style={{color:"red"}}>{msgPw}</p>}
            <label>비밀번호 확인:</label><br/>
            <input className="signUp" type="password" onChange={event => setConfirmPassword(event.target.value)}></input><br/>

            <button type="button" id="signUpBtn" onClick={submit}>회원가입</button>
        </form>
    );
}

export default SignUpData;