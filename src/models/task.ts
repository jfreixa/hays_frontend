export class Task {
  constructor (
    public id: number,
    public title: string,
    public state: boolean,
    public section: number
  ) { }
}