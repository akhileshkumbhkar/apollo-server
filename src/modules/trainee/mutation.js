import userInstance from '../../service/user';

export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    return userInstance.createUser(user);
  },
  updateTrainee: (parent, args, context) => {
    const {
      id, role, name, email
    } = args;
    return userInstance.updateUser(id, role, name, email);
  },
  deleteTrainee: (parent, args, context) => {
    const { id } = args;
    return userInstance.deleteUser(id);
  }
};
