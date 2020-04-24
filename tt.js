import React, { Component } from 'react';
import { View } from 'react-native';
import Select from 'react-native-select-plus';

class SelectExample extends Component {
  constructor(props)
  {
    super(props)
    this.state = { value: null };

  this.items = [
      { key: 1, section: true, label: "Fruits" },
      { key: 2, label: "Red Apples" },
      { key: 3, label: "Cherries" },
      { key: 4, label: "Cranberries" },
      { key: 5, label: "Pink Grapefruit" },
      { key: 6, label: "Raspberries" },
      { key: 7, section: true, label: "Vegetables" },
      { key: 8, label: "Beets" },
      { key: 9, label: "Red Peppers" },
      { key: 10, label: "Radishes" },
      { key: 11, label: "Radicchio" },
      { key: 12, label: "Red Onions" },
      { key: 13, label: "Red Potatoes" },
      { key: 14, label: "Rhubarb" },
      { key: 15, label: "Tomatoes" }
    ];
  }

  onSelectedItemsChange = (key, value) => {
    this.setState({ value: value });
  };

  render() {
    const { value } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Select
          data={this.items}
          width={250}
          placeholder="Select a value ..."
          onSelect={this.onSelectedItemsChange.bind(this)}
          data={data}
          search={true}
        />
        <View>
          {this.state.value}
        </View>
      </View>
    );
  }
}