import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
// import { userContext } from '../App';

const MakeAdmin = () => {
    const history = useHistory();
    // const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    // const [info , setInfo] = useState({});
    // const [file, setFile] = useState(null);

    // const handleBlur = e => {
    //     const newInfo = {...info};
    //     newInfo[e.target.name] = e.target.value; 
    //     setInfo(newInfo);
    // }
    // const handleFileChange = e => {
    //     const newFile = e.target.files[0];   
    //     setFile(newFile);
    // }

    const onSubmit = (data) => {
    //     data.image = loggedInUser.photoURL;

        console.log("added admin ", data);

        fetch('http://localhost:3011/addAdmins', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('New Admin added successfully');
                    // history.push('/');
                }
            })

        // const formData = new FormData()
        // formData.append('file', file)
        // formData.append('name', file.name)
        // formData.append('email', file.email)

        // fetch('http://localhost:3011/addServiceItem', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })

    }
    return (
        <div>
            <form className=" mt-5 bg-dark p-5" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-white">Add new admin:</h1>

                <div className="">
                    <h4 className="text-white">Your name</h4>
                    <input  style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Your Name" type="text" {...register("adminName", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
            

                <div className="">
                    <h4 className="text-white">New Email</h4>
                    <input  style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Price" type="text" {...register("email", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="">
                    <h4 className="text-white">New password</h4>
                    <input  style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Price" type="password" {...register("password", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>


                <div className="mt-5 btn btn-primary">
                    <input style={{ width: '100px', letterSpacing: '2px', padding: '10px' }} type="submit" />
                </div>
            </form>

        </div>
    );
};

export default MakeAdmin;