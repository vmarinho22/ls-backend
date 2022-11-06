import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'viniciusmarinho1616@gmail.com',
      username: 'viniciusmarinho1616',
      password: '$2a$10$pA.7eKNFf38csvaxCOWPXOqmpC6Qyqj2x2vmgo3Kp3SHuNLe1zaZi',
      isSuperAdmin: true,
      profile: {
        create: {
          name: 'Vinicius Marinho',
          about: 'Administrador do sistema',
          birthDate: '2022-09-07T23:47:04.548Z',
          naturalness: 'São Paulo',
          role: {
            create: {
              title: 'Administrador do sistema',
              description: 'Administrador do sistema'
            }
          }
        }
      },
      permission: {
        create: {
          title: 'Admin',
          permissionLevel: {
            create: [
              {
                page: 'users',
                create: true,
                read: true,
                update: true,
                delete: true
              },
              {
                page: 'permissions',
                create: true,
                read: true,
                update: true,
                delete: true
              },
              {
                page: 'permissions-levels',
                create: true,
                read: true,
                update: true,
                delete: true
              },
              {
                page: 'front-permissions',
                create: true,
                read: true,
                update: true,
                delete: true
              },
              {
                page: 'roles',
                create: true,
                read: true,
                update: true,
                delete: true
              },
              {
                page: 'profiles',
                create: true,
                read: true,
                update: true,
                delete: true
              },
              {
                page: 'me',
                create: true,
                read: true,
                update: true,
                delete: true
              },
              {
                page: 'trainings',
                create: true,
                read: true,
                update: true,
                delete: true
              },
              {
                page: 'trainings-history',
                create: true,
                read: true,
                update: true,
                delete: true
              }
            ]
          }
        }
      }
    }
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    console.log('seed executada com sucesso!');
    await prisma.$disconnect;
  });
