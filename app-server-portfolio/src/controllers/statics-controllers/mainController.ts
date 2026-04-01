import { Request, Response } from "express"
import path from "path";

const mainControllers = (req: Request, res: Response) => {
    return res.sendFile(path.join(process.cwd(),"public","/main/index.html"))
}

export default mainControllers; 