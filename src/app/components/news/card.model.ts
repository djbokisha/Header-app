export class Card {
    public imagePath: string;
    public title: string;
    public description: string;

    constructor(imagePath:string,title:string, desc: string ,) {
        this.imagePath = imagePath;
        this.title = title;
        this.description = desc;
        
    }
}