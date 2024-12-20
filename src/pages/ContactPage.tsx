import React from "react";
import ContactHero from "../components/AllSectionContact/ContactHero";
import ContactInfo from "../components/AllSectionContact/ContactInfo";
import ContactForm from "../components/AllSectionContact/ContactForm";


const ContactPage: React.FC = () => {
  return (
    <>
      <ContactHero
        title="Comment nous joindre?"
        backgroundImage="https://res.cloudinary.com/dtpw00be5/image/upload/v1733515750/dc553794380aefe2763d0cba59616c54_co402d.jpg"
      />
      <ContactInfo />
      <ContactForm/>
      
    </>
  );
};

export default ContactPage;
