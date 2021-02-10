import user from '../../service/user.js';

export default {
  getAllTrainees: async (parent, args, context) => {
    const { payload: { skip, limit, sort, search } } = args;
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getTrainees({skip, limit, sort, search});
    return response;
  },
  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  }
};
