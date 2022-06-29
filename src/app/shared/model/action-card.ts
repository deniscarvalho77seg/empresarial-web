export class ActionCard {
    icon: string = "";
    url: string = "";
    title: string = "";
    color: string = "";
    constructor(color: string,icon: string, url: string, title: string) {
        this.icon = icon;
        this.url = url;
        this.title = title;
        this.color = color;
    }
}
