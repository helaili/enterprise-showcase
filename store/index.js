import Fuse from 'fuse.js'

export const state = () => ({
  repositories: [],
  repositoryMap: {},
  searchEngine: null
})

export const mutations = {
  repositories (state, repositories) {
    state.repositories = repositories
  },
  repositoryMap (state, repositoryMap) {
    state.repositoryMap = repositoryMap
  },
  searchEngine (state, searchEngine) {
    state.searchEngine = searchEngine
  }
}

export const actions = {
  loadRepositories ({ commit }, repositories) {
    const searchOptions = {
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      keys: [
        'full_name',
        'description',
        'topics'
      ]
    }
    const searchEngine = new Fuse(repositories, searchOptions)
    const map = {}
    for (const repo of repositories) {
      map[repo.full_name] = repo
    }
    commit('repositories', repositories)
    commit('repositoryMap', map)
    commit('searchEngine', searchEngine)
  }
}

export const getters = {
  getRepositories: (state) => {
    return state.repositories
  },
  getRepositoryMap: (state) => {
    return state.repositoryMap
  },
  getSearchEngine: (state) => {
    return state.searchEngine
  }
}
