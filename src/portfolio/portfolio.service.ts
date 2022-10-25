import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePortfolioItemDto } from './dto';

@Injectable()
export class PortfolioService {
    constructor(private prisma: PrismaService){}

// Add item to portfolio
    async createItem(dto: CreatePortfolioItemDto){
        try{
            return await this.prisma.portfolio.create({
                data: {
                    title: dto.title,
                    desc: dto.desc
                }
            });

        } 
        
        catch(err){
           console.log("DB error: ", err);
        }
    }

// Find All
    async findAll(){
        try{ 
            return this.prisma.portfolio.findMany({})
        }
        catch(err) {
           console.log("DB error: ", err);
        }
    }

// Find item by Id
    async findItemById (ItemId: number) {

        try{
            return this.prisma.portfolio.findFirst({
                where:{
                    id: ItemId,
                }
            })
        }
        catch(err){
            console.log("DB error: ", err);
        }
    }

//Update by Id
   async updateItemById(itemId:number, dto:CreatePortfolioItemDto){
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
