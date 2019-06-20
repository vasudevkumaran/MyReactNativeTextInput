import React, {Component} from 'react';
import {View,TextInput,Button,Text} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {btnValue:'Hello',textValue:''};
  }

  onTextValueChange = (text) => this.setState({textValue:text});

  onTextValueChange(text){
    this.setState({textValue:text});
  }

  onBtnPressed = () => this.setState({btnValue:'Button Pressed'})

  render(){
    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TextInput placeholder="Enter something here" value={this.state.textValue} 
      style={{width:200,height:40,borderWidth:1,borderColor:'green',borderRadius:4,margin:5}}
      onChangeText={this.onTextValueChange}
      />
      <Text style={{margin:5}}>{this.state.textValue}</Text>
      <Button style={{margin:5}} title="Press it" onPress={this.onBtnPressed}/>
      <Text style={{margin:5}}>{() => this.setState({btnValue:'Button Pressed'})}</Text>
    </View>
  }
}