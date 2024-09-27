function sortCarByYearDescendingly(cars) {
  // Clone array to avoid side effects
  const result = [...cars];
  
  /* Variables initialiation */
  let carsLength = result.length;
  let swapped, i, j, temp;

  /* for loop for each car in cars */
  for (i = 0; i < carsLength - 1; i++) {
    /* Initialize swapped as false */ 
    swapped = false;
    /* Inner for loop for swapping */
    for (j= 0; j < carsLength - i - 1; j++) {
      /* Smaller than (<) operator to get descending output*/
      if (result[j].year < result[j+1].year) {
        /* Swap cars if year is smaller than the next car's year */
        temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }
  return result;
}
