export interface Berita {
     id: Key | null | undefined;
     judul_berita: string;
     isi_berita: string;
     cover: File | string;
     file: File | string;
     tgl_publikasi: string;
   }
   