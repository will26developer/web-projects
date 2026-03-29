import express, {Request, Response} from "express";
import path from "path";

const frontendMentorController = (req: Request<{number: string}> ,res: Response) => {
  let numberParam = Number(req.params.number);
  let numberString: string = numberParam < 10 ? '0'+numberParam.toString() : numberParam.toString();
  let rootRoute = path.join(process.cwd(),"/public",`/frontend-mentor/frontend-mentor-${numberString}/index.html`);
  return res.sendFile(rootRoute);
}

export default frontendMentorController;
