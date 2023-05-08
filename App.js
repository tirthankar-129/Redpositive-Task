


import React from 'react'
import {StyleSheet, View, Button, TextInput,Text} from 'react-native'

class App extends React. Component {
    constructor() {
        super ();
        this.state = {
            name: '',
            nameError: '',
            mobile: '',
            email: '' ,
            emailError:'',
            message: '',
        }
    }
    submit ()
    {
        let rjx=/^[a-zA-z]+$/;
        let isValid=rjx.test(this.setState.name)
        console.warn(isValid)
        if(!isValid)
        {
          this.setState({nameError:"Name must be in Alphabatic"})
      }
      else
      {
        this.setState({nameError:""})
      }
    }
    emailValidator()
    {
      if(this.state.email=="")
      {
        this.setState({emailError:"Email Can't be empty"})
      }
      else
      {
        this.setState({emailError:""})
      }
    }
    render () {
    return (<View style= {{margin:20,marginTop: 100}}>
    <TextInput
    placeholder="enter Name"
    onChangeText={(text) => { this.setState({ name: text }) }}
    style={{ borderWidth: 2,height:50, borderColor: 'skyblue', margin: 20 }}
    />
    <Text style={{color:'red',marginLeft:20,marginTop:-20}}>{this.state.nameError}</Text>
     <TextInput
    placeholder="enter Mobile No."
    keyboardType="numeric"
    maxLength={10}
    onChangeText={(text) => { this.setState({ mobile: text }) }}
    style={{ borderWidth: 2,height:50, borderColor: 'skyblue', margin: 20 }}
    />
    <TextInput
    placeholder="enter Email"
    onBlur={()=>this.emailValidator()}
    onChangeText={(text) => { this.setState({ email: text }) }}
    style={{ borderWidth: 2,height:50, borderColor: 'skyblue', margin: 20 }}
    />
    <Text style={{color:'red',marginLeft:20,marginTop:-20}}>{this.state.emailError}</Text>
    <TextInput
    placeholder="enter Message"
    onChangeText={(text) => { this.setState({ message: text }) }}
    style={{ borderWidth: 2,height:100, borderColor: 'skyblue', margin: 20 }}
    />
    <Button title="SUBMIT" onPress={()=>{this.submit()}} />
    </View>)
    }
}
export default App
