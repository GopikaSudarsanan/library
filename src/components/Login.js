import React, { Component } from "react";
import { Image, TextInput } from "react-native";
import TimerMixin from 'react-timer-mixin';
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from "native-base";
import styles from "./styles";

const validate = values => {
  const error = {};
  error.email = "";
  error.password = "";
  var ema = values.email;
  var pw = values.password;
  if (values.email === undefined) {
    ema = "";
  }
     if (values.password === undefined) {
     pw = "";
   }
       if (ema.length < 8 && ema !== "") {
       error.email = "too short";
     }
        if (!ema.includes("@") && ema !== "") {
        error.email = "@ not included";
      }



  if (pw.length > 12) {
    error.password = "max 11 characters";
  }
      if (pw.length < 5 && pw.length > 0) {
      error.password = "Weak";
     }
  return error;
};

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.renderInput = this.renderInput.bind(this);
  }

  renderInput({
    input,
    label,
    type,
    meta: { touched, error, warning },
    inputProps
  }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Icon active name={input.name === "email" ? "person" : "unlock"} />
        <Input
          placeholder={input.name === "email" ? "EMAIL" : "PASSWORD"}
          {...input}
        />
        {hasError
          ? <Item style={{ borderColor: "transparent" }}>
              <Icon active style={{ color: "red", marginTop: 5 }} name="bug" />
              <Text style={{ fontSize: 15, color: "red" }}>{error}</Text>
            </Item>
          : <Text />}
      </Item>
    );
  }
  render() {

    return (
      <Container>
        <View style={styles.container}>
          <Content>
              <View style={styles.bg}>
                <Text>{this.state.label}</Text>
                <TextInput
                name="email"
                placeholder="Username"
                {...this.renderInput}
                onChangeText={(text) => this.setState({email:text})} />
                <TextInput
                placeholder="Password"
                secureTextEntry={true}
                name="password"
                {...this.renderInput}
                onChangeText={(text) => this.setState({password:text})} />
                <Button
                  style={styles.btn}
                >
                  <Text>Login</Text>
                </Button>
              </View>
          </Content>
        </View>
      </Container>
    );
  }
}

export default Login;
