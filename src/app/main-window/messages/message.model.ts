export class Message {
  logo: string;
  name: string;
  content: string;
  lastUpdate: Date;

  constructor(logo: string, name: string, content: string, lastUpdate: Date) {
    this.logo = logo;
    this.name = name;
    this.content = content;
    this.lastUpdate = lastUpdate;
  }
}
