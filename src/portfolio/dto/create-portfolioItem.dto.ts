import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePortfolioItemDto {
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    desc: string;
}