# JumbleGym
You've done the hard part: you woke up early, dragged yourself to the gym. You stand in front of the equipment wondering, "Now what?" JumbleGym is here to help!

JumbleGym is a community-driven fitness application that automatically generates science-based, balanced strength workouts based on user specifications.

![Alt ](/screenshots/PageInteraction.gif?raw=true "Page Interaction")

## Why JumbleGym?
One of the most important concepts in modern fitness is muscle confusion: in order see any benefits of exercise, we must change up the way we stimulate the muscle. Otherwise, we plateau.

In other words, if you're bored of your routine, so are your muscles.

JumbleGym adds an element of chance to your regimen that keeps the body guessing and keeps the muscles growing.

## Table of Contents
1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Development](#Development)
4. [Screenshots](#Screenshots)

## Usage
> Example URL: ```http://localhost:3000```

When you have your PostgreSQL server up and running, run the ```schema.sql``` located in ```/db``` from your ```psql``` shell. Then run the following in a terminal window:

```sh
node db/datageneration.js
```

This will seed your PostgreSQL DB with a starter set of exercises, to which users can add.

When your MongoDB server is also running, run the following commands in separate terminal windows:

```sh
npm start
npm run build
```

Direct your browser to ```http://localhost:3000```, and you will access the JumbleGym homepage.

## Requirements
- Node v12.18.1
  - https://nodejs.org/
- PostgreSQL v12.4
  - https://www.postgresql.org/
- MongoDB v4.2.8
  - http://www.mongodb.com
- Mongoose v5.10.5
  - http://www.mongoosejs.com

## Development

### Installing Dependencies
From within this repository's root directory, run the following:
```sh
npm install
```

## Screenshots

### JumbleGym

![Alt ](/screenshots/landing.png?raw=true "JumbleGym View")

### Full Body Workout Template (Partial)

![Alt ](/screenshots/FullBodyWorkout1.png?raw=true "Full Body Workout (Partial)")

### Saved Templates

![Alt ](/screenshots/SavedTemplates.png?raw=true "Saved Templates")

### Submit An Exercise

![Alt ](/screenshots/SubmitAnExercise.png?raw=true "Submit An Exercise")