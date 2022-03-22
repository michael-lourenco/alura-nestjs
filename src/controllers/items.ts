import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ItemsService } from "src/services/items";
import { Item } from "../models/Item";

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) {

    }

    @Get()
    async obeterTodos(): Promise<Item[]> {
        return  this.itemsService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Item> {
        return  this.itemsService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() item: Item) {
        console.log(item);
         this.itemsService.criar(item);
    }

    @Put()
    async alterar(@Body() item: Item): Promise<[number, Item[]]> {
        console.log(item);
        return  this.itemsService.alterar(item);
    }

    @Delete(':id')
    async apagar(@Param() params) {
         this.itemsService.apagar(params.id);
    }
} 
