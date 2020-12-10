import { IsIn, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { ErrorMessagesEnum } from "../enum/error-messages.enum";
import { TodoStatusEnum } from "../enum/todo-status.enum"
import { CreateTodoDto } from "./create-todo.dto"

export class UpdateTodoDto{
    @IsOptional()
    @MinLength(3, {message : ErrorMessagesEnum.minLength })
    @MaxLength(10, {message : ErrorMessagesEnum.maxLength })
    name: string;
    @MinLength(10, {message : ErrorMessagesEnum.minLength })
    @IsOptional()
    description: string;
    
    @IsIn([
        TodoStatusEnum.waiting, TodoStatusEnum.done, TodoStatusEnum.actif
    ], {message: ErrorMessagesEnum.inStatusEnum})
    @IsOptional()
    statut : TodoStatusEnum;
}