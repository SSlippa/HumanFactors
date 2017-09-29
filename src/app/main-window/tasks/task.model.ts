export class Task {
  logo: string;
  content: string;
  lastUpdate: Date;

  constructor(logo: string, content: string, lastUpdate: Date) {
    this.logo = logo;
    this.content = content;
    this.lastUpdate = lastUpdate;
  }
}
