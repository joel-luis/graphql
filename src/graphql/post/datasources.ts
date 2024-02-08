import { RESTDataSource } from 'apollo-datasource-rest'
import { api } from '../lib/api'
import { makePostDataLoader } from './dataloader'

export class PostsApi extends RESTDataSource {
  private dataLoader: any
  constructor() {
    super()
    this.baseURL = `${api}/posts/`
    this.dataLoader = makePostDataLoader(this.getPosts.bind(this))
  }

  async getPosts(urlParams = {}) {
    return this.get('', urlParams, {
      cacheOptions: { ttl: 60 },
    })
  }

  async getPost(id) {
    return this.get(id, undefined, { cacheOptions: { ttl: 60 } })
  }
}
