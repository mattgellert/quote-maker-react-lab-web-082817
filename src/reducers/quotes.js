export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);
    case "REMOVE_QUOTE":
      let remove_idx = 0;

      state.forEach((quote, i) => {
        quote.id === action.quoteId ? remove_idx = i : null
      });

      return [
        ...state.slice(0, remove_idx),
        ...state.slice(remove_idx + 1)
      ]
    case "UPVOTE_QUOTE":
      let upvote_idx = 0;

      state.forEach((quote, i) => {
        quote.id === action.quoteId ? upvote_idx = i : null
      });

      return [
        ...state.slice(0, upvote_idx),
        {
          ...state[upvote_idx],
          votes: state[upvote_idx].votes + 1
        },
        ...state.slice(upvote_idx + 1)
      ]
    case "DOWNVOTE_QUOTE":
      let downvote_idx = 0;

      state.forEach((quote, i) => {
        quote.id === action.quoteId ? downvote_idx = i : null
      });

      return [
        ...state.slice(0, downvote_idx),
        {
          ...state[downvote_idx],
          votes: state[downvote_idx].votes === 0 ? 0 : state[downvote_idx].votes - 1
        },
        ...state.slice(downvote_idx + 1)
      ]
    default:
      return state;
  }
};
