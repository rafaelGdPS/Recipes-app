export type Forms_Login = {
  email: string
  password: string
}

export const INITIAL_FORMS: Forms_Login = {
  email: '',
  password: ''
}

export type Forms_Search = {
  search: string
  filter: 'ingredient' | 'name' | 'first_letter'
}

export const INITIAL_FORMS_SEARCH: Forms_Search = {
  search: '',
  filter: 'ingredient'
}