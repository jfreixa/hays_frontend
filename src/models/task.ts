export class Task {
  constructor (
    public id: number,
    public title: string,
    public state: boolean,
    public section: number
  ) { }
}

export class ApiTask {
  constructor (
    public id: number,
    public title: string,
    public state: boolean,
    public section: number
  ) { }
}