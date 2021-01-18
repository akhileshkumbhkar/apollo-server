import userInstance from '../../service/user';
import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    const addedUser = userInstance.createUser(user);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: addedUser });
    return addedUser;
  },
  updateTrainee: (parent, args, context) => {
    const {
      id, role, name, email
    } = args;
    const updatedUser = userInstance.updateUser(id, role, name, email);
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updatedUser });
    return updatedUser;
  },
  deleteTrainee: (parent, args, context) => {
    const { id } = args;
    const deletedID = userInstance.deleteUser(id);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedID });
    return deletedID;
  }
};
