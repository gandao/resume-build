export default {
  toggleLogin(state) {
    state.isLogin = !state.isLogin
  },
  changeState(state,payload) {
    delete payload.type
    for (var item in payload) {
      state[item] = payload[item]
    }
  }
}
