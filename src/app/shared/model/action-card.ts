export class ActionCard {
    icon: string = "";
    url: string = "";
    title: string = "";
    pageTarget: string = "";
    color: string = "";
    constructor(color: string,icon: string, url: string, title: string, pageTarget: string) {
        this.icon = icon;
        this.url = url;
        this.title = title;
        this.pageTarget = pageTarget;
        this.color = color;
    }
}
