import contactBox from '../../../assets/svg/Messages-amico.svg'
import ContackForm from '../../Home/Contact/ContactForm';
const ContactBox = () => {
    return (
        <div className='container text-darkColor dark:text-lightColor py-14 p-3 z-10 relative'>
            <div className="flex flex-col md:flex-row ">
                <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="center-bottom"
                    className="w-full md:w-1/2">
                    <img src={contactBox} alt="" />
                </div>
                <div className="w-full md:w-1/2">
                    <ContackForm></ContackForm>
                </div>
            </div>
        </div>
    );
};

export default ContactBox;