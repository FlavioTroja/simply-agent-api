import prisma from '@/lib/prisma'

export async function create(user: any) {    
    return await prisma.users.create({ data: user });
}