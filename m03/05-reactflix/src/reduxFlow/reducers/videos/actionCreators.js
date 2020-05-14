import { ADD_VIDEO } from "./actions";

import { db } from "~/services/firebase";

// Middleware utilizando thunk
export const registerVideo = ({ id, title }) => async (dispatch) => {
  // Update porque: se o vídeo exister, atualiza. Se não exister, cria!
  await db.ref("videos").child(id).update({ id, title });

  dispatch(addVideo({ id, title }));
};

export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title },
});

// Middleware utilizando thunk
export const fetchVideos = () => (dispatch) => {
  db.ref("videos").on("value", (snapshot) => {
    snapshot.forEach((child) => {
      dispatch(addVideo(child.val()));
    });
  });
};
