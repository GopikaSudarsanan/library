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

class Logincomp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      label: "",
      name:"",
      email: "",
      password: ""
    };
  }

  render() {
 alert("Entered");
    return (
        <View>
              <Button><Text>hello</Text></Button>
        </View>
    );
  }
}

export default Logincomp;
