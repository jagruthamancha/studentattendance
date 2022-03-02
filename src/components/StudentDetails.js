import React, { useState } from 'react'
import storageRef from '../firebase'


const StudentDetails = () => {
    const [name, setName] = useState("")
    const uploadStudentDetails = () => {
        storageRef("teacher").push({
            name: name,
            complete: false,
        }).catch(alert);
    };

    const handleOnChange = (e) => {
        setName(e.target.value);
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        console.log(url);
    }
    return (

        <div>
            <span className="text-gray-700" >Student name</span>
            <input type="text" className="mt-1 block rounded text-blue-500" placeholder="Student Name" onChange={handleOnChange} />
            <span className="text-gray-700">Roll Number</span>
            <input type="text" className="mt-1 block rounded text-blue-500" placeholder="Roll Number" />
            <span className="text-gray-700">Image of Student</span>
            <input type="file" accept="image/png,image/jpg,image/jpeg" className="mt-1 block rounded text-blue-500" onChange={handleImageChange} />
            <button className=" bg-sky-500 hover:bg-sky-600 text-white border-2 rounded-lg border-black-500/100 p-2 m-2 justify-center" onClick={uploadStudentDetails}>Submit</button>
        </div>
    )
}
export default StudentDetails