import './Contact.css';
import ContactForm from './ContactForm';
import ContactProfile from './ContactProfile';

const Contact = () => {

    return (
        <div className='container text-darkColor dark:text-lightColor py-14 p-3 z-10 relative'>
            <div className=" flex justify-center text-center mb-3">
                <div className=" mx-auto text-center">
                    <h3 className="border-b-4 border-pink-400 inline-block px-3 text-3xl mb-3 font-bold">
                        Contact Me
                    </h3>
                    <p className="md:w-2/3 mx-auto">
                        Bringing pixels to life and crafting seamless digital experiences. Let's turn ideas into reality—contact me, and let the front-end journey begin!
                    </p>
                </div>

            </div>
            <div className='mt-8 flex gap-5 flex-col md:flex-row'>
                <div className="w-full md:w-2/6">
                    <ContactProfile></ContactProfile>
                </div>
                <div className="md:w-4/6 w-full">
                    <div className='flex flex-col md:flex-row gap-5 mb-7'>
                        <div className='w-full md:w-1/2 rounded-md bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md shadow shadow-[#0005] dark:shadow-[#0009] p-4'>
                            <h3 className='text-xl font-bold text-pinkColor'>Phone Number</h3>
                            <p>+8801771-393709</p>
                        </div>
                        <div className='w-full md:w-1/2 rounded-md bg-darkColor bg-opacity-15 backdrop-blur-md dark:bg-lightColor dark:bg-opacity-20 dark:backdrop-blur-md shadow shadow-[#0005] dark:shadow-[#0009] p-4'>
                            <h3 className='text-xl font-bold text-pinkColor'>Email Address</h3>
                            <p>salam46.khan@gmail.com</p>
                        </div>
                    </div>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    );
};

export default Contact;