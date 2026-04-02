import './customerCard.css'

type CustomerCardProps = {
  name: string
  logo: string
  alt: string
  showName?: boolean
}

export default function CustomerCard({
  name,
  logo,
  alt,
  showName = true,
}: CustomerCardProps) {
  return (
    <article className="customer-card">
      <div className="customer-card__logo">
        <img className="customer-card__image" src={logo} alt={alt} />
      </div>
      {showName ? <p className="customer-card__name">{name}</p> : null}
    </article>
  )
}
