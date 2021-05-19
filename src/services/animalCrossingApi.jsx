import { array, object } from "prop-types";

const findVillagers = async () => {
  const response = await fetch('https://ac-vill.herokuapp.com/villagers');
  const results = await response.json();

  return results.map((villager) => ({
    id: villager._id,
    name: villager.name,
    quote: villager.quote,
    image: villager.image,
  }));
};

const findVillager = async (id) => {
  if(!id) id = '5f5fb4bbbfd05c2aed82e460';
  const response = await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`);
  const results = await response.json();
  const array = [];
  array.push(results);

  return array.map((villager) => ({
    id: villager._id,
    name: villager.name,
    quote: villager.quote,
    image: villager.image,
  }));
};

export {
  findVillagers, 
  findVillager
}