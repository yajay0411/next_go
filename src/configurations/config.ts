import * as yup from 'yup';

// 1️⃣ Define schema
const envSchema = yup.object({
  MODE: yup.string().oneOf(['development', 'production']).optional(),
  API_BASE_URL: yup.string().url().required(),
});

// 2️⃣ Validate environment
const parsedEnv = envSchema.validateSync({
  MODE: process.env.MODE,
  API_BASE_URL: process.env.NEXT_BASE_API_URL,
});

if (parsedEnv.MODE && ['development'].includes(parsedEnv.MODE)) {
  console.table(parsedEnv);
}

// 3️⃣ Freeze config
export const CONFIG = Object.freeze(parsedEnv);
