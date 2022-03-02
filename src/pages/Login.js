// import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React, { useState } from 'react';
import Student from './Student';

function Login() {

    const [name, setName] = useState("");
    const [login, setLogin] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const responseGoogle = (response) => {
        console.log(response);
        console.log(name, accessToken, imageUrl);
    }
    const loginSuccess = (response) => {
        if (response.accessToken) {
            setAccessToken(response.accessToken)
            setName(response.profileObj.name);
            setLogin(true)
            setImageUrl(response.profileObj.imageUrl)
            console.log(response);
        }


    }
    const Logout = () => {
        setLogin(false)
        setAccessToken("")
        console.clear()
        alert("You have been logged out successfully");


    }


    return (
        <>
            <div>


                <div className="place-content-center">
                    {!login ? (<GoogleLogin
                        clientId="56665601413-8m3gma9vtgtpaid39c5ebljrgghu6qks.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={loginSuccess}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />)
                        : (<GoogleLogout
                            clientId="56665601413-8m3gma9vtgtpaid39c5ebljrgghu6qks.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={Logout}
                        >
                        </GoogleLogout>)}
                    <Student />
                </div>
            </div>
        </>
    );
}

export default Login;
