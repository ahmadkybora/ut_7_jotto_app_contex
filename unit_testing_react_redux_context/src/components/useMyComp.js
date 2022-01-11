/**
 * این کامپوننت در اصل یک هوک شخصی
 * میباشد اما بوسیله یک لایبرری
 * که باید طبق قوانین آن انجام شود
 */
 import { useState, useCallback } from 'react'

 // در اینجا از هوک 
 // useCallback
 // استفاده میکنیم
 // useState
 // را داخل یک متغییر میریزیم و ریترن میکنیم
 export default function useMyComp() {
   const [count, setCount] = useState(0);
   const increment = () => setCount(count + 1)
   // به اینصورت هم میشود
   // const increment = useCallback(() => setCount(count + 1))
   // به اینصورت هم میشود
   // const increment = useCallback(() => setCount((x) => x + 1), [])
   // به اینصورت هم میشود
   // const increment = () => { setCount(count + 1) }
   // در این قسمت مقادیر مورد نیاز را ریترن میکنیم
   return { count, increment, setCount }
 }