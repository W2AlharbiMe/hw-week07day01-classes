class RunTracker {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.runs = [];
  }

  addRun(date, time, distance) {
    this.runs.push({ date, time, distance });
  }

  totalDistance() {
    return this.runs.reduce((acc, cur) => acc.distance + cur.distance);
  }

  // old school
  // longestDistance() {
  //     return this.runs.reduce((acc, cur) => acc.distance > cur.distance ? acc.distance: cur.distance)
  // }

  // new school 😂
  longestDistance() {
    return this.runs.reduce((acc, cur) => Math.max(acc.distance, cur.distance));
  }

  totalTime() {
    return this.runs.reduce((acc, cur) => acc.time + cur.time);
  }

  averageSpeed() {
    const totalDistance = this.totalDistance();
    const totalTime = this.totalTime();

    return totalTime / totalDistance;
  }
}

const runner = new RunTracker("Abdullah", "w2.alharbi.me@gmail.com");

runner.addRun("2017-01-01", 10, 30);
runner.addRun("2017-01-02", 5, 20);

const totalDistance = runner.totalDistance(); // 50 meters

const longestDistance = runner.longestDistance(); // 30 meters

const averageSpeed = runner.averageSpeed(); // 0.3 meters per second

console.log(`${totalDistance} meters`);
console.log(`${longestDistance} meters`);
console.log(`${averageSpeed} meters per second`);


