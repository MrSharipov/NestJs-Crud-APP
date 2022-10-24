import { Module } from '@nestjs/common';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PortfolioModule, PrismaModule]
})
export class AppModule {}
