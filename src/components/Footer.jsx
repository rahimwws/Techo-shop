import React from 'react'
import "./../scss/components/footer.scss"
import { langText } from '../utils/lang'
import { AppContext } from '../App';
export const Footer = () => {
  const { index } = React.useContext(AppContext);
  return (
    <footer>
      <div className="footer-logo">
        <img src="/img/logo.png" alt="" />
        <p>
          {langText["quote"][index]}
        </p>
      </div>
      <div className="footer-item">
        <h2> {langText["Sup"][index]} </h2>
        <ul>
          <li><a href="">{langText['nav-link-1'][index]}</a></li>
          <li><a href="">{langText['nav-link-2'][index]}</a></li>
          <li><a href="">{langText['nav-link-3'][index]}</a></li>
          <li><a href="">{langText['nav-link-4'][index]}</a></li>
        </ul>
      </div>
      <div className="footer-item">
        <h2>{langText["Sup-1"][index]}</h2>
        <ul>
          <li><a href="">{langText["sub-2"][index]}</a></li>
          <li><a href="tel:+99364673333">+99364673333</a></li>
          <li><a href="https://www.instagram.com/almapro183" target="_blank">@amapro183</a></li>

        </ul>
      </div>
    </footer>
  )
}
