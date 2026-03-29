import express, {Request, Response} from "express";
import path from "path";

const spaController = (req: Request<{name: string}>, res: Response) => {
  let nameApp = req.params.name;
  let rootRoute = path.join(process.cwd(), "/public",`/spa/${nameApp}/index.html`);
  return res.sendFile(rootRoute);
}

export default spaController;
