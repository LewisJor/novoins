import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Jim Chavez</h2>
            <img
              id="jChavezPhoto"
              src="data:image/jpeg;base64,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"
              alt="JimChavez"
              style={{ height: "300px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <List className="contact-list">
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Roboto Condensed" }}
                >
                  <i class="fas fa-phone-square" aria-hidden="true" />
                  (608) 956-8988
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Roboto Condensed" }}
                >
                  <i class="fas fa-envelope-square" aria-hidden="true" />
                  NovoInsurance@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Roboto Condensed" }}
                >
                  <i id="addressI" class="fas fa-address-card" />
                  100 State St, Madison WI, 53716
                </ListItemContent>{" "}
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
