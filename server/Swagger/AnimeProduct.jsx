// const express = require("express");
// const server = require("server");
// const router = express.Router();
/**
 * @swagger
 * /Animes/{id}:
 *    get:
 *      summary: gets Animes by id
 *      tags: [Animes]
 *      parameters:
 *        - in : path
 *          name: id
 *          description: id of animes
 *          schema:
 *            type: integer
 *          required: true
 *      responses:
 *        200:
 *          description: animes by its id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    description: The animes id
 *                    example: 1
 *                  title:
 *                    type: string
 *                    description: name of the product
 *                    example: 3x3
 *                  type:
 *                    type: string
 *                    description: animes type
 *                    example: Puzzle
 *        500:
 *         description: internal server error
 */
// router.get("/api/v1/Animes", server.get);


// module.exports = router;