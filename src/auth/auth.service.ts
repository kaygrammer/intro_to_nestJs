import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService{
    signup() {
        return {message:"I have sign-up"}
    }

    signin() {
        return {message:"I have sign-in"}
    }
}