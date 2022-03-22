import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ItemsService } from "src/services/items";
import { Item } from "../models/Item";

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) {

    }

    @Get()
    obeterTodos(): Item[] {
        return this.itemsService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Item {
        return this.itemsService.obterUm(params.id);
    }

    @Post()
    criar(@Body() item: Item) {
        console.log(item);
        this.itemsService.criar(item);
    }

    @Put()
    alterar(@Body() item: Item): Item {
        console.log(item);
        return this.itemsService.alterar(item);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.itemsService.apagar(params.id);
    }
} 
