export default {
    move(state,{ start,end }) {
        let data = state.content.mainContent.splice(start,1);
        state.content.mainContent.splice(end,0,data[0]);
    },
    changeStyle(state,payload) {
        state.style = { ...state.style, ...payload }
    }
}
