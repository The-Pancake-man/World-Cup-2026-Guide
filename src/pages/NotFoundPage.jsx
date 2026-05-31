import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <section className="page">
      <p className="eyebrow">404</p>
      <h1>Page Not Found</h1>
      <p className="page-description">
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="primary-link">
        Back to Home
      </Link>
    </section>
  )
}

export default NotFoundPage