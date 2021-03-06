import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';

const AddReview = () => {
    const history = useHistory();

    
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit=(data)=>{
        data.image= loggedInUser.photoURL;
        // console.log(data);
        
        fetch('http://localhost:3011/addReviews',{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert('Your Review inserted successfully');
                history.push('/');
            }
        })
    }
    return (
        <div>

            <form className="mt-5 p-5 bg-info text-white" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-white">This is review new</h1>

                    <div className="form-group ">
                        <h4>Your name</h4>
                        <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Your Name" type="text" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group ">
                        {/* <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)' }} placeholder="Enter Your Title" type="text" {...register("title", { required: true })} /> */}
                        <h4>Choose Your Answer</h4>
                        <select className="border w-100 pt-2 pb-2 text-danger" {...register("status", { required: true })}>
                            <option >Satisfied</option>
                            <option>very Satisfied</option>
                            <option>Average</option>
                            <option>Not Satisfied</option>
                            <option>Poor Service</option>
                        </select>
                        {errors.status && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group ">
                    <h4>Description</h4>
                        <textarea className="pt-3 pl-3" style={{ border: '1px solid rgba(10, 10, 10, 0.192)',width:'100%' }} placeholder="Enter Your Review Details" {...register("description", { required: true })} />
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    <div className="form-group row">      
                    </div>
                    <div className="form-group">
                        <input style={{ width: '100px', letterSpacing: '2px', padding: '10px' }} type="submit" />
                    </div>
                    
                </form>
            
        </div>
    );
};

export default AddReview;