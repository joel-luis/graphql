import { RESTDataSource } from 'apollo-datasource-rest'
import { api } from '../lib/api'
import { makeUserDataLoader } from './dataloader'

export class UsersApi extends RESTDataSource {
  private dataLoader: any
  constructor() {
    super()
    this.baseURL = `${api}/users/`
    this.dataLoader = makeUserDataLoader(this.getUsers.bind(this))
  }

  async getUsers(urlParams = {}) {
    return this.get('', urlParams, {
      cacheOptions: { ttl: 60 },
    })
  }

  async getUser(id) {
    return this.get(id, undefined, { cacheOptions: { ttl: 60 } })
  }
}
