// { useState } ni React dan import qilamiz
import { useState } from "react";

const Counter = () => {
  // count uchun yangi state o'zgaruvchisini yaratami
  // boshlang'ich qiymati: 0
  const [count, setCount] = useState(0);

  // state ni yangilaydigan function (ixtiyoriy, for clean code )
  const incrementCount = () => {
    setCount(count + 1);
  };

  //   JSX ni e'lon qilamiz
  return (
    <div>
      <p>Count: {count}</p>
      {/* tugmaga onClick hodisasini bo'glaymiz */}
      {/* tugma bosilganda biz yaratgan incrementCount function ishga tushadi */}
      <button onClick={incrementCount}> Increment +1 </button>
    </div>
  );
};
export default Counter;
