import Data from "../components/Data/whatsappsmileys_de.json"


class DataService {

    private static categories: Array<string>;

    static getCategories(): Array<string> {
        if (this.categories) {
            return this.categories;
        }

        this.categories = new Array<string>();
        Data.map(item => {
                if (this.categories.indexOf(item.category) == -1) {
                    this.categories.push(item.category);
                }
            }
        );
        return this.categories;
    }
};

export default DataService;
