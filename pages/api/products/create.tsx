import prisma from '@/lib/prisma'

export default async function handler(req: any, res: any) {    
 
    const product = req.body;

    const saved = await prisma.products.create({ data: {
        name: product.name,
        pack: product.pack,
        price: product.price
    } });
    return res.status(200).json(saved);
}