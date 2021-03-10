import { Link } from "react-router-dom";


const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <div className="pageNotFound__content">
        <h4 className="pageNotFound__status">404</h4>
        <p className="pageNotFound__text">We are sorry but the page you are looking for cannot be found.</p>
        <Link to="/" className="pageNotFound__link">
          <h3 className="pageNotFound__backHome">Back to home</h3>
        </Link>
      </div>
    </div>
  )
}


export default PageNotFound;