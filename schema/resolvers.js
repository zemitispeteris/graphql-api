const { userList } = require("../mock-data");

const resolvers = {
  Query: {
    users() {
      return userList;
    },
  },
};

module.exports = { resolvers };
