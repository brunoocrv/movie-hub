export class ResponseError extends Error {
  response
  constructor(message: string, res: Response) {
    super(message)
    this.response = res
  }
}
