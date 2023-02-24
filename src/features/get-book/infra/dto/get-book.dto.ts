import { IsNotEmpty, IsString } from 'class-validator';

export class GetBookDto {
  @IsString()
  @IsNotEmpty()
  extId: string;
}
