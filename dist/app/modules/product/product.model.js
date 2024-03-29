"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    occasion: {
        type: String,
        required: true,
    },
    recipient: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    theme: {
        type: [String],
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    material: {
        type: [String],
        required: true,
    },
    color: {
        type: [String],
    },
    productImage: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.Product = (0, mongoose_1.model)('Product', productSchema);
