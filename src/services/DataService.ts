import Data from "../resources/whatsappsmileys_de.json"
import { Emoji } from '../models/emoji';
import { plainToClass } from 'class-transformer';


class DataService {

    private static categories: Array<string>;
    private static emojisByCategory: Map<string, Array<Emoji>>;


    static getCategories(): Array<string> {
        if (this.categories) {
            return this.categories;
        }

        this.categories = new Array<string>();
        Data.map(item => {
                if (this.categories.indexOf(item.category) === -1) {
                    this.categories.push(item.category);
                }
            }
        );
        return this.categories;
    }

    static getEmojisByCategory(category: string): Array<Emoji> {
        if (!this.emojisByCategory) {
            this.emojisByCategory = new Map<string, Array<Emoji>>();
        }
        if (this.emojisByCategory.has(category)) {
            return this.emojisByCategory.get(category) as Array<Emoji>;
        }

        const emojisByCategory = new Array<Emoji>();
        Data.map((item: any) => {
            if(item.category === category) {
                const emoji = plainToClass<Emoji, any>(Emoji, item);
                emojisByCategory.push(emoji);
            }
        });
        this.emojisByCategory.set(category, emojisByCategory);

        return emojisByCategory;
    }
}

export default DataService;
