export const formatDate = (date: Date): string => {
     const year = date.getFullYear();
     let month = (date.getMonth() + 1).toString();
     let day = date.getDate().toString();
   
     if (month.length === 1) {
       month = '0' + month;
     }
     if (day.length === 1) {
       day = '0' + day;
     }
   
     return `${day}-${month}-${year}`;
   };
   