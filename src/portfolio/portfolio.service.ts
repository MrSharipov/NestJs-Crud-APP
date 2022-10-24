import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ItemDto } from './dto';

@Injectable()
export class PortfolioService {
    constructor(private prisma: PrismaService){}

// Add item to portfolio
    async createItem(dto: ItemDto){
        const portfolioItem = await this.prisma.portfolio.create({
            data: {
                title: dto.title,
                desc: dto.desc
            }
        });

        return portfolioItem;
    }

// Find All
    async findAll(){
        return this.prisma.portfolio.findMany({})
    }

// Find item by Id
    async findItemById (ItemId: number) {
        const pItem = this.prisma.portfolio.findFirst({
            where:{
                id: ItemId,
            }
        })

        return pItem;
    }

//Update by Id
   async updateItemById(itemId:number, dto:ItemDto){
        const pItem = await this.prisma.portfolio.findUnique({
            where: {
                id: itemId, 
            }
        });

        if(!pItem) throw new ForbiddenException("Not found");

        return this.prisma.portfolio.update({
            where: {
                id: itemId,
            },
            data: {
                ...dto,
            }
        })
    }

// Remove Item by Id
 async removeItemById(itemId:number){
    const item = await this.prisma.portfolio.findUnique({
        where: {
            id: itemId,
        }
    });

    if(!item) throw new ForbiddenException("Not found");

    return this.prisma.portfolio.delete({
        where: {
            id: itemId,
        }
    })
 }

}
