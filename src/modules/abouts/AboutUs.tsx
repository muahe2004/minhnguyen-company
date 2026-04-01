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

      </div>
    </section>
  )
}
