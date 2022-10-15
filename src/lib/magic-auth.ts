import { Magic } from 'magic-sdk';

const createMagicAuth = () => {
    if (typeof window !== "undefined") return new Magic(`${process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY}`); // ✨
}

export const magic = createMagicAuth();
