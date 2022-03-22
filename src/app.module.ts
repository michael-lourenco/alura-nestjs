import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './controllers/items';
import { Item } from './models/Item';
import { ItemsService } from './services/items';

@Module({
  imports: [ConfigModule.forRoot(),
    SequelizeModule.forRoot({
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    autoLoadModels: JSON.parse(process.env.AUTO_LOAD_MODELS),
    synchronize: JSON.parse(process.env.SYNCHRONIZE),
    }),
    SequelizeModule.forFeature([Item])
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})

export class AppModule {}








