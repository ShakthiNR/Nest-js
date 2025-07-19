import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  name?: string;
    
  @IsOptional()
  @IsNotEmpty({ message: "Age cannot be empty"})
  @IsInt()
  age?: number;

  @IsOptional()
  @IsNotEmpty({ message: "Gender cannot be empty"})
  @IsEnum(['M', "F", "O"], { message: "Invalid gender should be 'M', 'F' or 'O' "})
  gender?: string;
}