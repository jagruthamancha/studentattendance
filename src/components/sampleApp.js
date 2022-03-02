import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React, { useState } from 'react';
import OpenCamera from './components/openCamera'
import StudentDetails from './components/StudentDetails'
function App() {
    const [name, setName] = useState("");
    const [login, setLogin] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [webcamUrl, setwebcamUrl] = useState("");
    const [openCamera, setopenCamera] = useState(false);

    const checkStudent = () => {
        localStorage.setItem('checkStudent', 0)
    }
    const checkTeacher = () => {
        localStorage.setItem('checkStudent', 1)
    }


    const responseGoogle = (response) => {
        console.log(response);
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
            <div className="place-content-center">
                <div className="">
                    {login && "Hello " + name}
                </div>
                <div>
                    {login && <img src={imageUrl} alt="propic" />}
                </div>
                <div>
                    {!openCamera
                        ? (<>
                            <button className=" bg-sky-500 hover:bg-sky-600 text-white border-2 rounded-lg border-black-500/100 p-2 m-2" onClick={() => { setopenCamera(true) }}>Open camera</button>
                            <StudentDetails />

                        </>)

                        : <OpenCamera webcamUrl={webcamUrl} />}

                </div>
                <div>
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

                    <button className=" bg-sky-500 hover:bg-sky-600 text-white border-2 rounded-lg border-black-500/100 p-2 m-2" onClick={checkStudent}>Student</button>
                    <button className=" bg-sky-500 hover:bg-sky-600 text-white border-2 rounded-lg border-black-500/100 p-2 m-2" onClick={checkTeacher}>Teacher</button>

                </div>
            </div>
        </>
    );
}

export default App;
