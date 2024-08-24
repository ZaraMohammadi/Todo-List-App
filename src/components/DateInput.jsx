import React, { useState } from 'react';
   import DatePicker from 'react-datepicker';

   const DateInput = () => {
     const [startDate, setStartDate] = useState(null);

     return (
       <div>
         <DatePicker
           selected={startDate}
           onChange={(date) => setStartDate(date)}
           dateFormat="yyyy/MM/dd"
           placeholderText="تاریخ را انتخاب کنید"
         />
       </div>
     );
   };

   export default DateInput;