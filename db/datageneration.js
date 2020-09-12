const pgp = require('pg-promise')();
const db = pgp('postgres://brennancaldwell@localhost:5432/fitRoulette');

const legs = [['Full Deadlift', 'Posterior', 'Double'], ['Dumbbell Swing', 'Posterior', 'Double'], ['Glute Bridge', 'Posterior', 'Double'], ['Deadlift', 'Posterior', 'Double'], ['Barbell Squat', 'Anterior', 'Double'], ['Dumbbell Squat', 'Anterior', 'Double'], ['Deadlift Snatch', 'Posterior', 'Double'], ['Hamstring Curl', 'Posterior', 'Double'], ['Forward Lunge', 'Anterior', 'Single'], ['Reverse Lunge', 'Anterior', 'Single'], ['Curtsey Lunge', 'Anterior', 'Single'], ['Squat Hold', 'Anterior', 'Double'], ['Romananian Deadlift', 'Posterior', 'Double'], ['Barbell Clean', 'Anterior', 'Double'], ['Dumbbell Clean', 'Anterior', 'Double'], ['Squat, Clean, and Press', 'Anterior', 'Double'], ['Bulgarian Split Squat', 'Anterior', 'Single'], ['Walking Lunge', 'Anterior', 'Single'], ['Leg Extension', 'Anterior', 'Double']];

const upper = [['Pull-Up', 'Posterior', 'Double'], ['Bent-Over Row', 'Posterior', 'Double'], ['Alt Bent-Over Row', 'Posterior', 'Single'], ['Eccentric Pull-Up', 'Posterior', 'Double'], ['Eccentric Bent-Over Row', 'Posterior', 'Double'], ['Alt Eccentric Bent-Over Row', 'Posterior', 'Double'], ['Chin-Up', 'Posterior', 'Double'],['Push-Up', 'Anterior', 'Double'], ['Chest Press', 'Anterior', 'Double'], ['Incline Chest Press', 'Anterior', 'Double'], ['Decline Chest Press', 'Anterior', 'Double'], ['Wide Push-Up', 'Anterior', 'Double'], ['Narrow Push-Up', 'Anterior', 'Double'], ['Plyo Push-Up', 'Anterior', 'Double']];

const biceps = [['Barbell Bicep Curl', 'Double'], ['Dumbbell Bicep Curl', 'Double'], ['Single DB Bicep Curl', 'Single'], ['Hammer Curl', 'Double'], ['Single DB Hammer Curl', 'Single'], ['Eccentric Dumbbell Bicep Curl', 'Double'], ['Eccentric Barbell Bicep Curl', 'Double'], ['Barbell Bicep Curl', 'Double'], ['Cable Pulls', 'Double']];

const triceps = [['Dumbbell Tricep Kickback', 'Double'], ['Skull Crushers', 'Double'], ['Cable Pull-Down', 'Double'], ['Barbell Tricep Extensions', 'Double'], ['Dumbbell Tricep Extensions', 'Double'], ['Dips', 'Double'], ['Single Arm Cable Pull-Down', 'Single'], ['Single Arm Tricep Extensions', 'Single'], ['Alt Tricep Kickback', 'Double']];

const shoulders = [['Barbell Military Press', 'Double'], ['Dumbbell Shoulder Press', 'Double'], ['Wide-Arm Shoulder Press', 'Double'], ['Narrow Arm Shoulder Press', 'Double'], ['Corkscrew Shoulder Press', 'Double'], ['Alt Dumbbell Press', 'Single'], ['Eccentric Shoulder Press', 'Double'], ['Wall Stand Push-Up', 'Double'], ['Lateral Raises', 'Double'], ['High Pulls', 'Double']];

const abs = [['Sit-up', 'Anterior'], ['Plank', 'Posterior'], ['Plank Toe Touch', 'Posterior'], ['Bicycles', 'Anterior'], ['Leg Scissors', 'Anterior'], ['Supermans', 'Posterior'], ['Mountain Climbers', 'Double'], ['Oblique Dips', 'Anterior'], ['Spider-mans', 'Posterior']];

function generate() {
  const legsMap = legs.map(exercise => db.query('INSERT INTO legs (name, chain, side) VALUES ($1, $2, $3)', exercise));
  const upperMap = upper.map(exercise => db.query('INSERT INTO upper (name, chain, side) VALUES ($1, $2, $3)', exercise));
  const bicepsMap = biceps.map(exercise => db.query('INSERT INTO biceps (name, side) VALUES ($1, $2)', exercise));
  const tricepsMap = triceps.map(exercise => db.query('INSERT INTO triceps (name, side) VALUES ($1, $2)', exercise));
  const absMap = abs.map(exercise => db.query('INSERT INTO abs (name, chain) VALUES ($1, $2)', exercise));
  Promise.all(legsMap.concat(upperMap).concat(bicepsMap).concat(tricepsMap).concat(absMap))
    .then(() => {
      console.log('Successful seeding of DB');
    })
    .catch((err) => {
      console.log('Error: ', err);
    })
};

function shouldersWhoops() {
  const shouldersMap = shoulders.map(exercise => db.query('INSERT INTO shoulders (name, side) VALUES ($1, $2)', exercise));
  Promise.all(shouldersMap)
    .then(() => console.log('Got the shoulders in there, too'));
}
//generate();

shouldersWhoops();