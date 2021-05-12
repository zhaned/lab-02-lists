import React, { Component } from 'react';
import VillagerList from '../components/villagers/VillagerList';
import { findVillager } from '../services/animalCrossingApi';

export default class VillagerContainer extends Component {
  state = {
    loading: true,
    villager: []
  }

  async componentDidMount() {
    const villager = await findVillager('5f5fb4bbbfd05c2aed82e460');
    this.setState({
      villager,
      loading: false
    });
  }

  render() {
    const { loading, villager } = this.state;
    
    if(loading) return <h1>Gathering Villager...</h1>
    return <VillagerList villagers={villager} />
  }
}