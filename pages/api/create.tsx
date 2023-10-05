
export default async function handler(req: any, res: any) {    
 
    const user = req.body;
    console.log(JSON.stringify(user, null, 4));
    return res.status(200).json({"result": "OK"});
}