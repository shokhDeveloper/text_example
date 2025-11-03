import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () =>
    console.log(`Server is running on ${PORT}-port`),
  );
}
void bootstrap();
// dckr_pat_hIZq7K35T2TqL0oPmHNLdg2hZGs