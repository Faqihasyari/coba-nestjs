import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';

describe('UserService (Unit Test)', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should return all users', () => {
    const users = service.findAll();
    expect(users.length).toBe(2);
  });

  it('should return a user by id', () => {
    const user = service.findOne(1);
    expect(user.name).toBe('Faqih');
  });

  it('should throw NotFoundException for non-existing user', () => {
    expect(() => service.findOne(99)).toThrow(NotFoundException);
  });
});
