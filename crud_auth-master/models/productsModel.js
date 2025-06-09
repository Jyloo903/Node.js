const db = require('../config/db');

const Produk = {
  create: (data, callback) => {
    const sql = 'INSERT INTO products SET ?';
    db.query(sql, data, callback);
  },
  findByUserId: (user_id, callback) => {
    const sql = 'SELECT * FROM products WHERE user_id = ?';
    db.query(sql, [user_id], callback);
  },
  findAll: (callback) => {
    db.query('SELECT * FROM products', callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE products SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM products WHERE id = ?', [id], callback);
  }
};

module.exports = Produk;