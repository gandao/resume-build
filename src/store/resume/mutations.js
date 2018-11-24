export default {
    move(state,{ start,end }) {
        let data = state.content.mainContent.splice(start,1);
        state.content.mainContent.splice(end,0,data[0]);
    },
    changeStyle(state,payload) {
        state.style = { ...state.style, ...payload }
    },
    remove(state,{ text }) {
        for (var i = 0; i < state.content.mainContent.length;i++) {
            if (state.content.mainContent[i].text === text) {
                state.content.mainContent.splice(i,1);
                return;
            }
        }

        for (i = 0; i < state.content.otherContent.length;i++) {
            if (state.content.otherContent[i].text === text) {
                state.content.otherContent.splice(i,1);
                return;
            }
        }
    },
    addModule(state,{ data }) {
         if (data.text === '个人技能' || data.text === '个人标签') {
             state.content.otherContent.push(data);
         } else {
            state.content.mainContent.push(data);
         }
    },
    changeScrollTop(state) {
        state.scrollTop = !state.scrollTop;
    }
}
