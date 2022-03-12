

export interface ICustomRequest {
  method: string,
  url: string,
  body: any
}

export interface ICustomAuthRequest {
  method: string,
  url: string,
  token: string,
  body: any
}

export const customRequest = (props: ICustomRequest) => {
  
  const _url = `http://localhost:1337/api/${props.url}`
  const request = new Request(_url, {
    method: props.method,
    headers: { 'Content-Type': 'application/json' },
    body: props.body
  })

  return request
}

export const customAuthRequest = (props: ICustomAuthRequest) => {
  const _url = `http://localhost:1337/${props.url}`
  const request = new Request(_url, {
    method: props.method,
    headers: { 'Context-Type' : 'application/json', 'token': props.token },
    body: props.body
  })

  return request
}
