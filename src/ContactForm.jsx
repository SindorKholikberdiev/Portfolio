import { useState } from "react";

const ContactForm = ({ name, onChangeName }) => {
  // Barcha form maydonlari uchun state'lar

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   form jo'natilganda ishlaydigan function
  const handleSubmit = (event) => {
    // Browserning standart harakatini ( sahifani yangilashni) to'xtatamiz
    event.preventDefault();

    // Barcha state lardagi joriy value lardan bitta array yaratamiz
    const submittedData = {
      name, // bu name parent componentdan kelayotga prop dan olinadi
      email,
      message,
    };

    // Yakuniy ma'lumotlarni consolga chiqaramiz (serverga jo'natish simulatsiyasi)
    console.log("form submitted data: ", submittedData);

    // Form send bo'lgandan after input larni clear qilish
    onChangeName("");
    setEmail("");
    setMessage("");
  };
  return (
    // <!-- Contact form: id = "contact-form" -->
    <section>
      <h2>Contact Form</h2>
      {/* <!-- Form: action="#" — serverga yuborilmaydi, faqat ko'rinish uchun --> */}
      {/* <!-- novalidate: HTML5 validatsiyasini o'chiradi, JS bilan qo'shimcha validatsiya qilish mumkin --> */}
      {/* <!-- class="contact-form": CSS uchun maxsus sinf --> */}
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        action="#"
        method="post"
        noValidate
      >
        {/* <!-- Form elementlari --> */}
        <div className="field">
          <label htmlFor="name">Name</label>
          {/* <!-- label -> screen reader va klik uchun --> */}
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            // ikki tomonlama bog'lanish
            // a) State dan o'qish: input qiymati doim 'name' state ga teng
            value={name}
            //  b) State ga yozish: har bir o'zgarishda setName ni chaqirish
            onChange={(event) => onChangeName(event.target.value)}
          />
        </div>
        {/* <!-- Email--> */}
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="your@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        {/* <!-- message (textarea)--> */}
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            placeholder="write your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        {/* <!-- Radio buttons: contact preference --> */}
        <fieldset>
          <legend>Preferred contact</legend>
          <label>
            <input type="radio" name="contact" value="email" />
            Email
          </label>
          <label>
            <input type="radio" name="contact" value="phone" />
            Phone
          </label>
        </fieldset>

        {/* <!-- Checkbox: terms and conditions --> */}
        <fieldset>
          <legend>Terms and conditions</legend>
          <label>
            <input type="checkbox" name="terms" required />I agree to the terms
            and conditions
          </label>
        </fieldset>

        <div className="field">
          <label htmlFor="topic">Topic</label>
          <select name="topic" id="topic" required>
            <option value="" disabled>
              Select a topic
            </option>
            {/* <!--Placeholder--> */}
            <option value="portfolio">Portfolio feedback</option>
            <option value="hire">Hire me</option>
            <option value="collab">Collaboration</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="stack">Tech stack (Multi-select)</label>
          <select name="stack[]" id="stack" multiple size="4">
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
            <option>React</option>
          </select>
        </div>
        {/* <!-- Submit tugmasi: type="submit" — yuborish uchun --> */}
        <div className="field">
          <button type="submit" className="btn">
            Send
          </button>
        </div>
        {/* <!-- Form tugmasi: type="reset" — formani tozalash uchun --> */}
        <div className="field">
          <button type="reset" className="btn">
            Reset
          </button>
        </div>

        {/* 4. Ishlayotganini tekshirish uchun state'ni real vaqtda ko'rsatib turamiz */}
        <p style={{ marginTop: "20px", borderRadius: "5px", padding: "10px" }}>
          Hozirgi email: <strong>{email}</strong>
          <br />
          Hozirgi xabar: <strong>{message}</strong>
        </p>
      </form>
    </section>
  );
};
export default ContactForm;
