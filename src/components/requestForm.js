import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Grid } from "react-mdl";

class RequestForm extends Component {
  state = {
    email: {
      recipient: "insurancenovo@gmail.com",
      sender: "",
      firstname: "",
      lastname: "",
      insurancetype: "",
      subject: "Request for Insurance Information",
      message: ""
    }
  };

  sendEmail = () => {
    const { email } = this.state;
    fetch(
      `http://www.novoins.com/send-email?recipient=${email.recipient}&sender=${
        email.sender
      }&topic=${email.subject}&text= Hi my name is ${email.firstname} ${
        email.lastname
      } I am interested in learning more about your ${
        email.insurancetype
      } options. Additional Information: ${email.message} Thank you, ${
        email.firstname
      }`
    ) //query string url
      .catch(err => console.error(err));
  };

  render() {
    const { email } = this.state;
    return (
      <div className="form-body">
        <Grid className="formStyled">
          <Form onSubmit={this.sendEmail}>
            <h2> Interested? Send us an Email</h2>
            <hr />

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email.sender}
                onChange={e =>
                  this.setState({ email: { ...email, sender: e.target.value } })
                }
                placeholder="Enter email"
              />
              <Form.Text className="text-bold">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={email.firstname}
                  onChange={e =>
                    this.setState({
                      email: { ...email, firstname: e.target.value }
                    })
                  }
                  placeholder="Enter First Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={email.lastname}
                  onChange={e =>
                    this.setState({
                      email: { ...email, lastname: e.target.value }
                    })
                  }
                  placeholder="Enter Last Name"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formInsurance">
                <Form.Label>What Insurance are you interested in?</Form.Label>
                <Form.Control
                  type="text"
                  value={email.insurancetype}
                  onChange={e =>
                    this.setState({
                      email: { ...email, insurancetype: e.target.value }
                    })
                  }
                  placeholder="ie. Auto, Health, Etc..."
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formText">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  value={email.message}
                  onChange={e =>
                    this.setState({
                      email: { ...email, message: e.target.value }
                    })
                  }
                  rows="3"
                  placeholder="Put everthing else here! Questions, Concerns, etc."
                />
              </Form.Group>
            </Form.Row>

            <Button variant="secondary" type="submit" value="Submit">
              Send your request!
            </Button>
          </Form>
        </Grid>
      </div>
    );
  }
}
export default RequestForm;
