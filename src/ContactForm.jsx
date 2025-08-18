import { useState } from "react";

const ContactForm = () => {
  // Barcha form maydonlari uchun state'lar
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactPreference, setContactPreference] = useState("email"); // Boshlang'ich qiymat
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [topic, setTopic] = useState(""); // select uchun boshlang'ich qiymat
  const [stack, setStack] = useState([]); // multi-select uchun

  // Formani boshlang'ich holatiga qaytarish funksiyasi
  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setContactPreference("email");
    setAgreedToTerms(false);
    setTopic("");
    setStack([]);
  };

  //   form jo'natilganda ishlaydigan function
  const handleSubmit = (event) => {
    // Browserning standart harakatini ( sahifani yangilashni) to'xtatamiz
    event.preventDefault();

    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    // Barcha state lardagi joriy value lardan bitta obyekt yaratamiz
    const submittedData = {
      name,
      email,
      message,
      contactPreference,
      agreedToTerms,
      topic,
      stack,
    };

    // Yakuniy ma'lumotlarni consolga chiqaramiz (serverga jo'natish simulatsiyasi)
    console.log("form submitted data: ", submittedData);

    // Form send bo'lgandan after input larni clear qilish
    handleReset();
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
            onChange={(event) => setName(event.target.value)}
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
            <input
              type="radio"
              name="contact"
              value="email"
              checked={contactPreference === "email"}
              onChange={(e) => setContactPreference(e.target.value)}
            />
            Email
          </label>
          <label>
            <input
              type="radio"
              name="contact"
              value="phone"
              checked={contactPreference === "phone"}
              onChange={(e) => setContactPreference(e.target.value)}
            />
            Phone
          </label>
        </fieldset>

        {/* <!-- Checkbox: terms and conditions --> */}
        <fieldset>
          <legend>Terms and conditions</legend>
          <label>
            <input
              type="checkbox"
              name="terms"
              required
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            I agree to the terms and conditions
          </label>
        </fieldset>

        <div className="field">
          <label htmlFor="topic">Topic</label>
          <select
            name="topic"
            id="topic"
            required
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
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
          <select
            name="stack[]"
            id="stack"
            multiple
            size="4"
            value={stack}
            onChange={(e) =>
              setStack(Array.from(e.target.selectedOptions, (o) => o.value))
            }
          >
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
          <button type="button" className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>

        {/* 4. Ishlayotganini tekshirish uchun state'ni real vaqtda ko'rsatib turamiz */}
        <p style={{ marginTop: "20px", borderRadius: "5px", padding: "10px" }}>
          Hozirgi ism: <strong>{name}</strong>
          <br />
          Hozirgi email: <strong>{email}</strong>
          <br />
          Hozirgi xabar: <strong>{message}</strong>
          <br />
          Aloqa usuli: <strong>{contactPreference}</strong>
          <br />
          Shartlarga rozilik: <strong>{agreedToTerms ? "Ha" : "Yo'q"}</strong>
          <br />
          Mavzu: <strong>{topic}</strong>
        </p>
      </form>
    </section>
  );
};
export default ContactForm;
