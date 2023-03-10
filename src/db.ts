import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function listUsers() {
    const users = await prisma.user.findMany();
    return users;
}