export class Event {
  constructor(
    public title: string,
    public type: string,
    public category: string,
    public date: Date,
    public timeFrom: Date,
    public timeTo: Date,
    public address: string,
    public imgURL: string,
    public alt: string,
    public link: string
  ) {}
}
