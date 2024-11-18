import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row align-center">
          <div className="footer-col logo-section">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-col social-section">
            <div className="social-icon">
              <a href="#">
                <div className="social-icon-circle">
                  <img src={navIcon1} alt="Icon" />
                </div>
              </a>
              <a href="#">
                <div className="social-icon-circle">
                  <img src={navIcon2} alt="Icon" />
                </div>
              </a>
              <a href="#">
                <div className="social-icon-circle">
                  <img src={navIcon3} alt="Icon" />
                </div>
              </a>
            </div>

            <p>Designed by Sam C &copy;</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
