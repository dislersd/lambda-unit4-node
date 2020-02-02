const Hobbits = require("./hobbitsModel");
const db = require("../data/dbConfig");

describe("hobbits model", () => {
  describe("insert", () => {
    it("should add the new hobbit to the db", async () => {
      // call insert passing a hobbit
      await Hobbits.insert({ name: "sam" });
      // open the db and see the hobbit is there
      const hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(4);
    });
  });
  describe("get", () => {
    it("should get all hobits from the db", async () => {
      const hobbits = await Hobbits.getAll();
      expect(hobbits).toHaveLength(4);
    });
  });
});
