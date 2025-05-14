type Each<T> = T extends Array<infer U> ? U : T;

let num = 5; // ※ const で宣言すると最新の TypeScript では数値リテラルになる
const numArr = [3, 6, 9];
type NA = Each<typeof numArr>;
type N = Each<typeof num>;