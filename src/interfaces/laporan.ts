export interface Laporan {
     id?:string,
     id_agenda: string,
     jumlah_peserta: string,
     lokasi_kegiatan: string,
     donasi: string,
     tgl_realisasi: string,
     anggaran_desa: string,
     status_kegiatan: string,
     dokumentasi: File | string,
     koordinator: string
}
