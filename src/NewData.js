import React, { Component } from 'react';
import { SafeAreaView, ScrollView,TextInput, TouchableHighlight, StyleSheet, Text, View, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-datepicker';
import {Picker, Icon} from 'native-base';


export default class NewData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projectId:'',
      lastName: '',
      firstName: '',
      date: new Date(),
      lastName2 :'',
      firstName2 :'',
      street: '',
      city: '',
      province: '',
      postalCode: '',
      country: '',
      phone: '',
      email: '',
      nationalId: '',
      nationalId2:''
    };

  }

  _inputHandler =()=>{

    if (this.state.projectId == '')
    {
      Alert.alert('Please Select Project Id');
    }
    else
    {
      Alert.alert(this.state.projectId)
    }
  }

  render() {
    console.disableYellowBox = true

    const obj=[{name:"Properties", value:"01"},
               {name:"Health", value:"02"},
               {name:"Education", value:"03"},
               {name:"Business", value:"04"},
               {name:"Government",value:"05"}];

    return (
      <SafeAreaView style={styles.fullarea}>
         <ScrollView style={{flex:1}}>
        <KeyboardAwareScrollView>
          <View style={styles.bodyStyle}>

          <Text style={styles.textcolor}>Registration Form</Text>

          <View style={{width:'90%'}}>
          <Picker  style={styles.input}
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
               
                placeholder="Select Project Id"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.projectId}
                onValueChange={(e) => this.setState({ projectId: e })}
              >
                {obj.map((dd, index)=>{return(

                  <Picker.Item label={dd["name"]} value={dd["value"]}/>
                )} )}
                {/* <Picker.Item label="Properties" value="01" />
                <Picker.Item label="Health" value="02" />
                <Picker.Item label="Education" value="03" />
                <Picker.Item label="Business" value="04" />
                <Picker.Item label="Government" value="05" /> */}
            </Picker></View>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              autoCapitalize='none'
              onChangeText={(text) => this.setState({ lastName: text })}
              value={this.state.lastName}
            />
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={(text) => this.setState({ firstName: text })}
              value={this.state.firstName}
            />

            <View style={styles.bdateInput}>
              <Text style={styles.dateText}>Date of Birth:</Text>
              <DatePicker
                style={{ width: '48%', backgroundColor: 'white' }}
                date={this.state.date} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="Birth Date"
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    right: 0,
                    top: 4,
                    marginRight: 0
                  },
                  dateInput: {
                    marginRight: 36
                  }
                }}
                onDateChange={(date) => { this.setState({ date: date }) }}
              /></View>

              {/* ===second last name and first name== */}

              <TextInput
              style={styles.input}
              placeholder="2nd Last Name"
              autoCapitalize='none'
              onChangeText={(text) => this.setState({ lastName2: text })}
              value={this.state.lastName2}
            />
            <TextInput
              style={styles.input}
              placeholder="2nd First Name"
              onChangeText={(text) => this.setState({ firstName2: text })}
              value={this.state.firstName2}
            />

            <TextInput
              style={styles.input}
              placeholder="Street"
              onChangeText={(text) => this.setState({ street: text })}
              value={this.state.street}
            />
            <TextInput
              style={styles.input}
              placeholder="City"
              onChangeText={(text) => this.setState({ city: text })}
              value={this.state.city}
            />
            <TextInput
              style={styles.input}
              placeholder="Province"
              onChangeText={(text) => this.setState({ province: text })}
              value={this.state.province}
            />
            <View style={styles.postalInput}>
              {/* <Text style={styles.dateText}>Postal Code:</Text> */}
              <TextInput
                style={styles.input }
                placeholder="Postal Code"
                maxLength={6}
                width="45%"
                onChangeText={(text) => this.setState({ postalCode: text })}
                value={this.state.postalCode}
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder="Country"
              onChangeText={(text) => this.setState({ country: text })}
              value={this.state.country}
            />
            <View style={styles.phoneInput}>
              <TextInput
                style={styles.input}
                placeholder="Phone"
                maxLength={10}
                width='45%'
                onChangeText={(text) => this.setState({ phone: text })}
                value={this.state.phone}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
            />

            <TextInput
              style={styles.input}
              placeholder="National Id"
              onChangeText={(text) => this.setState({ nationalId: text })}
              value={this.state.nationalId}
            />

            <TextInput
              style={styles.input}
              placeholder="2nd National Id"
              onChangeText={(text) => this.setState({ nationalId2: text })}
              value={this.state.nationalId2}
            />

            <View style={styles.buttonContainer}>
              <TouchableHighlight onPress={() => this._inputHandler()}
                style={{ backgroundColor: 'blue', height: 45, width: '50%' }} >
                <Text style={styles.text}>Registration</Text>
              </TouchableHighlight>
            </View>

              {/* <TouchableHighlight style={{ backgroundColor: 'blue', borderColor:'black',height: 50, width: '40%' }}
              onPress={() => this._registerHandler()}>
              <Text style={styles.text}>Signup</Text>
            </TouchableHighlight> */}
            
          </View>  
        </KeyboardAwareScrollView>

        </ScrollView>
        
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({

  fullarea: {
    marginTop: 40,
    backgroundColor: '#52b355',
    height: '90%',
    // borderColor: 'black',
    borderWidth: 1
  },

  bodyStyle: {
    flex:1,
    paddingTop: 5,
    // justifyContent: 'space-between',
    alignItems: 'center'
  },

  bdateInput: {
    paddingTop: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width:'90%'
    // alignItems:'' //use flex-start, flex-end ,center to adjust vertical position
  },
  
  postalInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-start',
    width:'90%'

  },

  phoneInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-start',
    width:'90%'

  },

  text: {
    padding: 6,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: "center"
  },

  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 5,
  }
  ,

  textcolor: {
    fontSize: 30,
    fontFamily: "Times New Roman",
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 10

  },

  input: {
    marginTop: 5,
    padding: 10,
    width: '90%',
    height: 40,
    fontSize: 20,
    borderColor: 'blue',
    borderWidth: .5,
    backgroundColor: 'white',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    width: '90%',
  },

})


