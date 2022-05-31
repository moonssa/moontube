import express from "express";

import { home, searchVideo } from "../controllers/videoControllers";
import { join, login } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/join", join);
rootRouter.get("/login", login);
rootRouter.get("/search", searchVideo);

export default rootRouter;
