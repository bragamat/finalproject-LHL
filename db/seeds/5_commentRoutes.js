
exports.seed = function(knex, Promise) {
return knex('comments').del()
    .then(function () {
      return Promise.all([
        knex('comments').insert({id: 1, comment: 'Wow, is it working??', user_id: 1, route_id: 3}),
        knex('comments').insert({id: 2, comment: 'wow, I dont think so', user_id: 2, route_id: 2}),
        knex('comments').insert({id: 3, comment: 'yeah... sooooooooooo', user_id: 3, route_id: 3}),
        knex('comments').insert({id: 4, comment: 'commenting just to check', user_id: 3, route_id: 2}),
        knex('comments').insert({id: 5, comment: 'adding this comment to route 1', user_id: 3, route_id: 1}),
      ])
    }).catch((err)=>{
      console.log("from the 6_commentsRoutes", err)

    })
}
