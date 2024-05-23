export interface Berita {
     id?:string,
     judul_berita: string;
     isi_berita: string;
     cover: File | string;
     file: File | string;
     tgl_publikasi?: string;
   }
   