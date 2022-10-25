import { Body, Controller, Get, Param, Put, Post, Delete, ParseIntPipe } from '@nestjs/common';
import { CreatePortfolioItemDto } from './dto';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
    constructor(
        private portfolioService: PortfolioService
        ){}

    @Get(':id')
    findItemById(@Param('id', ParseIntPipe) id: number){
        return this.portfolioService.findItemById(id);
    }

    @Get()
    findAllItem(){
        return this.portfolioService.findAll();
    }


    @Post()
    createItem(@Body() dto:  CreatePortfolioItemDto){
        return this.portfolioService.createItem(dto);
    }

    @Put(':id')
    editItemById (@Param('id', ParseIntPipe) id:number, @Body() dto:  CreatePortfolioItemDto) {
        return this.portfolioService.updateItemById(id, dto);
    }

    @Delete(':id')
    deleteItemById(@Param('id', ParseIntPipe) id: number){
        return this.portfolioService.removeItemById(id);
    }
}
