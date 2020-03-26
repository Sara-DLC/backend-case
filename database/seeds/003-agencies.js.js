exports.seed = function(knex) {
  return knex('agency').insert([
        {id: 1, full_name: 'Agency1', business_phone: '(402) 981-6298', business_email: 'Agency1@gmail.com', street_address: '342 Milky Way St.', zip_code: '45672', city: 'Omaha', state: 'NE'},
        {id: 2, full_name: 'Agency2', business_phone: '(402) 835-9318', business_email: 'Agency2@gmail.com', street_address: '941 some blvd.', zip_code: '68201', city: 'Omaha', state: 'NE'},
        {id: 3, full_name: 'Agency3', business_phone: '(402) 234-8502', business_email: 'Agency3@gmail.com', street_address: '7862 some St.', zip_code: '89423', city: 'Omaha', state: 'NE'},
      ]);
};
