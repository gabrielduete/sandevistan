import { items } from './Footer.data'

const Footer = () => {
  return (
    <footer>
      Footer
      {items.map(({ name, href }, idx) => {
        return (
          <a href={href} key={idx}>
            {name}
          </a>
        )
      })}
    </footer>
  )
}

export default Footer
