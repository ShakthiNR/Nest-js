import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;
    
  @IsNotEmpty({ message: "Age cannot be empty"})
  @IsInt()
  age: number;

  @IsNotEmpty({ message: "Gender cannot be empty"})
  @IsEnum(['M', "F", "O"], { message: "Invalid gender should be 'M', 'F' or 'O' "})
  gender: string;
}
