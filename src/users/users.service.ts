import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Jhon",
            "role": "INTERN" 
        },
        {
            "id": 2,
            "name": "JANE",
            "role": "ENGINEER" 
        },
                {
            "id": 3,
            "name": "RUNO",
            "role": "ADMIN" 
        },        {
            "id": 4,
            "name": "RAYA",
            "role": "INTERN" 
        }
    ];

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if(role) return this.users.filter(user => user.role === role );
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        return user;
    }

    create(user: {id: number, name: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
        return this.users.push(user);
    }

    update(id: number, updateUser: {name?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
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
