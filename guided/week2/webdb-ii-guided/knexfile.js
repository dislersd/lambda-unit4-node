// Update with your config settings.

module.exports = {
  development: {
    // client answers: which type of database? (sqlite, postgres, mysql, oracle)?
    client: "sqlite3", // the db driver
    // the rest will depend on the type of database
    // connection could be a string or an object
    connection: {
      filename: "./data/produce.db3"
    },
    useNullAsDefault: true, // ONLY needed for SQLite
    migrations: {
      directory: "./data/migrations"
    }
  },
  
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
