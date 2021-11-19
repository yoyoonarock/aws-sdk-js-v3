const { Before } = require("cucumber");

Before({ tags: "@databasemigrationservice" }, function (scenario, callback) {
  const { DatabaseMigrationService } = require("../../../clients/client-database-migration-service");
  this.service = new DatabaseMigrationService({});
  callback();
});
