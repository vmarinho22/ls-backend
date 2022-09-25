import { Injectable } from '@nestjs/common';
import { CloudinaryService } from './../cloudinary/cloudinary.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileRepository } from './repositories/profiles.repository';

@Injectable()
export class ProfilesService {
  constructor(
    private readonly repository: ProfileRepository,
    private readonly cloudinary: CloudinaryService
  ) {}

  async create(createProfileDto: CreateProfileDto) {
    return this.repository.create(createProfileDto);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.repository.update(id, updateProfileDto);
  }

  async uploadProfilePicture(id: number, file: Express.Multer.File) {
    const uploadedFile = await this.cloudinary.uploadImage('profile', file);

    if (!uploadedFile.url) {
      throw new Error(`Erro ao enviar imagem de perfil do usuário com ID: ${id}`);
    }

    return this.repository.uploadProfilePicture(id, uploadedFile.url);
  }
}
