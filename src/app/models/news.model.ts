export class News {
  constructor(
    public title: string,
    public content: string,
    public category: string,
    public date: Date,
    public imgURL: string,
    public alt: string
  ) {}
}
