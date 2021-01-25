import user from '../../service/user';

export default {

  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  },
  getAllTrainees: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getTrainees();
    return response.record;
  }
};
