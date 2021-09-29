require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const db = require("./db");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { adminBro, adminRouter } = require("./admin");
const formidableMiddleware = require('express-formidable');


const app = express()


app.use(cors())
app.use(express.json())
app.use(formidableMiddleware())
app.use(adminBro.options.rootPath, adminRouter);


const options = {

    definition: {
        openapi: '3.0.0',
        info: {
            title: "Anime",
            version: "1.0.0",
            description: "This is About Anime and also Manga",
        },
        servers: [
            {
                url: ["http://localhost:3001"],
            },
        ],
    },
    apis: ['./server*.js'],
};

swaggerSpecs = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

/** 
 * @swagger
 * tags:
 *  name: MainAnime
 *  description: This is for the main Anime
 * /api/v1/Animes:
 *  get:
 *      tags: [MainAnime]
 *      parameters:
 *          - name: text
 *            default: 1
 *            in: query
 *            schema:
 *              type: integer
 *      responses:
 *          default:
 *              description: This is the default response for it
 */
app.get("/api/v1/Animes", async (req, res) => {

    try {
        const results = await db.query("select * from animes");


        res.status(200).json({
            status: "succes",
            results: results[1].rows.length,
            data: {
                anime: results[1].rows,
            },
        });
    } catch (error) {
        console.log(error);
    }


});


app.get("/api/v1/Animes/:id", async (req, res) => {
    console.log(req.params.id);

    try {
        const results = await db.query("select * from animes where id = $1", [req.params.id]);

        res.status(200).json({
            status: "succes",
            data: {
                anime: results.rows[1],
            },
        })

    } catch (error) {
        console.log(error);
    }


})



/**
 * @swagger
 * tags:
 *  name: MainAnime
 *  description: This is for the main Anime
 * /api/login:
 *  post:
 *      tags: [MainAnime]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              default: coder
 *                          password:
 *                              type: string
 *                              default: coder123
 *      responses:
 *          default:
 *              description: This is the default response for it
 */
app.post("/api/v1/Animes", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO animes (name, location, price_range) values ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.price_range]);
        res.status(201).json({
            status: "succes",
            data: {
                anime: results.rows[0],
            },
        })

        console.log(results);

    } catch (error) {
        console.log(error);
    }

})

// update

app.put("/api/v1/Animes/:id", async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    try {
        const results = await db.query("UPDATE animes SET name = $1, location = $2, price_range = $3 where id = $4 returning *", [req.body.name, req.body.location, req.body.price_range, req.params.id]);
        res.status(200).json({
            status: "succes",
            data: {
                anime: results.rows[0],
            },
        })
    } catch (error) {
        console.log(error);
    }

})




/**
 * @swagger
 * /Animes/{id}:
 *    delete:
 *      summary: remove Anime by id
 *      tags: [Anime]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: id to remove product
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The product was deleted
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: deleted
 *        404:
 *          description: Product not found
 */
// Delete

app.delete("/api/v1/Animes/:id", async (req, res) => {

    try {
        const results = await db.query("DELETE FROM animes where id = $1", [req.params.id]);
        res.status(204).json({
            status: "succes",
        })

    } catch (error) {
        console.log(error);
    }

})


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
