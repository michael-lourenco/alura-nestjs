import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Item } from "../models/Item";

@Controller('items')
export class ItemsController {

    items: Item[] = [
        new Item(1, 'Item 1', 'Descrição do item 1', 'Plaintext do item 1'),
        new Item(2, 'Item 2', 'Descrição do item 2', 'Plaintext do item 2'),
        new Item(3, 'Item 3', 'Descrição do item 3', 'Plaintext do item 3'),
    ];

    @Get()
    obeterTodos(): Item[] {
        return this.items;
    }

    @Get(':id')
    obterUm(@Param() params): Item {
        return this.items[params.id];
    }

    @Post()
    criar(@Body() item: Item) {
        console.log(item);
        this.items.push(item);
    }

    @Put()
    alterar(@Body() item: Item): Item {
        console.log(item);
        return item;
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.items.pop();
    }
} 
