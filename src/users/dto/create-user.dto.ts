import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: 'Valid role required' })
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}