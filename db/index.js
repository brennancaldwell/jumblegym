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

const insert = (obj) => {
  return new Promise((resolve, reject) => {
    let query;
    let options;
    if (obj.target === 'upper' || obj.target === 'legs') {
      query = `INSERT INTO ${obj.target} (name, chain, side) VALUES ($1, $2, $3)`;
      options = [obj.name, obj.chain, obj.side];
    } else if (obj.target === 'biceps' || obj.target === 'triceps' || obj.target === 'shoulders') {
      query = `INSERT INTO ${obj.target} (name, side) VALUES ($1, $2)`;
      options = [obj.name, obj.side];
    } else if (obj.target === 'abs') {
      query =  `INSERT INTO ${obj.target} (name, chain) VALUES ($1, $2)`;
      options = [obj.name, obj.chain];
    }
    db.query(query, options)
      .then((success) => resolve(success))
      .catch((err) => reject(err));
  })
};

module.exports = {
  fullBody,
  insert,
}