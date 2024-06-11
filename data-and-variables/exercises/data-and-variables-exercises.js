// Declare and assign the variables below
spaceShuttleName = "Determination";
shuttleSpeedMPH = 17500;
distanceToMarsKM = 225000000;
distanceToMoonKM = 384400;
milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeedMPH);
console.log(typeof distanceToMarsKM);
console.log(typeof distanceToMoonKM);
console.log(typeof milesPerKilometer);

// Calculate a space mission below
milesToMars = distanceToMarsKM * milesPerKilometer;
//console.log(milesToMars);
hoursToMars = milesToMars/shuttleSpeedMPH;
//console.log(hoursToMars);
daysToMars = hoursToMars/24;
//console.log(daysToMars);
// Print the results of the space mission calculations below
console.log(`${spaceShuttleName} will take ${daysToMars} days to reach Mars.`);

// Calculate a trip to the moon below
milesToMoon = distanceToMoonKM * milesPerKilometer;
hoursToMoon = milesToMoon/shuttleSpeedMPH;
daysToMoon = hoursToMoon/24;
//console.log(milesToMoon);
//console.log(hoursToMoon);
//console.log(daysToMoon);

// Print the results of the trip to the moon below
console.log(`${spaceShuttleName} will take ${daysToMoon} days to reach the Moon.`);