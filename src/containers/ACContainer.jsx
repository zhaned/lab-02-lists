import React, { Component } from 'react';
import VillagerList from '../components/villagers/VillagerList';
import { findVillagers } from '../services/animalCrossingApi';

export default class ACContainer extends Component {
  state = {
    loading: true,
    villagers: []
  }

  async componentDidMount() {
    const villagers = await findVillagers();
    this.setState({
      villagers,
      loading: false
    });
  }

  render() {
    const { loading, villagers } = this.state;

    if(loading) return <h1>Gathering Villagers...</h1>
    return <VillagerList villagers={villagers} />
  }
}