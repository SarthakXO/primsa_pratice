import { PrismaClient } from "@prisma/client"; //importing the client
const prisma = new PrismaClient();

const insertUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const res = await prisma.user.create({
    data: { firstName, lastName, email, password },
  });
  console.log(res);
};

insertUser("sarthak", "bhatt", "sarthak@sathak.com", "12134");
