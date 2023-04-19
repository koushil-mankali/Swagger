import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger Docs Automation",
      version: "1.0.0",
    },
  },
  apis: ["./index.js"],
};

const openapiSpecification = swaggerJSDoc(options);

/**
 * @openapi
 * /use-delete/{id}:
 *   delete:
 *      summary: Deletes Data
 *      tags:
 *        - USE Method
 *      description: Deletes data with provided id.
 *      parameters:
 *          - in: path
 *            name: id
 *            description: id of the post
 *            required: true
 *      schema:
 *         type: number
 *         required: true
 *      responses:
 *       '200':
 *         description: Deleted Post
 *         content:
 *             text/plain:
 *                schema:
 *                   type: string
 *
 *       '500':
 *          description: Internal Server Error
 *
 */
app.use("/use-delete/:id", (req, res) => {
  const { id } = req.params;
  res.status(204).send(`use-delete call, ${id}`);
});

/**
 * @openapi
 * /use-delete:
 *  delete:
 *    summary: Deletes Data
 *    tags:
 *     - USE Method
 *    description: Deletes data
 *    responses:
 *       '200':
 *         description: Deleted Post
 *         content:
 *             text/plain:
 *                schema:
 *                   type: string
 *
 *       '500':
 *          description: Internal Server Error
 */
app.use("/use-delete", (req, res) => {
  res.status(200).send("use-delete call");
});

/**
 * @openapi
 * /post:
 *   post:
 *     description: Create new Post.
 *     tags:
 *      - Normal Method
 */
app.post("/post", (req, res) => {
  res.status(200).send("Post call");
});

/**
 * @openapi
 * /:
 *  get:
 *   tags:
 *    - Normal Method
 *   description: Home Page
 */
app.get("/", (req, res) => {
  res.status(200).send("Hi welcome!");
});

app.use("/docs", swaggerUI.serve, swaggerUI.setup(openapiSpecification));

app.listen(3000, () => {
  console.log("Server Up! @ http://localhost:3000");
});
