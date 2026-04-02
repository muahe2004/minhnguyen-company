import CustomerCard from './components/CustomerCard'
import './customers.css'

const customers = [
  {
    name: 'Acecook',
    logo: '/images/acecook.png',
    alt: 'Acecook logo',
  },
  {
    name: 'Big C',
    logo: '/images/bigc.png',
    alt: 'Big C logo',
  },
  {
    name: 'ENV',
    logo: '/images/env.png',
    alt: 'ENV logo',
  },
  {
    name: 'HSBC',
    logo: '/images/hsbc.png',
    alt: 'HSBC logo',
  },
  {
    name: 'Paints',
    logo: '/images/paints.png',
    alt: 'Paints logo',
  },
  {
    name: 'Thien Long',
    logo: '/images/thienLong.png',
    alt: 'Thien Long logo',
  },
  {
    name: 'Minh Nguyen',
    logo: '/images/banner.png',
    alt: 'Minh Nguyen logo',
  },
  {
    name: 'Industrial Partner',
    logo: '/images/banner1.png',
    alt: 'Industrial Partner logo',
  },
  {
    name: 'Warehouse One',
    logo: '/images/banner.png',
    alt: 'Warehouse One logo',
  },
]

export default function Customers() {
  const scrollingCustomers = [...customers, ...customers]

  return (
    <section className="customers-strip" aria-label="Danh sách khách hàng">
      <div className="container customers-strip__inner">
        <p className="customers-strip__label">
          KHACH
          <br />
          HANG
        </p>
        <div className="customers-strip__divider" />

        <div className="customers-strip__marquee">
          <div className="customers-strip__track">
            {scrollingCustomers.map((customer, index) => (
              <CustomerCard
                key={`${customer.name}-${index}`}
                name={customer.name}
                logo={customer.logo}
                alt={customer.alt}
                showName={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
