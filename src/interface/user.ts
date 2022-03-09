


export interface IUser {

  _id: string,
  name: string,
  uid: string,
  email: string,
  avatar: string,
  createdAt: Date,
  updatedAt: Date

}

export const defaultUser  = {
  _id: '',
  name: '',
  uid: '',
  email: '',
  avatar: '',
  createdAt: new Date,
  updatedAt: new Date
}
