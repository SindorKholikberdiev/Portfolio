// Fayl: src/pages/ContactPage.jsx

import React from "react";
import ContactInfo from "../components/ContactInfo/ContactInfo.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";

// This page component receives 'name' and 'onChangeName' from the App's route.
// Bu sahifa komponenti 'name' va 'onChangeName' ni App'dagi route'dan qabul qiladi.
const ContactPage = ({ name, onChangeName }) => {
  return (
    <main>
      {/* The two-column layout for the contact components now lives here. */}
      {/* Kontakt komponentlari uchun ikki ustunli joylashuv endi shu yerda joylashgan. */}
      <section className="contactSection">
        <ContactInfo />
        {/* We pass the received props down to the ContactForm. */}
        {/* Qabul qilingan props'larni ContactForm'ga uzatamiz. */}
        <ContactForm name={name} onChangeName={onChangeName} />
      </section>
    </main>
  );
};

export default ContactPage;
