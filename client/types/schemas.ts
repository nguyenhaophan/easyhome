export type User = {
  _id: string
  firstName: string
  lastName: string
  role: 'ADMIN' | 'MODERATOR' | 'USER'
  email: string
  password?: string
  favLists: Room[]
  properties: string[]
  avatar?: string
  gender?: string
  country?: string
}

export type Room = {
  _id: string
  owner: string
  housingType: string
  surface: number
  rent: number
  availableFrom: Date
  bathroomType: string
  kitchenType: string
  smoking: boolean
  pets: boolean
  furnished: string
  images?: string[]
  description?: string
  address: {
    street: string
    streetNumber: number
    postalCode: string
    municipality: string
  }
}

export type Country = {
  name: {
    common: string
  }
  flags: {
    svg: string
  }
  altSpellings: string[]
}
