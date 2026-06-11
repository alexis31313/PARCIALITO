import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEstudianteDto {
  @ApiProperty({ example: 'Ana García' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ example: 'EST-2024-001' })
  @IsString()
  @IsNotEmpty()
  codigo: string;
}
