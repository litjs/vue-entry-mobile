export const state = {
  test: '11'
}

export const actions = {
  testAction ({commit}, top) {
    console.log('222')
    commit({type: 'testMutation', top: top})
  }
}

export const mutations = {
  testMutation (state, payload) {
    console.log(state)
    state.test = payload.top
  }
}