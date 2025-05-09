import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [CategoriesModule],
  providers: [AppService],
})
export class AppModule {}
