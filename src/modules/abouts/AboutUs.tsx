import { useEffect, useState } from 'react'
import './aboutus.css'

const services = [
  {
    code: '01',
    title: 'Lắp đặt',
    description:
      'Thi công lắp đặt hệ thống giá kệ công nghiệp an toàn, đúng kỹ thuật và đúng tiến độ.',
  },
  {
    code: '02',
    title: 'Tháo dỡ',
    description:
      'Tháo dỡ, di dời và sắp xếp lại hệ thống giá kệ theo quy trình gọn gàng, hiệu quả.',
  },
  {
    code: '03',
    title: 'Bảo trì',
    description:
      'Bảo trì định kỳ giúp hệ thống vận hành ổn định, bền vững và tối ưu chi phí sử dụng.',
  },
]

const slides = [
  {
    src: '/images/banner.png',
    alt: 'Minh Nguyen service workspace',
  },
  {
    src: '/images/banner1.png',
    alt: 'Minh Nguyen installation project',
  },
]

const customers = [
  {
    name: 'Minh Nguyen',
    logo: '/logoseta.svg',
    alt: 'Minh Nguyen logo',
  },
  {
    name: 'Warehouse One',
    logo: '/images/banner.png',
    alt: 'Warehouse one placeholder',
  },
  {
    name: 'Industrial Pro',
    logo: '/images/banner1.png',
    alt: 'Industrial pro placeholder',
  },
  {
    name: 'Brand Partner',
    logo: '/images/banner.png',
    alt: 'Brand partner placeholder',
  },
  {
    name: 'Retail Hub',
    logo: '/images/banner1.png',
    alt: 'Retail hub placeholder',
  },
  {
    name: 'Factory Link',
    logo: '/logoseta.svg',
    alt: 'Factory link placeholder',
  },
]

export default function AboutUs() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="about-us" id="about-us">
      <div className="container about-us__inner">
        <div className="about-us__header">
          <h2 className="about-us__title">Các dịch vụ của chúng tôi</h2>
          <p className="about-us__subtitle">
            Chúng tôi cung cấp giải pháp thi công giá kệ công nghiệp, lắp đặt, tháo dỡ
            và bảo trì theo nhu cầu của từng doanh nghiệp.
          </p>
        </div>

        <div className="about-us__gallery">
          <div className="about-us__slider" aria-label="About us slides">
            {slides.map((slide, index) => (
              <div
                className={`about-us__slide ${
                  index === activeSlide ? 'is-active' : ''
                }`}
                key={slide.src}
                aria-hidden={index !== activeSlide}
              >
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="about-us__services">
          {services.map((service) => (
            <article className="about-us__service" key={service.code}>
              {/* <div className="about-us__service-code">{service.code}</div> */}
              <h3 className="about-us__service-title">{service.title}</h3>
              <p className="about-us__service-desc">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="about-us__clients">
          <div className="about-us__clients-header">
            <p className="about-us__clients-kicker">Khách hàng</p>
            <h2 className="about-us__clients-title">Danh sách khách hàng của chúng tôi</h2>
          </div>

          <div className="about-us__clients-grid">
            {customers.map((customer) => (
              <article className="about-us__client-card" key={customer.name}>
                <div className="about-us__client-logo">
                  <img src={customer.logo} alt={customer.alt} />
                </div>
                <p className="about-us__client-name">{customer.name}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-us__contact" id="contact">
          <div className="about-us__contact-panel">
            <div className="about-us__contact-visual">
              <div className="about-us__contact-visual-overlay" />
              <div className="about-us__contact-copy">
                <h2 className="about-us__contact-title">Contact Us</h2>
                <p className="about-us__contact-text">
                  You can reach us anytime via
                  <a href="mailto:contact@seta-international.vn">
                    contact@seta-international.vn
                  </a>
                </p>
              </div>
            </div>

            <form className="about-us__contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="about-us__contact-field">
                <label htmlFor="full-name">Full Name *</label>
                <input id="full-name" type="text" placeholder="Your Full Name" />
              </div>

              <div className="about-us__contact-field">
                <label htmlFor="phone-number">Phone Number</label>
                <input id="phone-number" type="tel" placeholder="Your Phone Number" />
              </div>

              <div className="about-us__contact-field">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" placeholder="Your Email" />
              </div>

              <div className="about-us__contact-field">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" placeholder="Your Company" />
              </div>

              <div className="about-us__contact-field about-us__contact-field--full">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Leave us a message..." />
              </div>

              <button className="about-us__contact-submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
