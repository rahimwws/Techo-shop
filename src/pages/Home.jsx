import React, { useEffect, useState } from "react";
import { Slider } from "../components/Slider";
import { Link } from "react-router-dom";
import "./../scss/home.scss";
import { ProductSlide } from "../components/Products/ProductSlide";
import ProductImg1 from "../assets/img/iphone 14 on mobile.jpg";
import ProductImg2 from "../assets/img/iphones14.jpg";
import { langText } from "../utils/lang";
import { AppContext } from "../App";
import axios from "axios";
export const Home = () => {
  const [products, setProducts] = useState([]);
  const url = "http://192.168.89.13:8000/api/product/";
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [setProducts]);
  let q = 0;
  // console.log(process.env.API);
  const { index } = React.useContext(AppContext);
  return (
    <div>
      <main>
        <section className="home">
          <ProductSlide
            imgMobile={ProductImg1}
            imgDesktop={ProductImg2}
            text="Iphone 14 Pro Max"
            link = "/iphones/"
          />
        </section>
        <Slider />

        <section className="catalog">
          <div className="catalog-text">
            <h2>{langText["mainText"][index]}</h2>
          </div>
          <div className="catalog-container">
            <div className="catalog-item laptop">
              <Link to="/laptop">
                <h3>{langText["laptop"][index]}</h3>
                <a>Laptops</a>
                <img src="/img/laptop.png" alt="" />
              </Link>
            </div>
            <div className="catalog-item watch">
              <Link to="/watch">
                <h3>{langText["watch"][index]}</h3>
                <a>Watches</a>
                <img src="/img/watch.png" alt="" />
              </Link>
            </div>
            <div className="catalog-item phone">
              <Link to="/iphones">
                <h3>{langText["iphone"][index]}</h3>

                <a>Iphones</a>
                <img src="/img/iphone.png" alt="" />
              </Link>
            </div>
            <div className="catalog-item tab">
              <Link to="/ipad">
                <h3>{langText["ipad"][index]}</h3>

                <a>Tabs</a>
                <img src="/img/ipad.png" alt="" />
              </Link>
            </div>
          </div>
        </section>

        <section className="products">
          <h2>{langText["salesMain"][index]}</h2>
          <div className="product-container">
            {products.map((el) => {
              if (el.id == 1 || el.id == 15 || el.id == 8 || el.id == 12) {
                return (
                  <div className="product">
                    <Link to={`/iphones/${el.id}`}>
                      <img src={el.image} alt="" />
                      <h3>{el.name}</h3>
                      <p>Choose your catalog</p>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </section>

        <section className="best-products">
          <h2>{langText["offer"][index]}</h2>
          <div className="best-container">
            <Link to="/watch">
              <div className="best-item">
                <img src="/img/IMAGE (6).png" alt="" />
                <button>{langText["btn"][index]} </button>
              </div>
            </Link>
            <div className="best-item">
              <Link to="/iphones">
                <img src="/img/IMAGE (7).png" alt="" />
                <button>{langText["btn"][index]} </button>
              </Link>
            </div>
            <div className="best-item">
              <Link to="/laptop">
                <img src="/img/IMAGE (8).png" alt="" />
                <button>{langText["btn"][index]} </button>
              </Link>
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
      </main>
    </div>
  );
};
