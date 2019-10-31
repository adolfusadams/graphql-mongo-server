import { Cat } from "./models/Cat";
import { petOwner } from "./models/petOwner";

export const resolvers = {
  Query: {
    hello: () => "hi",
    cats: () => Cat.find(),
    owners: () => Owner.find()
  },
  Mutation: {
    createCat: async (_, { name, breed, gender }) => {
      const kitty = new Cat({ name, breed, gender });
      await kitty.save();
      return kitty;
    },
    createPetOwner: async (_, { name, pet }) => {
      const owner = new petOwner({ name, pet });
      await owner.save();
      return owner;
    },
    updateCat: async (_, { name, breed, gender }) => {
      const kitty = updateOne({ name, breed, gender });
      await kitty.finOne();
      return kitty;
    },
    updatetOwner: async (_, { name, pet }) => {
      const owner = updateOne({ name, pet });
      await owner.findOne();
      return owner;
  },
  deleteCat: async (_, { name, breed, gender }) => {
    const kitty = deleteOne({ name, breed, gender });
    await kitty.finOne();
    return kitty;
  },
  deleteOwner: async (_, { name, pet }) => {
    const owner = deleteOne({ name, pet });
    await owner.findOne();
    return owner;
}
}
};
