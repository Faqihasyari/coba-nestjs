import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'Faqih', alamat: 'Jl. Merdeka No. 1' },
    { id: 2, name: 'Jamal', alamat: 'Jl. Sudirman No. 2' },
    { id: 3, name: 'Aisyah', alamat: 'Jl. Thamrin No. 3' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  findAddress() {
    return this.users.map((user) => user.alamat);
  }

  // findAddress() {
  //   return this.users.
  // }
}
