import { Injectable } from "@nestjs/common";
import { Item } from "src/models/Item"

@Injectable()
export class ItemsService {
    items: Item[] = [

    ];

    obterTodos(): Item[] {
        return this.items;
    }

    obterUm(id: string): Item {
        return this.items[id];
    }

    criar(item: Item) {
        this.items.push(item);
    }

    alterar(item: Item): Item {
        return item;
    }

    apagar(id: string) {
        this.items.pop();
    }
}
