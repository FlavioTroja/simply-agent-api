import * as userService from "../../../services/user.service";

export default async function handler(req: any, res: any) {    
 
    const user = req.body;
    console.log(JSON.stringify(user, null, 4));

    const saved = await userService.create(user);
    return res.status(200).json(saved);
}