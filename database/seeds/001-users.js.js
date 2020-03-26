exports.seed = function(knex) {
  return knex('users').insert([
        {id: 1, full_name: 'user1', phone: '(402) 576-3456', email: 'user1@gmail.com'},
        {id: 2, full_name: 'user2', phone: '(402) 678-1254', email: 'user2@yahoo.com'},
        {id: 3, full_name: 'user3', phone: '(402) 341-8740', email: 'user3@aol.com'},
      ]);
};
