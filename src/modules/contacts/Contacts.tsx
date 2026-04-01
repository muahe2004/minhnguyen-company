import Button from '../../components/Button'
import InputLabel from '../../components/InputLabel'
import Input from '../../components/styles/Input'
import './contact.css'

export default function Contacts() {
  return (
    <section className="about-us__contact" id="contact">
      <div className="container">
        <div className="about-us__contact-panel">
          <div className="about-us__contact-visual">
            <div className="about-us__contact-visual-overlay" />
            <div className="about-us__contact-copy">
              <h2 className="about-us__contact-title">Contact Us</h2>
              <p className="about-us__contact-text">
                You can reach us anytime via
                <a href="mailto:contact@seta-international.vn">contact@seta-international.vn</a>
              </p>
            </div>
          </div>

          <form className="about-us__contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="about-us__contact-field">
              <InputLabel htmlFor="full-name" required>
                Full Name
              </InputLabel>
              <Input id="full-name" type="text" placeholder="Your Full Name" />
            </div>

            <div className="about-us__contact-field">
              <InputLabel htmlFor="phone-number">Phone Number</InputLabel>
              <Input id="phone-number" type="tel" placeholder="Your Phone Number" />
            </div>

            <div className="about-us__contact-field">
              <InputLabel htmlFor="email" required>
                Email
              </InputLabel>
              <Input id="email" type="email" placeholder="Your Email" />
            </div>

            <div className="about-us__contact-field">
              <InputLabel htmlFor="company">Company</InputLabel>
              <Input id="company" type="text" placeholder="Your Company" />
            </div>

            <div className="about-us__contact-field about-us__contact-field--full">
              <InputLabel htmlFor="message">Message</InputLabel>
              <textarea id="message" rows={5} placeholder="Leave us a message..." />
            </div>

            <Button className="about-us__contact-submit" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
