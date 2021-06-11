import axios from 'axios';

export const fetchVideosSucceeded = (videos) => {
  return {
    type: 'FETCH_VIDEOS_SUCCEEDED',
    payload: {
      videos,
    },
  };
};

export default function fetchVideos(dispatch) {
  return () => {
    axios
      .get(
        'https://signsforsilence-project-default-rtdb.europe-west1.firebasedatabase.app/Meditation.json'
      )
      .then((res) => {
        const videos = [];
        for (let key in res.data) {
          videos.push({ ...res.data[key], id: key });
        }
        dispatch(fetchVideosSucceeded(videos));
      })
      .catch((err) => console.error(err.message));
  };
}
