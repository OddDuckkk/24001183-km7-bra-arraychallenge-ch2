function filterCarByAvailability(cars) {
  
  console.log(cars);

  /* Initializing array to contain filter's results  */
  const result = [];

  /* For loop for every car in cars */
  for (let i=0; i<cars.length; i++) {
    /* Filter selection for every car with attribute available = true */
    if (cars[i].available)
    {
      result.push(cars[i]);
    }
  }

  return result;
}