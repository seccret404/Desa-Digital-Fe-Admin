export interface Organisasi{
     id?:string,
     nama_lembaga: string,
     singkatan: string,
     alamat_organisasi: string,
     tahun_berdiri:string,
     ketua:string,
     wakil_ketua:string,
     sekretaris:string,
     bendahara:string,
     logo_organisasi: File | string,
     jumlah_anggota:string,
     deskripsi:string,
}