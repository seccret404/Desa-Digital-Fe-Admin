export interface Profil{
     id?:string,
     nama_desa:string,
     alamat_kantor:string,
     kecamatan:string,
     kabupaten:string,
     provinsi:string,
     profil_singkat:string,
     gambar_desa:string | File,
     batas_barat:string,
     batas_timur:string,
     batas_utara:string,
     batas_selatan:string,
     sejarah_desa:string,
     visi_desa:string,
     misi_desa:string,
}