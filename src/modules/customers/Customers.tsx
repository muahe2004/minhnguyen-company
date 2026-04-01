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
]

export default function Customers() {
  return (
    <section className="customers">
      <div className="container">
        <div className="customers__header">
          <h2 className="customers__title">Danh sách khách hàng của chúng tôi</h2>
        </div>

        <div className="customers__grid">
          {customers.map((customer) => (
            <article className="customers__card" key={customer.name}>
              <div className="customers__logo">
                <img src={customer.logo} alt={customer.alt} />
              </div>
              <p className="customers__name">{customer.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
