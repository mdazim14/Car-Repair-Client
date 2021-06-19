import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Home/Footer/Footer';
import './Contact.css';

const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="form-section p-5 pb-5">

            <h1 className="text-white text-center p-5 pb-4">Let's Get In Touch</h1>
            <div className="from-design">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input placeholder="Enter Your Name" type="text" {...register("name")} />
                    </div>

                    <div className="form-group">
                        <input placeholder="Enter Your Email" type="email" {...register("exampleRequired", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>

                    <div className="form-group">
                        <textarea className="text-area" placeholder="Enter Your Sharing" />
                    </div>
                    <input className="bg-danger mb-5 text-white" type="submit" />
                </form>
                
            </div>
        </section>
    );
};

export default Contact;