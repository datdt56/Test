import { useContext, useRef } from "react";
import styled from "styled-components";
import AuthContext from "../store/auth-context";

const StyledForm = styled.div`
    width: 30%;
    margin: 50px auto;
    border: solid 1px;
    border-radius: 25px;
    box-shadow: 5px 10px #888888;
    padding: 20px 0;
    font-family: Roboto;
    form{
        width:50%;
        margin:auto
    }
    .form-input {
        margin: 20px;
        font-size: 20px;
        input{
            display: block;
            border-radius: 25px;
        }
    }
    .submit-btn {
        margin: 20px;
        button {
            background: green;
            color: white;
            line-height: 20px
        }
    }
`

const LoginForm = (props) => {
    const auth = useContext(AuthContext)
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const submit = (event) => {
        event.preventDefault();
        auth.login(emailInputRef.current.value, passwordInputRef.current.value);
    }
    return (
        <StyledForm>
            <form onSubmit={submit}>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" ref={emailInputRef}/>
                </div>
                
                <div className="form-input">
                    <label htmlFor="password">Mật khẩu</label>
                    <input id="password" type="password" ref={passwordInputRef}/>
                </div>
                
                <div className="submit-btn">
                    <button>Đăng nhập</button>
                </div>
            </form>
        </StyledForm>
    )
    

}

export default LoginForm;
