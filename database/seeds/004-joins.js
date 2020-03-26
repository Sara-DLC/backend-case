exports.seed = function(knex) {
  return knex('joins').insert([
        {case_id: 1, agency_id: 1},
        {case_id: 2, agency_id: 2},
        {case_id: 3, agency_id: 3},
      ]);
};
