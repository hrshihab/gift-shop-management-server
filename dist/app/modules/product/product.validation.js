"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = exports.createProductValidation = void 0;
const zod_1 = require("zod");
exports.createProductValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2).max(50),
        price: zod_1.z.number({ invalid_type_error: 'Price must be number' }).positive(),
        quantity: zod_1.z.number().positive(),
        occasion: zod_1.z.string().min(2).max(50),
        recipient: zod_1.z.string().min(2).max(50),
        category: zod_1.z.string().min(2).max(50),
        theme: zod_1.z.array(zod_1.z.string().min(2).max(50)),
        brand: zod_1.z.string().min(2).max(50),
        material: zod_1.z.array(zod_1.z.string().min(2).max(50)),
        color: zod_1.z.array(zod_1.z.string().min(2).max(50)).optional(),
        //productImage: z.string().min(2).max(50),
        isDeleted: zod_1.z.boolean(),
    }),
});
exports.productValidation = {
    createProductValidation: exports.createProductValidation,
};
