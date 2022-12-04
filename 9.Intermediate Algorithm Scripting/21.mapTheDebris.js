function orbitalPeriod(arr) {
  const pi2 = 2 * Math.PI;
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  //return pi2*Math.sqrt(((arr[0][avgAlt]+earthRadius)Math.pow(3))/GM)
  //return Math.round(pi2*Math.sqrt(Math.pow((arr[0].avgAlt+earthRadius),3)/GM))

  return arr.map(({ name, avgAlt }) => ({
    name,
    orbitalPeriod: Math.round(
      pi2 * Math.sqrt(Math.pow(avgAlt + earthRadius, 3) / GM)
    ),
  }));
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);

//*******************Alternate**************************

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM)
    );
    return { name, orbitalPeriod };
  });
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);