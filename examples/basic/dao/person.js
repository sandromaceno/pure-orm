const BaseDAO = require('./base');
const Person = require('../bo/person');

/*
 * The person data abstraction for the persistence mechinism.
 */
module.exports = class PersonDAO extends BaseDAO {
  get Bo() {
    return Person;
  }

  getRandom() {
    const query = `
      SELECT ${Person.getSQLSelectClause()}
      FROM person
      ORDER BY random()
      LIMIT 1;
    `;
    return this.one(query);
  }
};
