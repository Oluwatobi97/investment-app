import {z} from "zod";

export const userSchema=z.object({
    email: z.string().email({message: 'invalid email adresss'}),
    password: z.string().min(8,{message: 'password must be at least 8 charcters'})
})
const coins=z.enum((['BTC','ETH','USDT']))
export const createPlanSchema=z.object({
    coinsType: coins.refine((value) => coins.options.includes(value),{message: 'Message invalid coin type. choose BTC, ETH, USDT'}),
    investMentDuration: z.enum(['1-day','1-month','3-month','6-month','1-year']),
    amount: z.number().gt(9,'you must at least 10 dollars')
})