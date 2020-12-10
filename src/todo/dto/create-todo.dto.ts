import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { ErrorMessagesEnum } from "../enum/error-messages.enum";

export class CreateTodoDto {
    @IsNotEmpty({message: ErrorMessagesEnum.notEmpty})
    @MinLength(3, {message : ErrorMessagesEnum.minLength })
    @MaxLength(10, {message : ErrorMessagesEnum.maxLength })
    name: string;
    @IsNotEmpty({message: ErrorMessagesEnum.notEmpty})
    @MinLength(10, {message : ErrorMessagesEnum.minLength })
    description: string;
}