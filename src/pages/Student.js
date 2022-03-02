import React, { useState } from 'react'
import OpenCamera from '../components/openCamera'


const Student = () => {
    const [openCamera, setopenCamera] = useState(false);
    const [webcamUrl, setwebcamUrl] = useState("");
    console.log(setwebcamUrl);

    return (
        <div>
            <div>
                {!openCamera
                    ? (<>
                        <button className=" bg-sky-500 hover:bg-sky-600 text-white border-2 rounded-lg border-black-500/100 p-2 m-2" onClick={() => { setopenCamera(true) }}>Open camera</button>

                    </>)

                    : <OpenCamera webcamUrl={webcamUrl} />}

            </div>
        </div>
    )
}
export default Student