import { Injectable } from "@nestjs/common";
import { Item } from "src/models/Item"

@Injectable()
export class ItemsService {
    items: Item[] = [
        new Item('1', 'Item 1', 'Descrição do item 1', 'Plaintext do item 1'),
        new Item('2', 'Item 2', 'Descrição do item 2', 'Plaintext do item 2'),
        new Item('3', 'Item 3', 'Descrição do item 3', 'Plaintext do item 3'),
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
