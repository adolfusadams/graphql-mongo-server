import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cat!]!
    owners: [petOwner]!
  }

  type Cat {
    id: ID!
    name: String!
    breed: String!
    gender: String!
  }

  type petOwner {
    id: ID!
    name: String!
    pet: [Cat!]!
  }

  type Mutation {
    createCat(name: String! breed: String! gender: String!): Cat!
    createPetOwner(name: String! pet: String!): petOwner!
    updateCat(name: String! breed: String! gender: String!): Cat!
    updateOwner(name: String! pet: String!): petOwner!
    deleteCat(name: String! breed: String! gender: String!): Cat!
    deleteOwner(name: String! pet: String!): petOwner!
  }
`;
