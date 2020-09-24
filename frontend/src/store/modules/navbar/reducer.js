export default function navbar(state = {selected:1}, action){
  switch (action.type) {
    case "@navbar/TOGGLE_MENU":
      return {
        ...state,
        selected: action.selected,
      };
      default:
        return state;
  }
}