import User from "../../models/index.js";

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.find();
        console.log(users);
        return users;
      } catch (err) {
        console.error("Error fetching users:", err);
        throw err;
      }
    },
  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      try {
        const user = new User({ username, email, password });
        await user.save();
        return user;
      } catch (err) {
        console.error("Error creating user:", err);
        throw err;
      }
    },
  },
};

export default resolvers;
