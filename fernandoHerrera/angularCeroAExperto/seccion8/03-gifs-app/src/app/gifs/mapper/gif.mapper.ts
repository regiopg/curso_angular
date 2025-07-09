import { Gif } from "../interfaces/gif.interface";
import { GihpyItem } from "../interfaces/giphy.interfaces";

export class GifMapper{
    static mapGiphyItemTogif(item:GihpyItem):Gif{
        return{
            id:item.id,
            title: item.title,
            url:item.images.original.url
        }
    }

    static mapGihpyItemsToGifArray(items:GihpyItem[]):Gif[]{
        return items.map(this.mapGiphyItemTogif)
    }

}
