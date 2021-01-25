import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  createTrainee: async (parent, args, context) => {
    const { payload: { email, name, password } } = args;
    const { dataSources: { traineeAPI } } = context;
    const addedTrainee = await traineeAPI.createTrainee({ email, name, password });
    const addedTraineeData = JSON.stringify(addedTrainee.data);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: addedTrainee.data });
    return addedTraineeData;
  },
  updateTrainee: async (parent, args, context) => {
    const {
      payload: {
        email, name, id, role, password
      }
    } = args;
    const { dataSources: { traineeAPI } } = context;
    const updatedTrainee = await traineeAPI.updateTrainee({
      id, name, email, role, password
    });
    const updatedTraineeData = JSON.stringify(updatedTrainee.data);
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updatedTrainee.data });
    return updatedTraineeData;
  },
  deleteTrainee: async (parent, args, context) => {
    const {
      payload: { id }
    } = args;
    const { dataSources: { traineeAPI } } = context;
    const deletedID = await traineeAPI.deleteTrainee(id);
    const deletedTraineeData = JSON.stringify(deletedID);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedTraineeData });
    return deletedTraineeData;
  }
};
