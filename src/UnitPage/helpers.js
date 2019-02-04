const HIGHLIGHTS = [
  'Bike Storage',
  'Cold Storage',
  'Community Events',
  'Conference Room',
  'Dishwasher',
  'Dog Run',
  'Elevator',
  'Entertainment Center',
  'Fitness Center',
  'Fitness Classes',
  'Free Wifi',
  'Game Room',
  'Garage',
  'Garden',
  'Gym',
  'In Home Package Delivery',
  'Laundry',
  'Lounge',
  'Parking',
  'Playroom',
  'Pool',
  'Rentable Party Space',
  'Roof',
  'Storage',
  'Vegetable Garden'
];

export const cleanFeatures = features => {
  const highlights = [];
  const unitFeatures = features.unit && features.unit.split(',');
  const buildingFeatures = features.building && features.building.split(',');

  for (let i = 0; i < HIGHLIGHTS.length; i++) {
    if (unitFeatures && unitFeatures.indexOf(HIGHLIGHTS[i]) > -1) {
      const highlightIndex = unitFeatures.indexOf(HIGHLIGHTS[i]);
      highlights.push(unitFeatures[highlightIndex]);
      unitFeatures.splice(highlightIndex, 1);
    }
    if (buildingFeatures && buildingFeatures.indexOf(HIGHLIGHTS[i]) > -1) {
      const highlightIndex = buildingFeatures.indexOf(HIGHLIGHTS[i]);
      highlights.push(buildingFeatures[highlightIndex]);
      buildingFeatures.splice(highlightIndex, 1);
    }
  }
  return {
    highlights,
    unitFeatures,
    buildingFeatures
  };
};
