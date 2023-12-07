import { Carousel, Input } from "antd";
import React from "react";
import Icon, { SearchOutlined } from "@ant-design/icons";

function Hero() {
  return (
    <>
      <div className="search-bar">
        <Input
          size="large"
          placeholder="What are you looking for..."
          suffix={
            <div className="search-icon">
              <Icon component={SearchOutlined} style={{ color: "#fff" }} />
            </div>
          }
        />
      </div>
      <div className="hero-content">
        <Carousel autoplay dots={{ className: "carousel-dots" }}>
          <div className="item-card">
            <div className="card-outer-wrapper">
              <div className="card-inner-wrapper">
                <div className="card-title">Item 1</div>
                <div className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, odio modi! Veritatis corporis culpa repellat inventore
                  necessitatibus, id voluptas dolores vero, itaque corrupti
                  illum cumque iusto. Debitis magni eligendi eum minus? Rerum
                  modi fugit, illum assumenda earum quis pariatur ad quasi vitae
                  ab alias eos nihil, nulla est aliquam commodi?
                </div>
              </div>
              <div className="card-inner-wrapper">
                <div className="card-img">
                  <img
                    src="https://th.bing.com/th/id/R.417c47d70d8731044e774b63e1ea3a0a?rik=P522r8RA%2bGbgzw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fgraphic-design-transparent%2fgraphic-design-transparent-13.png&ehk=Jmb9Ds1GNbSGwZA4wI2EMtCZ6wwvLmCv1AGN%2baH6QxI%3d&risl=&pid=ImgRaw&r=0"
                    alt="hero image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="item-card">
            <div className="card-outer-wrapper">
              <div className="card-inner-wrapper">
                <div className="card-title">Item 2</div>
                <div className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, odio modi! Veritatis corporis culpa repellat inventore
                  necessitatibus, id voluptas dolores vero, itaque corrupti
                  illum cumque iusto. Debitis magni eligendi eum minus? Rerum
                  modi fugit, illum assumenda earum quis pariatur ad quasi vitae
                  ab alias eos nihil, nulla est aliquam commodi?
                </div>
              </div>
              <div className="card-inner-wrapper">
                <div className="card-img">
                  <img
                    src="https://th.bing.com/th/id/R.417c47d70d8731044e774b63e1ea3a0a?rik=P522r8RA%2bGbgzw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fgraphic-design-transparent%2fgraphic-design-transparent-13.png&ehk=Jmb9Ds1GNbSGwZA4wI2EMtCZ6wwvLmCv1AGN%2baH6QxI%3d&risl=&pid=ImgRaw&r=0"
                    alt="hero image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="item-card">
            <div className="card-outer-wrapper">
              <div className="card-inner-wrapper">
                <div className="card-title">Item 3</div>
                <div className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, odio modi! Veritatis corporis culpa repellat inventore
                  necessitatibus, id voluptas dolores vero, itaque corrupti
                  illum cumque iusto. Debitis magni eligendi eum minus? Rerum
                  modi fugit, illum assumenda earum quis pariatur ad quasi vitae
                  ab alias eos nihil, nulla est aliquam commodi?
                </div>
              </div>
              <div className="card-inner-wrapper">
                <div className="card-img">
                  <img
                    src="https://th.bing.com/th/id/R.417c47d70d8731044e774b63e1ea3a0a?rik=P522r8RA%2bGbgzw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fgraphic-design-transparent%2fgraphic-design-transparent-13.png&ehk=Jmb9Ds1GNbSGwZA4wI2EMtCZ6wwvLmCv1AGN%2baH6QxI%3d&risl=&pid=ImgRaw&r=0"
                    alt="hero image"
                  />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
