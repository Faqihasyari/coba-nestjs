import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Dunia!';
  }

  getNewHello(name: string): string {
    return `Hello, ${name}, from NewHello class!`;
  }
}
