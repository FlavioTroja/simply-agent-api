import prisma from '@/lib/prisma'

export default async function handler(req: any, res: any) {    
 
    const user = req.body;

    const saved = await prisma.users.create({ data: {
        name: user.name,
        surname: user.surname,
        phoneNumber: user.phoneNumber,
        email: user.email,
        address: user.address,
        address2: user.address2,
        city: user.city,
        region: user.region,
        zip: user.zip,
        country: user.country,
        companyName: user.companyName,
        vatCode: user.vatCode,
        fiscalCode: user.fiscalCode
    } });
    return res.status(200).json(saved);
}