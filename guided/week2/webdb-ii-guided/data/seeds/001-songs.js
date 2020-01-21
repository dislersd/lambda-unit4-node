exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("songs")
      //.del() Delete will continue to increment keys so if you delete and then create new you will not start from 1
      .truncate() // resets the id (primary key) back to 1
      .then(function() {
        // Inserts seed entries
        return knex("songs").insert([
          { name: "yo", duration: 3600, artist: "bob", favorite: true },
          { name: "hello", duration: 3600, artist: "jim", favorite: false },
          { name: "woah", duration: 3200, artist: "lil j", favorite: true }
        ]);
      })
  );
};
