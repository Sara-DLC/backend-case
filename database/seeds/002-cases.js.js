exports.seed = function(knex) {
  return knex('cases').insert([
        {id: 1, full_name: 'Case1', phone: '(402) 981-6298', email: 'case1@gmail.com', street_address: '342 Milky Way St.', zip_code: '45672', city: 'Omaha', state: 'NE'},
        {id: 2, full_name: 'Case2', phone: '(402) 835-9318', email: 'case2@gmail.com', street_address: '941 some blvd.', zip_code: '68201', city: 'Omaha', state: 'NE'},
        {id: 3, full_name: 'Case3', phone: '(402) 234-8502', email: 'case3@gmail.com', street_address: '7862 some St.', zip_code: '89423', city: 'Omaha', state: 'NE'},
      ]);
};
