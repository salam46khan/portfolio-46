import { useRef } from "react";
import emailjs from '@emailjs/browser';
import MyBtn from "../../../shared/MyBtn/MyBtn";
import './Contact.css'
import Swal from 'sweetalert2'

const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_scnl4mr', 'template_bt6460m', form.current, {
                publicKey: 'YvisuKXqtyqNwDhZr',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your message sent",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <form
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
            data-aos-anchor-placement="center-bottom"
            ref={form} onSubmit={sendEmail} className=" py-6 px-4 md:px-10 rounded-md bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md w-full shadow shadow-[#0005] dark:shadow-[#0009] ">
            <div className="py-3">
                <label className="block pb-1">Full Name</label>
                <input type="text" name="user_name" placeholder="Your Name" className="w-full rounded-full px-4 py-2 bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md focus:outline-none contactInput" />
            </div>
            <div className="py-2">
                <label className="block pb-1">Email Address</label>
                <input type="email" name="user_email" placeholder="Your Email" className="w-full rounded-full px-4 py-2 bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md focus:outline-none contactInput  " />
            </div>
            <div className="py-3">
                <label className="block pb-1">Message</label>
                <textarea name="message" placeholder="Write here..." className="w-full rounded-full px-4 py-2 bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md focus:outline-none contactInput min-h-16" />
            </div>
            <div className="pt-2 text-center">
                <MyBtn>
                    <input type="submit" value="Send" className="cursor-pointer px-3" />
                </MyBtn>
            </div>
        </form>
    );
};

export default ContactForm;