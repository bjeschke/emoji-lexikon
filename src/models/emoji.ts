import {isNullOrUndefined} from "util";

export class Emoji {
    id?: string;
    category!: string;
    htmlcode!: string;
    title!: string;
    text!: string;
    image!: string;
    alt?: string;
    unicode!: string;
    position!: string;

}
