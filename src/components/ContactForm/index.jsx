import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import FormInput from "./FormInput";

function ContactForm({ title, heading }) {
    const { rpdata } = useContext(GlobalDataContext);
  return (
    <section className="contact-form-wrapper section-padding pt-0">
      <div>
        <form-contact
          to={rpdata?.dbPrincipal?.emails?.[0].email}
          services={rpdata?.dbServices?.slice(0, 6).map((item, service) => {
            return item.name;
          })}
          server="https://paginasserver.herokuapp.com/email"
          img={rpdata?.dbPrincipal?.logo}
          emailcolor="1"
        ></form-contact>
      </div>
    </section>
  );
}

export default ContactForm;
