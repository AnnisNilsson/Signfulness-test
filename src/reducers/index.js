export default function videos(state = { videos: [] }, action) {
  if (action.type === 'FETCH_VIDEOS_SUCCEEDED') {
    return { videos: action.payload.videos };
  }
  return state;
}
