const db = require('../config/db');

const top_customers = {
  create: (data, callback) => {
    const sql = 'INSERT INTO top_customers SET ?';
    db.query(sql, data, callback);
  },
  findByUserId: (user_id, callback) => {
    const sql = 'SELECT * FROM top_customers WHERE user_id = ?';
    db.query(sql, [user_id], callback);
  },
  findAll: (callback) => {
    db.query('SELECT * FROM top_customers', callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM top_customers WHERE id = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE top_customers SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM top_customers WHERE id = ?', [id], callback);
  }
};

module.exports = top_customers;