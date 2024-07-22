const userTypeDef = `#graphql

    type User {
        id: ID!
        username: String!
        email: String!
        # savedProducts: [Product]
        createdAt: String
    }

    type Query {
        getUsers: [User]
        user(id: ID!): User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): AuthPayload
        # saveProduct(userId: ID!, productId: ID!): User
    }

    type AuthPayload {
        token: String
        user: User
    }
`;

export default userTypeDef;
