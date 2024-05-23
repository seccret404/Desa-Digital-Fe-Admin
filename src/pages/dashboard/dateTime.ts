export function getCurrentDateTime() {
     const now = new Date();
     const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
     const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
     
     const day = days[now.getDay()];
     const date = now.getDate();
     const month = months[now.getMonth()];
     const year = now.getFullYear();
     
     let hours = now.getHours();
     const minutes = String(now.getMinutes()).padStart(2, '0');
     const seconds = String(now.getSeconds()).padStart(2, '0');
     
     const ampm = hours >= 12 ? 'PM' : 'AM';
     hours = hours % 12;
     hours = hours ? hours : 12; 
     const formattedHours = String(hours).padStart(2, '0');
 
     return {
         dateString: `${day}, ${date} ${month} ${year}`,
         timeString: `${formattedHours}:${minutes}:${seconds} ${ampm}`
     };
 }
 