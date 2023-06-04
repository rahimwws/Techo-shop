import React from 'react'
import "./../scss/components/footer.scss"
export const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/img/logo.png" alt="" />
        <p>
          Sign up for texts to be notified about <br/> our best offers on the perfect
          gifts.
        </p>
      </div>
      <div className="footer-item">
        <h2>All products</h2>
        <ul>
          <li><a href="">all products</a></li>
          <li><a href="">Solutions</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">Support</a></li>
        </ul>
      </div>
      <div className="footer-item">
        <h2>Support</h2>
        <ul>
          <li><a href="">all products</a></li>
          <li><a href="">Solutions</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">Support</a></li>
        </ul>
      </div>
      <div className="footer-item">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="">all products</a></li>
          <li><a href="">Solutions</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">Support</a></li>
        </ul>
      </div>
    </footer>
  )
}
