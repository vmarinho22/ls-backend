import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const createdPermission = await prisma.permission.create({
    data: {
      title: 'Super admin'
    }
  });
  await prisma.user.create({
    data: {
      email: 'viniciusmarinho1616@gmail.com',
      username: 'marinho1616',
      password: '$2y$10$7/rUTVGitl/GGocpp6Ld/.KYR8hr.ZLs97DAPmxPXVjkpdh2AECIu',
      permissionId: createdPermission.id
    }
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect);
