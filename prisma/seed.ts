import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const createdPermission = await prisma.permission.create({
    data: {
      title: 'Admin'
    }
  });
  await prisma.user.create({
    data: {
      email: 'viniciusmarinho1616@gmail.com',
      username: 'viniciusmarinho1616',
      password: '$2a$10$pA.7eKNFf38csvaxCOWPXOqmpC6Qyqj2x2vmgo3Kp3SHuNLe1zaZi',
      permissionId: createdPermission.id,
      isSuperAdmin: true
    }
  });
  await prisma.permissionLevel.createMany({
    data: [
      {
        page: 'users',
        create: true,
        read: true,
        update: true,
        delete: true,
        permissionId: createdPermission.id
      },
      {
        page: 'permissions',
        create: true,
        read: true,
        update: true,
        delete: true,
        permissionId: createdPermission.id
      },
      {
        page: 'permissions-levels',
        create: true,
        read: true,
        update: true,
        delete: true,
        permissionId: createdPermission.id
      },
      {
        page: 'front-permissions',
        create: true,
        read: true,
        update: true,
        delete: true,
        permissionId: createdPermission.id
      },
      {
        page: 'me',
        create: true,
        read: true,
        update: true,
        delete: true,
        permissionId: createdPermission.id
      }
    ],
    skipDuplicates: true
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    console.log('seed executada com sucesso!');
    await prisma.$disconnect;
  });
