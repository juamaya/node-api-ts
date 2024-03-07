import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?:any) => {
  console.log(errorRaw);
  res.status(500);
  res.send({ error: error });
  // res.send({error }) // Esto es lo mismo que //   res.send({error:error})
};

export { handleHttp };
