import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Jhon",
            "email": "jhon@dev.dev",
            "role": "INTERN" 
        },
        {
            "id": 2,
            "name": "JANE",
                        "email": "jane@dev.dev",
            "role": "ENGINEER" 
        },
                {
            "id": 3,
            "name": "RUNO",
                        "email": "runo@dev.dev",
            "role": "ADMIN" 
        },        {
            "id": 4,
            "name": "RAYA",
                        "email": "raya@dev.dev",
            "role": "INTERN" 
        }
    ];

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if(role) {
            const roles = this.users.filter(user => user.role === role );
            if(roles.length === 0) throw new NotFoundException('Role Not Found');
            return roles;
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);

        if(!user) throw new NotFoundException('User not found');

        return user;
    }

    create(user: CreateUserDto) {
        const newUser = {id: 6, ...user}; 
        return user;
    }

    update(id: number, updateUser: UpdateUserDto) {
        return this.users.map(user => {
            if(user.id === id) {
                return {...user, ...updateUser};
            }
            return user;
        });
        return this.findOne(id);
    }

    delete(id: number) {
        const removedUser = this.findOne(id);
        return removedUser;
    }
}
