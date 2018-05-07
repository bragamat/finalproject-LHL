
exports.seed = function(knex, Promise) {
  return knex('pins').del()
    .then(function () {
      return Promise.all([
        knex('pins').insert({id: 1, description: 'PIN ONE go!', user_id: 1, route_id: 1}),
        knex('pins').insert({id: 2, description: 'second PIN ', user_id: 3, route_id: 2}),
        knex('pins').insert({id: 3, description: '3td pin went', user_id: 2, route_id: 3}),
        knex('pins').insert({id: 4, description: '4th pin went', user_id: 3, route_id: 1})
      ]);
    }).catch((err)=>{
      console.log("from the 7_pinsRoutes", err)

    })
};
