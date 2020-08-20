import { post } from './fetch'
import * as req from './request'

export const login = (data: req.LoginReq) => {
    return post<req.LoginReq>('/login', data)
}