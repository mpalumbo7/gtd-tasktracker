import axios from 'axios';
import { SELECT_TASK, SELECT_TASK_ERROR } from './actions.types';

export default function selectTask(id) {
  return (dispatch) => {
    axios.get(`/api/tasks/${id}`).then((response) => {
      dispatch({ type: SELECT_TASK, data: response.data });
    }).catch((response) => {
      dispatch({ type: SELECT_TASK_ERROR, error: response.data });
    });
  };
}
