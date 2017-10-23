import React from 'react';

import PhonesList from '../ui/PhonesList';

const phones = [
  {
    name: "Vasya",
    phone: "1234567",
  },
  {
    name: "Petya",
    phone: "2223344",
  },
  {
    name: "Ivan",
    phone: "9089999",
  },
  {
    name: "Ingrit",
    phone: "4433000",
  },
];

class PhonesContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { phones };
  }

  render() {
    const { phones } = this.state;
    return React.createElement(PhonesList, { phones });
  }
}

export default PhonesContainer;
