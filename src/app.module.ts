import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './controllers/items';
import { Item } from './models/Item';
import { ItemsService } from './services/items';

@Module({
  imports: [
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'codex',
    autoLoadModels: true,
    synchronize: true,
    }),
    SequelizeModule.forFeature([Item])
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})

export class AppModule {}
