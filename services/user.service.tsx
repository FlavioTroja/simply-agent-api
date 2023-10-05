import prisma from '@/lib/prisma'
import { users } from "@prisma/client";

export async function create(user: users) {    
    return await prisma.users.create({ data: user });
}