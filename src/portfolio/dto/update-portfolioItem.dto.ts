import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdatePortfolioItemDto {
    @IsOptional()
    @IsNumber()
    id?: number;
    
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    desc?: string;
}