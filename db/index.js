const pgp = require('pg-promise')();
const db = pgp('postgres://brennancaldwell@localhost:5432/fitRoulette');

const fullBody = () => {
  return new Promise((resolve, reject)  => {
    const template = {
      type: 'Full Body',
      lower: {
        anterior: [],
        posterior: [],
      },
      upper: {
        anterior: [],
        posterior: [],
        shoulders: [],
        triceps: [],
        biceps: [],
      },
      abs: {
        anterior: [],
        posterior: [],
      },
    }
    db.query('SELECT * FROM legs WHERE chain = $1 and side = $2', ['Anterior', 'Double'])
      .then((data) => {
        console.log(data);
        console.log(data[Math.floor(Math.random() * data.length)]);
        template.lower.anterior.push(data[Math.floor(Math.random() * data.length)])
        db.query('SELECT * FROM legs WHERE chain = $1 and side = $2', ['Anterior', 'Single'])
        .then((data) => {
          template.lower.anterior.push(data[Math.floor(Math.random() * data.length)]);
          db.query('SELECT * FROM legs WHERE chain = $1 and side = $2', ['Posterior', 'Double'])
          .then((data) => {
            template.lower.posterior.push(data[Math.floor(Math.random() * data.length)]);
            db.query('SELECT * FROM legs WHERE chain = $1 and side = $2', ['Posterior', 'Single'])
            .then((data) => {
              template.lower.posterior.push(data[Math.floor(Math.random() * data.length)]);
              db.query('SELECT * FROM upper WHERE chain = $1 and side = $2', ['Anterior', 'Double'])
              .then((data) => {
                template.upper.anterior.push(data[Math.floor(Math.random() * data.length)]);
                db.query('SELECT * FROM shoulders')
                  .then((data) => {
                    template.upper.shoulders.push(data[Math.floor(Math.random() * data.length)]);
                    db.query('SELECT * FROM upper WHERE chain = $1 and side = $2', ['Posterior', 'Double'])
                      .then((data) => {
                        template.upper.posterior.push(data[Math.floor(Math.random() * data.length)]);
                        db.query('SELECT * FROM triceps')
                          .then((data) => {
                            template.upper.triceps.push(data[Math.floor(Math.random() * data.length)]);
                            db.query('SELECT * FROM biceps')
                              .then((data) => {
                                template.upper.biceps.push(data[Math.floor(Math.random() * data.length)]);
                                db.query('SELECT * FROM abs WHERE chain = $1', ['Anterior'])
                                  .then((data) => {
                                    template.abs.anterior.push(data[Math.floor(Math.random() * data.length)]);
                                    db.query('SELECT * FROM abs WHERE chain = $1', ['Posterior'])
                                      .then((data) => {
                                        template.abs.posterior.push(data[Math.floor(Math.random() * data.length)]);
                                        resolve(template);
                                      })
                                  })
                              })
                          })
                      })
                  })
              })
            })
          })
        })
      })
      .catch((err) => reject(err));
  })
}

module.exports = {
  fullBody,
}