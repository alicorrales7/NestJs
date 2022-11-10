import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private  userService : UsersService){}

    async validateUser(usernames: string, password: string):Promise<any>{
        const user = await this.userService.loginSA(usernames,password);
        return user;
    }
}

