import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { NotFoundError } from './../../common/errors/types/NotFoundError';
import { RoleEntity } from './../../roles/entities/role.entity';
import { CreateProfileDto } from './../dto/create-profile.dto';
import { UpdateProfileDto } from './../dto/update-profile.dto';
import { ProfileEntity } from './../entities/profile.entity';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto): Promise<ProfileEntity> {
    const { roleId, userId } = createProfileDto;

    const roleExists: RoleEntity = await this.prisma.role.findUnique({ where: { id: userId } });

    if (!roleExists) {
      throw new NotFoundError(`Cargo com o ID #${roleId} não encontrado`);
    }

    const userExists: UserEntity = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!userExists) {
      throw new NotFoundError(`Usuário com ID #${userId} não encontrado`);
    }

    return this.prisma.profile.create({
      data: createProfileDto
    });
  }

  async findAll(): Promise<ProfileEntity[]> {
    return this.prisma.profile.findMany();
  }

  async findOne(id: number): Promise<ProfileEntity> {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  async update(id: number, updateProfileDto: UpdateProfileDto): Promise<ProfileEntity> {
    const { roleId, userId } = updateProfileDto;

    if (roleId) {
      const roleExists: RoleEntity = await this.prisma.role.findUnique({ where: { id: userId } });

      if (!roleExists) {
        throw new NotFoundError(`Cargo com o ID #${roleId} não encontrado`);
      }
    }

    if (userId) {
      const userExists: UserEntity = await this.prisma.user.findUnique({ where: { id: userId } });

      if (!userExists) {
        throw new NotFoundError(`Usuário com ID #${userId} não encontrado`);
      }
    }

    return this.prisma.profile.update({
      where: { id },
      data: updateProfileDto
    });
  }

  async uploadProfilePicture(id: number, fileUrl: string): Promise<ProfileEntity> {
    return this.prisma.profile.update({
      where: { id },
      data: {
        userPicture: fileUrl
      }
    });
  }
}
