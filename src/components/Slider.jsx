import React from "react";
import "./../scss/components/slider.scss";
import { Link } from "react-router-dom";
export const Slider = () => {
  return (
    <div id="slider">
      <input type="radio" name="slider" id="slide1" checked />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
      <div id="slides">
        <div id="overflow">
          <div class="inner">
            <div class="slide slide_1">
              <div class="slide-content">
                <h2>The new phones are here take a look.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Scelerisque in est dui, aliquam, tempor. Faucibus morbi
                  turpis.
                </p>
                <Link to="/iphones">
                  <button>Explore</button>
                </Link>
              </div>
              <img src="./img/IMAGE (1).png" alt="" width="600px" />
            </div>
            <div class="slide slide_2">
              <div class="slide-content">
                <h2>The new phones are here take a look.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Scelerisque in est dui, aliquam, tempor. Faucibus morbi
                  turpis.
                </p>
                <button>Explore</button>
              </div>
              <img src="./img/IMAGE (1).png" alt="" width="600px" />
            </div>
            <div class="slide slide_3">
              <div class="slide-content">
                <h2>The new phones are here take a look.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Scelerisque in est dui, aliquam, tempor. Faucibus morbi
                  turpis.
                </p>
                <button>Explore</button>
              </div>
              <img src="./img/IMAGE (1).png" alt="" width="600px" />
            </div>
          </div>
        </div>
      </div>
      <div id="controls">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
      </div>
      <div id="bullets">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
      </div>
    </div>
  );
};
