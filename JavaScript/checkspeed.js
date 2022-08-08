/*
Speed limit = 70
At least 5 over the speed limit => 1 point
At 12 points => license suspended
*/

function checkSpeed(speed) {
  const speedLimit = 70;
  const pointsPerKm = 5;
  let points = 0;

  if (speed < speedLimit + 5) return 'Ok';
  points = Math.floor((speed - speedLimit) / pointsPerKm);
  if (points >= 12) return 'License Suspended';
  return points;
}

console.log(checkSpeed(96));
