import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu
} from "react-mdl";

class Insurance extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return [
        this.getAutoRowOne(),
        this.getAutoRowTwo(),
        this.getAutoRowThree()
      ];
    } else if (this.state.activeTab === 1) {
      return (
        <div class="projects-grid">
          {/* AAA */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://radiocms-images.us1.eldarioncloud.com/resize/750/https://storage.googleapis.com/media.mwcradio.com/mimesis/2017-01/11/LibertyMutual.jpg) center / cover"
              }}
            />
            <CardText>Liberty Mutual Fire Insurance...</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                /* onclick={sendToForm}*/
              >
                Liberty Mutual Fire insurance
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>Health Offerings coming soon!</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>Life Offerings coming soon!</h1>
        </div>
      );
    }
  }

  getAutoRowOne() {
    return (
      <div className="projects-grid">
        {/* AAA */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://img.purch.com/r/520x520/aHR0cHM6Ly93d3cudG9wdGVucmV2aWV3cy5jb20vaS9wZHAvMzkxMTljZWUyOTBhOGJjYTY1OTRjOTY2MzU2MmFkNTcuanBn) center / cover"
            }}
          />
          <CardText>American Automobile Association...</CardText>
          <CardActions border>
            <Button
              colored
              target="_blank"
              /* onclick={sendToForm}*/
            >
              AAA Insurance
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>

        {/* Auto-Owners */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://ewscripps.brightspotcdn.com/dims4/default/5206bea/2147483647/strip/true/crop/480x270+0+105/resize/1280x720!/quality/90/?url=http%3A%2F%2Fmediaassets.fox47news.com%2Fphoto%2F2017%2F06%2F14%2F19029577_1535461036493681_3664939592789778201_n_1497470480377_61186723_ver1.0_640_480.jpg) center / cover"
            }}
          />
          <CardText>Auto-Owners Insurance...</CardText>
          <CardActions border>
            <Button colored target="_blank">
              Auto-Owners Insurance
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
        {/* Dairyland */}

        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://insurifycdn.com/images/carrier/brand/dairyland.png) center / cover"
            }}
          />
          <CardText>Dairyland Insurance .....</CardText>
          <CardActions border>
            <Button colored target="_blank">
              Dairyland Insurance
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </div>
    );
  }

  getAutoRowTwo() {
    return (
      <div className="projects-grid">
        {/* Kemper */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://media.consumeraffairs.com/files/cache/logos/kemper-logo_widget_logo.png) center / cover"
            }}
          />
          <CardText>Kemper Insurance...</CardText>
          <CardActions border>
            <Button
              colored
              target="_blank"
              /* onclick={sendToForm}*/
            >
              Kemper Insurance
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>

        {/* Pekin */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(http://www.tncinsurance.com/images/carriers/pekin.png) center / cover"
            }}
          />
          <CardText>Pekin Insurance...</CardText>
          <CardActions border>
            <Button colored target="_blank">
              Pekin Insurance
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
        {/* Progressive */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://www.progressive.com/Content/images/DomainProgressive/shared/share-opengraph-1200.png) center / cover"
            }}
          />
          <CardText>Progressive Insurance .....</CardText>
          <CardActions border>
            <Button
              colored
              href="https://www.progressive.com/auto/"
              target="_blank"
            >
              Progressive Auto
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </div>
    );
  }

  getAutoRowThree() {
    return (
      <div className="projects-grid">
        {/* State Auto */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://www.expertinsurancereviews.com/wp-content/uploads/2014/03/stateauto300.jpg) center / cover"
            }}
          />
          <CardText>State Auto Insurance...</CardText>
          <CardActions border>
            <Button
              colored
              target="_blank"
              /* onclick={sendToForm}*/
            >
              State Auto Insurance
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>

        {/* Pekin */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(http://greeneniesen.com/images/viking-insurance.jpg) center / cover"
            }}
          />
          <CardText> Viking Insurance Company of WI ...</CardText>
          <CardActions border>
            <Button colored target="_blank">
              Viking Insurance Company of WI
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </div>
    );
  }

  render() {
    return (
      <div className="insurance-body">
        <div>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Auto</Tab>
            <Tab>Home</Tab>
            <Tab>Health</Tab>
            <Tab>Life</Tab>
          </Tabs>
        </div>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
          <Cell col={12}>
            <div className="content>" />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Insurance;
