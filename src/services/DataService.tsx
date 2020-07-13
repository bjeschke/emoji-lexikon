import {Emoji} from "../models/emoji";
import Data from "../components/Data/whatsappsmileys_de.json";
import {plainToClass} from "class-transformer";

export class DataService {

    private emojis: Array<Emoji> = [];

    constructor() {
        Data.map((item: any) => {
            const emoji = plainToClass<Emoji, any>(Emoji, item);
            this.emojis.push(emoji);
        });
    }

    public getEmojsByCategory(category: string): Array<Emoji> {
        const emojisByCatagory = new Array<Emoji>();

        this.emojis.forEach((value: Emoji) => {
            if(value.category === category) {
                emojisByCatagory.push(value);
            }
        });

        return emojisByCatagory;
    }


}
