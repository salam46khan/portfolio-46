import ContacatBanner from "./ContactBanner/ContacatBanner";
import ContactBox from "./ContactBox/ContactBox";
import ContackLink from "./ContactLink/ContackLink";

const ContactPage = () => {
    return (
        <div className="bg-lightColor dark:bg-darkColor relative overflow-hidden">
            <ContacatBanner></ContacatBanner>
            <ContackLink></ContackLink>
            <ContactBox></ContactBox>
        </div>
    );
};

export default ContactPage;