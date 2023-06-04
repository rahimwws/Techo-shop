import React from 'react'
import { Slider } from '../components/Slider'
import "./../scss/home.scss"
export const Home = () => {
  // console.log(process.env.API);
  return (
    <div>
      <main>
      <section className="home">
        <Slider />
      </section>

      <section className="catalog">
        <div className="catalog-text">
          <h2>Shop our latest offers and categories</h2>
        </div>
        <div className="catalog-container">
          <div className="catalog-item laptop">
            <h3>True Laptop Solution</h3>
            <a>Laptops</a>
            <img src="/img/laptop.png" alt="" />
          </div>
          <div className="catalog-item watch">
            <h3>True Laptop Solution</h3>
            <a>Watches</a>
            <img src="/img/watch.png" alt="" />
          </div>
          <div className="catalog-item phone">
            <h3>True Laptop Solution</h3>
            <a>Iphones</a>
            <img src="/img/iphone.png" alt="" />
          </div>
          <div className="catalog-item tab">
            <h3>True Laptop Solution</h3>
            <a>Tabs</a>
            <img src="/img/ipad.png" alt="" />
          </div>
        </div>
      </section>

      <section className="products">
        <h2>Save on our most selled items.</h2>
        <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        <div className="product-container">
          <div className="product">
            <a href="">
              <img src="./img/IMAGE (2).png" alt="" />
              <h3>MacBook Pro 13</h3>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              </p>
              <span>$ 1,200.00 USD</span>
            </a>
          </div>
          <div className="product">
            <a href="">
              <img src="./img/IMAGE (3).png" alt="" />
              <h3>MacBook Pro 13</h3>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              </p>
              <span>$ 1,200.00 USD</span>
            </a>
          </div>
          <div className="product">
            <a href="">
              <img src="./img/IMAGE (4).png" alt="" />
              <h3>MacBook Pro 13</h3>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              </p>
              <span>$ 1,200.00 USD</span>
            </a>
          </div>
          <div className="product">
            <a href="">
              <img src="./img/IMAGE (5).png" alt="" />
              <h3>MacBook Pro 13</h3>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              </p>
              <span>$ 1,200.00 USD</span>
            </a>
          </div>
        </div>
      </section>

      <section className="best-products">
        <h2>See the best around here</h2>
        <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        <div className="best-container">
          <div className="best-item">
            <p>Smart light bulb pack</p>
            <h3>Latest and gratest</h3>
            <button>Explore</button>
            <img src="/img/IMAGE (6).png" alt="" />
          </div>
          <div className="best-item">
            <p>Smart light bulb pack</p>
            <h3>Latest and gratest</h3>
            <button>Explore</button>
            <img src="/img/IMAGE (7).png" alt="" />
          </div>
          <div className="best-item">
            <p>Smart light bulb pack</p>
            <h3>Latest and gratest</h3>
            <button>Explore</button>
            <img src="/img/IMAGE (8).png" alt="" />
          </div>
        </div>
      </section>

      <section className="FAQ">
        <div className="Faq">
          <h1>Frequently Asked Questions</h1>
          <details>
            <summary>How do I create accordion?</summary>
            <div>The tags details andsummary have you covered.</div>
          </details>
          <details>
            <summary>How do I create accordion?</summary>
            <div>The tags details andsummary have you covered.</div>
          </details>
          <details>
            <summary>How do I create accordion?</summary>
            <div>The tags details andsummary have you covered.</div>
          </details>
          <details>
            <summary>How do I create accordion?</summary>
            <div>The tags details andsummary have you covered.</div>
          </details>
          <details>
            <summary>How do I create accordion?</summary>
            <div>The tags details andsummary have you covered.</div>
          </details>
        </div>
      </section>

      <section className="gifts">
        <h2>Never miss a thing</h2>
        <p>
          Sign up for texts to be notified about our best offers on the perfect
          gifts.
        </p>
        <img src="./img/IMAGE (7).png" alt="" />
        <div className="gifts-inputs">
          <input type="text" placeholder="Your email" />
          <button>Sign up</button>
        </div>
      </section>
    </main>
    </div>
  )
}
