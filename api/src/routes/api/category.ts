import { Hono, Context } from "hono";
import { PrismaClient } from "@prisma/client";
import { zValidator } from "@hono/zod-validator";
import { bearerAuth } from "hono/bearer-auth";
import { z } from "zod";
import { sha } from "bun";

const category = new Hono();
const prisma = new PrismaClient();

const createSchema = z.object({
    name: z.string()
})
const deleteSchema = z.object({
    id: z.number()
});

const updateSchema = z.object({
    id: z.number(),
    name: z.string()
})

const token = process.env.token as string;

const createValidator = zValidator("json", createSchema, (result, c) => {
    if (!result.success) {
        return c.json({
            success: false,
            message: "data invalid"
        }, 400);
    }
})
const deleteValidator = zValidator("json", deleteSchema, (result, c) => {
    if (!result.success) {
        return c.json({
            success: false,
            message: "data invalid"
        }, 400);
    }
})

const updateValidator = zValidator("json", updateSchema, (result, c) => {
    if (!result.success) {
        return c.json({
            success: false,
            message: "data invalid"
        }, 400);
    }
})



category.get("/", async (c: Context) => {
    const { name } = c.req.query()
    let getCategory
    try {
        if (name) {
            getCategory = await prisma.category.findFirst({
                where: {
                    name: name
                }
            })
        }
        else {
            getCategory = await prisma.category.findMany({})
        }
        return c.json({
            success: true,
            message: "Success fetching category",
            data: getCategory,
        })
    } catch (err) {
        return c.json({
            success: false,
            message: "failed fetching category, error : " + err,
            data: {}
        }, 400)
    }
})


category.post("/create", createValidator, bearerAuth({ token }), async (c: Context) => {
    const data = await c.req.json();
    try {
        const createCategory = await prisma.category.create({
            data: data
        })

        return c.json({
            success: true,
            message: "Success creating data",
            data: createCategory,
        })
    } catch (err) {
        return c.json({
            success: false,
            message: "Failed creating data, error : " + err,
            data: {}
        }, 400)
    }
})

category.delete("/delete", deleteValidator, bearerAuth({ token }), async (c: Context) => {
    const { id } = await c.req.json();
    try {
        const deleteCategory = await prisma.category.delete({
            where: {
                id: Number(id)
            }
        })
        return c.json({
            success: true,
            message: "Success deleting data",
            data: deleteCategory
        })
    }
    catch (err) {
        return c.json({
            success: false,
            message: "Failed deleting data, error : " + err,
            data: {}
        }, 400)
    }
})

category.patch("/update", updateValidator, bearerAuth({ token }), async (c: Context) => {
    const { id, name } = await c.req.json();

    try {
        const updateCategory = await prisma.category.update({
            where: {
                id: Number(id)
            },
            data: {
                name: name,
            }
        })
        return c.json({
            success: true,
            message: "Success updating category ",
            data: updateCategory,
        })

    }
    catch (err) {
        return c.json({
            success: false,
            message: "Failed to update category, err : " + err,
            data: {},
        }, 400)
    }

})

export default category;