import React, { useState } from "react";
import Webcam from "react-webcam";

export default function OpenCamera() {
  // const [deviceId, setDeviceId] = useState({});
  // const [url, setUrl] = useState(null)
  const url = ""
  const [devices, setDevices] = useState([]);
  const [imgSrc, setImgSrc] = useState(null);
  const [isShowVideo, setIsShowVideo] = useState(false);
  const KEY = "81fb7354ae5f46dfa3e4697a1978c1a2"
  const face_api_url = 'https://centralindia.api.cognitive.microsoft.com/face/v1.0/detect'
  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );




  React.useEffect(
    () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },
    [handleDevices]
  );
  const webcamRef = React.useRef(null);
  const startCam = () => {
    setIsShowVideo(true);
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc)
    console.log(imgSrc);

  }
  const ReStartCam = () => {
    setIsShowVideo(false);
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc)
  }

  // const stopCam = () => {
  //   let stream = webcamRef.current.stream;
  //   const tracks = stream.getTracks();
  //   tracks.forEach(track => track.stop());
  //   setIsShowVideo(false);
  // }
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': KEY,
    },
    body: JSON.stringify({
      "url": url, "returnFaceId": 'true',
    })
  };



  return (
    <div className="justify-center">
      {devices.map((device, key) => (
        <div className="justify-center">
          {device.label || `Device ${key + 1}`}
          {(!isShowVideo)
            ? (<> <Webcam
              audio={false}
              height={500}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={500}
              videoConstraints={{ deviceId: device.deviceId }}
              className="m-2 p-2"
            />
              <button className=" bg-sky-500 hover:bg-sky-600 text-white border-2 rounded-lg border-black-500/100 p-2 m-2" onClick={startCam}>Capture photo</button>
            </>
            ) :
            <button className=" bg-sky-500 hover:bg-sky-600 text-white border-2 rounded-lg border-black-500/100 p-2 m-2 justify-center" onClick={ReStartCam}>Re Capture</button>
          }
        </div>

      ))}

      {imgSrc && (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <><img className="m-2 p-2 flex justify-center" height={500} width={500} src={imgSrc} alt="captured image" />
          <a href={imgSrc} >Link</a></>)}
      <button className=" bg-sky-500 hover:bg-sky-600 text-white border-2 rounded-lg border-black-500/100 p-2 m-2 " onClick={() => {
        fetch(face_api_url, requestOptions)
          .then(async response => {
            const data = await response.json();
            console.log(data);


          })
      }}>Submit</button>

    </div>
  )
}
