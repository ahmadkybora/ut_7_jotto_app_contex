import React, { useEffect, useState } from 'react';
import useMyComp from './useMyComp';

export const MyComp = ({ onCountChange = () => {} }) => {
    // در این قسمت مقادیر مورد استفاده را بطور دیستراکت
    // گرفته و استفاده میکنیم
    const { count, setCount, increment } = useMyComp();
    // const [count, setCount] = useState(0);
    // توجه کنید در پایین اگر از ارایه های وابستگی استفاده کنید
    // و اگر یک آرایه خالی پاس بدهید طبق قوانین ری اکت
    // یکبار انجام میشود و در قسمت تست نویسی اگر چک کرده باشید تعداد صدا زدن
    // بیشتر از یکبار است قطعا خطا میدهید
    // ولی اگر مقدار کونت را داخل ارایه بگذارید
    // طبق قوانین بعد از هر بار تغییر کامپوننت ررندر میشود
    useEffect(() => {
        onCountChange(count)
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}></button>
            {/* <button onClick={() => increment()}></button> */}
        </div>
    );
}
 
export default MyComp;