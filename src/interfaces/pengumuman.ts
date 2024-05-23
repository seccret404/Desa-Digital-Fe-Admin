export interface Pengumuman {
  id?:string,
     judul_pengumuman: string;
     deskripsi_pengumuman: string;
     cover_pengumuman:  string | File;
     file_pengumuman:  string |File;
     tgl_publikasi: string;
   }
   