import { useContext } from "react"
import AuthContext from "../store/auth-context"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: green;
    ul{
        display: inline-block;
        height: 100%;
        list-style: none;
        li {
            display: inline-block;
            color: white;
            font-size:30px;
            margin: 0 20px;
        }
    }
`

const Navigation = () => {
    const auth = useContext(AuthContext)

    return (
        <NavigationWrapper>
            <div className="header" style={{display:'inline-block', height:'100%'}}>
                <img alt="logo" src="/logo.png" height="70px"/>
            </div>
            {auth.userInfo &&
                <ul>
                    <li onClick={auth.logout}>Log Out</li>
                </ul>
            }
            
        </NavigationWrapper>
    )
}

export default Navigation
