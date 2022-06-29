export class ActionCard {
    style: string = "";
    icon: string = "";
    url: string = "";
    title: string = "";
    pageTarget: string = "";
    color: string = "";
    constructor(style: string, color: string,icon: string, url: string, title: string, pageTarget: string) {
        this.style = style;
        this.icon = icon;
        this.url = url;
        this.title = title;
        this.pageTarget = pageTarget;
        this.color = color;
    }
}
