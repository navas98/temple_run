import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { deleteUser } from "./routes/delete.ts";

import { getBook, getUser } from "./routes/get.ts";
import { postAuhor, postBooks, PostUser,  } from "./routes/post.ts";
import { PutCar } from "./routes/put.ts";


const router = new Router();

router
.post("/addUser",PostUser) 
.post("/addBook",postBooks)
.post("/addAuthor",postAuhor)
.delete("/deleteUser/:id",deleteUser)
.get("/getUser/:id",getUser)
.put("/updateCar",PutCar)
.get("/getBook/:info",getBook)
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 7777 });
