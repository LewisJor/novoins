import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Carousel } from "react-bootstrap";

class LandingPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              id="novoLogo"
              src="../imgs/novologo.jpg"
              alt="logo"
              className="logo-img"
            />
            <div className="banner-text">
              <h1>Welcome to Novo Insurance</h1>
              <hr />

              <p> Auto | Home | Health | Life | Powersports </p>
            </div>
            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://Linkedin.com/company/novo-insurance-agency"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-linkedin" aria-hidden="true" />
              </a>
              {/* Twitter */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-facebook-square" aria-hidden="true" />
              </a>
              {/* Facebook */}
              <a
                href="https://instagram.com/insurancenovo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="pickNovoCell">
              <h4 style={{ fontWeight: "Bold" }}>
                Why should you let novo help?
              </h4>
              <hr style={{ borderTop: "3px dotted white" }} />
              <ul>
                <li>You are not dealing with an insurance company</li>
                <br />
                <li>
                  We will be personally responsible for helping you find the
                  best deal among many insurance companies
                </li>
                <br />
                <li>
                  All the stress that can come from dealing with insurance can
                  be relieved. We will do all of that for you!
                </li>
              </ul>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="displayInsuranceCell">
              <h4 style={{ fontWeight: "Bold" }}>
                Companies that we have relationships with!
              </h4>
              <hr style={{ borderTop: "3px dotted white" }} />

              <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
              >
                <Carousel.Item>
                  <img
                    height="285px"
                    width="370px"
                    src="https://ewscripps.brightspotcdn.com/dims4/default/5206bea/2147483647/strip/true/crop/480x270+0+105/resize/1280x720!/quality/90/?url=http%3A%2F%2Fmediaassets.fox47news.com%2Fphoto%2F2017%2F06%2F14%2F19029577_1535461036493681_3664939592789778201_n_1497470480377_61186723_ver1.0_640_480.jpg"
                    alt="Auto Owners Insurance"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height="285px"
                    width="370px"
                    src="https://insurifycdn.com/images/carrier/brand/dairyland.png"
                    alt="Dairyland Insurance"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height="285px"
                    width="370px"
                    src="https://media.consumeraffairs.com/files/cache/logos/kemper-logo_widget_logo.png"
                    alt="Kemper Insurance"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height="285px"
                    width="370px"
                    src="https://www.progressive.com/Content/images/DomainProgressive/shared/share-opengraph-1200.png"
                    alt="Progressive Insurance"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height="285px"
                    width="370px"
                    src="https://img.purch.com/r/520x520/aHR0cHM6Ly93d3cudG9wdGVucmV2aWV3cy5jb20vaS9wZHAvMzkxMTljZWUyOTBhOGJjYTY1OTRjOTY2MzU2MmFkNTcuanBn"
                    alt="AAA Insurance"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height="285px"
                    width="370px"
                    src="http://greeneniesen.com/images/viking-insurance.jpg"
                    alt="Viking Insurance"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
