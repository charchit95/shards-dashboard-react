import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button,
  CardHeader,
  Alert
} from "shards-react";
import { formatPost } from "../../utils/formatter";

const LoginForm = () => {

  const [loginData, setloginData] = useState({
    code: 1,
    email: "",
    password: ""
  });

  const [alert, setAlert] = useState({
    show: false,
    theme: "warning",
    text: ""
  });

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const obj = formatPost(loginData);
    const { data } = await axios.post("http://localhost/delhiSports/api/superuser/verify/", obj);
    // console.log(data);
    if (data.response) {
      setAlert({ show: true, theme: "success", text: "Login Successful!" });
    } else {
      setAlert({ show: true, theme: "warning", text: "ERROR!! Please try again :(" });
    }
    setTimeout(() => {
      setAlert({ show: false, text: "" });
      if (data.response) {
        history.push("/home");
      }
    }, 2000);
  };

  const handleChange = e => {
    const val = e.target.value;
    const name = e.target.name;
    setloginData({ ...loginData, [name]: val });
  };

  return (
    <>
      {alert.show &&
        <Alert theme={alert.theme} fade={true}>
          {alert.text}
        </Alert>
      }
      <CardHeader className="border-bottom">
        <h6 className="m-0">Login</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>

                <FormGroup>
                  <label htmlFor="feEmailAddress">Email</label>
                  <FormInput id="feEmailAddress" type="email" name="email" placeholder="Email" onChange={handleChange} value={loginData.email} />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="fePassword">Password</label>
                  <FormInput id="fePassword" type="password" name="password" placeholder="Password" onChange={handleChange} value={loginData.password} />
                </FormGroup>

                <Button type="submit">Sign In</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </>
  )
};

export default LoginForm;
