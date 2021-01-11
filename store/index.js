export const state = () => ({
  repositories: [],
  repositoryMap: {}
})

export const mutations = {
  repositories(state, repositories) {
    state.repositories = repositories
  },
  repositoryMap(state, repositoryMap) {
    state.repositoryMap = repositoryMap
  }
}

export const actions = {
  loadRepositories({ state, commit }, repositories) {
    const map = {}
    for(let repo of repositories) {
      map[repo.full_name] = repo
    }
    commit('repositories', repositories)
    commit('repositoryMap', map)
  }
}

export const getters = {
  getRepositories: state => {
    return state.repositories
  },
  getRepositoryMap: state => {
    return state.repositoryMap
  }
}