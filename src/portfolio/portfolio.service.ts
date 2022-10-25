import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePortfolioItemDto } from './dto';

@Injectable()
export class PortfolioService {
    constructor(private prisma: PrismaService){}

// Add item to portfolio
    async createItem(dto: CreatePortfolioItemDto){
        try{
            const portfolioItem = await this.prisma.portfolio.create({
                data: {
                    title: dto.title,
                    desc: dto.desc
                }
            });
    
            return portfolioItem;   

        } 
        
        catch(err){
            throw err;
        }
    }

// Find All
    async findAll(){
        try{ 
            return this.prisma.portfolio.findMany({})
        }
        catch(err) {
            throw err;
        }
    }

// Find item by Id
    async findItemById (ItemId: number) {

        try{
            const pItem = this.prisma.portfolio.findFirst({
                where:{
                    id: ItemId,
                }
            })
    
            return pItem;
        }
        catch(err){
            throw err;
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
