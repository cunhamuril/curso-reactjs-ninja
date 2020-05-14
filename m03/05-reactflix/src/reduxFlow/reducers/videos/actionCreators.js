import { ADD_VIDEO } from "./actions";

import { db } from "../../../services/firebase";

// Middleware ou thunk
export const registerVideo = ({ id, title }) => async (dispatch) => {
  console.log("cadastrando video...");

  // Update porque: se o vídeo exister, atualiza. Se não exister, cria!
  await db.ref("videos").child(id).update({ id, title });

  console.log("video cadastrado!");
  dispatch(addVideo({ id, title }));
};

export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title },
});
