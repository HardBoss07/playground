import {base, end} from "@/public/rust-code";

export const combinedString = (bitmaps: string): string => {
    return `${base}${bitmaps}${end}`;
};
