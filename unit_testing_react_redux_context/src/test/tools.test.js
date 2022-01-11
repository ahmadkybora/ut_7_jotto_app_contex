import { Tools } from "../components/classComponents/tools"

// در تست زیر یک کلاس را با متد های آن چک میکنیم
// براحتی میتوان کلاس مورد نظر را ایمپورت کرد و از آن یک
// آبجکت ساخت و شروع به تست نویسی کرد
describe("", () => {
    let tools;
    beforeEach(() => {
        // ابتدا یک شی میسازیم
        // سپس مقادیر را
        // چک میکنیم
        tools = new Tools();
    })
    test("", () => {
        // باید 3 باشد
        const test = tools.a();
        expect(test).toBe(3);
    })
    test("", () => {
        // باید 7 باشد
        const test = tools.b();
        expect(test).toBe(7);
    })
    // جمع 2 عدد باید یکی باشد
    test("", () => {
        const test = tools.c(1, 1);
        expect(test).toBe(2);
    })
    // جمع 2 عدد باید یکی باشد
    // البته در کامپوننت اصلی
    // تابعی دیگر در این تابع بازگشت شده است
    test("", () => {
        const test = tools.d(1,2);
        expect(test).toStrictEqual(3);
    })

    // چون متد سازنده دارد
    // مقدارش با ان برابر است
    test("", () => {
        const t = tools;
        expect(tools).toStrictEqual(t);
    })

    // چون متد سازنده دارد مقدارش با آن برابر است
    // نه با مقدار خود متغییر مورد نظر
    test("", () => {
        const test = tools.x;
        expect(test).toStrictEqual(4);
    })
})