import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Item } from "src/models/Item"

@Injectable()
export class ItemsService {
    constructor(
        @InjectModel(Item)
        private itemModel: typeof Item
    ) {}
    
    async obterTodos(): Promise<Item[]> {
        return this.itemModel.findAll();
    }

    async obterUm(id: string): Promise<Item> {
        return this.itemModel.findByPk(id);
    }

    async criar(item: Item) {
        this.itemModel.create(item);
    }

    async alterar(item: Item): Promise<[number, Item[]]> {
        return this.itemModel.update(item, {
            where: {
                id: item.id
            }
        });
    }

    async apagar(id: string) {
        const item: Item = await this.obterUm(id);
        this.itemModel.destroy({
            where: {
                id: item.id
            }
        });
    }
}
