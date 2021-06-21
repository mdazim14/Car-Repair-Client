import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';

const AddService = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
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
        data.image = loggedInUser.photoURL;
        console.log("added ", data);

        fetch('http://localhost:3011/addServiceItem', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Your Service added successfully');
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
            <h1 className="text-white">Add Service:</h1>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <h4 className="text-white">Your name</h4>
                    <input  style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Your Name" type="text" {...register("serviceName", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    {/* <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)' }} placeholder="Enter Your Title" type="text" {...register("title", { required: true })} /> */}
                    <h4 className="text-white">Upload Your Image</h4>
                    <input  style={{ width: '500px', letterSpacing: '2px', padding: '10px', backgroundColor: 'yellow' }} type="file" />

                    {errors.status && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group ">
                    <h4 className="text-white">Description</h4>
                    <textarea  className="pt-3 pl-3" style={{ border: '1px solid rgba(10, 10, 10, 0.192)', width: '100%' }} placeholder="Enter Your Details" {...register("description", { required: true })} />
                    {errors.description && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <h4 className="text-white">Product Price</h4>
                    <input  style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Price" type="text" {...register("price", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="mt-5 btn btn-primary">
                    <input style={{ width: '100px', letterSpacing: '2px', padding: '10px' }} type="submit" />
                </div>
            </form>

        </div>
    );
};

export default AddService;