export class Activity {
  logo: string;
  name: string;
  action: string;
  content: string;
  lastUpdate: Date;

  constructor(logo: string, name: string, action: string, content: string, lastUpdate: Date) {
    this.logo = logo;
    this.name = name;
    this.action = action;
    this.content = content;
    this.lastUpdate = lastUpdate;
  }
}
