export class Task {
  constructor (
    public id: number,
    public title: string,
    public state: boolean,
    public created_at: string
  ) { }
}

export class ApiTask {
  constructor (
    public id: number,
    public title: string,
    public state: boolean,
    public section: number,
    public created_at: string
  ) { }
}