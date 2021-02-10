import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  createTrainee: async (parent, args, context) => {
    const { payload: { name, email, role, password } } = args;
    const { dataSources: { traineeAPI }} = context;
    const addedTrainee = await traineeAPI.createTrainee({ name, email, role, password });
    const addedTraineeData = JSON.stringify(addedTrainee.data);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: addedTraineeData });
    return addedTrainee;
  },
  updateTrainee: async (parent, args, context) => {
    const { payload } = args;
    const { dataSources: { traineeAPI } } = context;
    const updatedTrainee = await traineeAPI.updateTrainee({ ...payload });
    const updatedTraineeData = JSON.stringify(updatedTrainee.data);
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updatedTraineeData });
    return updatedTrainee;
  },
  deleteTrainee: async (parent, args, context) => {
    console.log('1111');
    const {
      payload: { id }
    } = args;
    const { dataSources: { traineeAPI } } = context;
    const deletedID = await traineeAPI.deleteTrainee(id);
    const deletedTraineeData = JSON.stringify(deletedID);
    console.log('deleted ==', deletedID);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedTraineeData });
    return deletedID;
  }
};
