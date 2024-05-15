import { Agenda } from '../interfaces/agenda';
import { Anggaran } from '../interfaces/anggaran';
import { Bantuan } from '../interfaces/bantuan';
import { Berita } from '../interfaces/berita';
import { Dusun } from '../interfaces/dusun';
import { Tugas } from '../interfaces/jabatan';
import { Laporan } from '../interfaces/laporan';
import { Organisasi } from '../interfaces/organisasi';
import { Pemerintah } from '../interfaces/pemerintah';
import { PendudukDesa } from '../interfaces/penduduk';
import { Penerima } from '../interfaces/penerimaBantuan';
import { Pengumuman } from '../interfaces/pengumuman';
import { Profil } from '../interfaces/profil';

// const API_URL = 'https://desa-digital-bakend-jf9ckkwwo-seccret404s-projects.vercel.app/api';
// const API_URL = 'http://localhost:3000/api';
const API_URL = 'https://desa-digital-bakend-production.up.railway.app/api';

//
// GET API
//
export const getDusun = async (): Promise<Dusun[]> =>{
  try {
    const response = await fetch(`${API_URL}/dusun`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Dusun[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data dusun');
  }
};

export const getAnggaran = async (): Promise<Anggaran[]> =>{
  try {
    const response = await fetch(`${API_URL}/anggaran`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Anggaran[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data anggaran');
  }
};

export const getBerita = async (): Promise<Berita[]> =>{
  try{
    const response = await fetch(`${API_URL}/berita`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Berita[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
}
export const getProfil = async (): Promise<Profil[]> => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data as Profil[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data profil');
  }
};
export const getLaporanAgenda = async (): Promise<Laporan[]> =>{
  try{
    const response = await fetch(`${API_URL}/agenda/laporan`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Laporan[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
}
export const getPengumuman = async (): Promise<Pengumuman[]> =>{
  try{
    const response = await fetch(`${API_URL}/pengumuman`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Pengumuman[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data pengumuman');
  }
}

export const getPemerintah = async (): Promise<Pemerintah[]> =>{
  try{
    const response = await fetch(`${API_URL}/pemerintah`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Pemerintah[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data pemerintah');
  }
}

export const getPenduduk = async (): Promise<PendudukDesa[]> =>{
  try{
    const response = await  fetch(`${API_URL}/penduduk`,{
      headers: {
        'Origin': 'http://localhost:3000'
      }
    }); if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as PendudukDesa[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data dusun');
  }
}
export const getBantuan = async (): Promise<Bantuan[]> =>{
  try{
    const response = await  fetch(`${API_URL}/bantuan`,{
      headers: {
        'Origin': 'http://localhost:3000'
      }
    }); if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Bantuan[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data bantuan');
  }
}

export const getOrganisasi = async(): Promise<Organisasi[]> =>{
  try{
    const response = await  fetch(`${API_URL}/organisasi`,{
    headers: {
      'Origin': 'http://localhost:3000'
    }
  }); if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data as Organisasi[];
} catch (error) {
  console.error('Error:', error);
  throw new Error('Gagal mendapatkan data organisasi');
}
}

export const getAgenda = async(): Promise<Agenda[]> =>{
  try{
    const response = await  fetch(`${API_URL}/agenda`,{
    headers: {
      'Origin': 'http://localhost:3000'
    }
  }); if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data as Agenda[];
} catch (error) {
  console.error('Error:', error);
  throw new Error('Gagal mendapatkan data organisasi');
}


}
export const getTugas = async(): Promise<Tugas[]> =>{
  try{
    const response = await  fetch(`${API_URL}/tugas`,{
    headers: {
      'Origin': 'http://localhost:3000'
    }
  }); if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data as Tugas[];
} catch (error) {
  console.error('Error:', error);
  throw new Error('Gagal mendapatkan data tugas');
}
}

export const getPenerimaBantuan = async(): Promise<Penerima[]> =>{
  try{
    const response = await  fetch(`${API_URL}/penerima-bantuan`,{
    headers: {
      'Origin': 'http://localhost:3000'
    }
  }); if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data as Penerima[];
} catch (error) {
  console.error('Error:', error);
  throw new Error('Gagal mendapatkan data organisasi');
}

}

//
// Add API
//

export const addAgenda = async (data: Agenda): Promise<void> => {
  try {
    await fetch(`${API_URL}/agenda`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Origin': 'http://localhost:3000'
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan agenda');
  }
}

export const addBerita = async (data: Berita): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('judul_berita', data.judul_berita);
    formData.append('isi_berita', data.isi_berita);
    formData.append('cover', data.cover);
    formData.append('file', data.file);
    
    await fetch(`${API_URL}/create`, {
      method: 'POST',
      body: formData,
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan berita');
  }
}
export const addOrganisasi = async (data: Organisasi): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('nama_lembaga', data.nama_lembaga);
    formData.append('singkatan', data.singkatan);
    formData.append('alamat_organisasi', data.alamat_organisasi);
    formData.append('tahun_berdiri', data.tahun_berdiri);
    formData.append('ketua', data.ketua);
    formData.append('wakil_ketua', data.wakil_ketua);
    formData.append('sekretaris', data.sekretaris);
    formData.append('bendahara', data.bendahara);
    formData.append('jumlah_anggota', data.jumlah_anggota);
    formData.append('deskripsi', data.deskripsi);
    if (data.logo_organisasi instanceof File) {
      formData.append('logo_organisasi', data.logo_organisasi);
    } else if (typeof data.logo_organisasi === 'string') {
      formData.append('logo_organisasi', data.logo_organisasi);
    }
    await fetch(`${API_URL}/organisasi`, {
      method: 'POST',
      body: formData,
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan berita');
  }
}
export const addPemerintah = async (data: Pemerintah): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('nama', data.nama);
    formData.append('nik', data.nik);
    formData.append('jabatan', data.jabatan);
    formData.append('tahun_mulai', data.tahun_mulai);
    formData.append('tahun_selesai', data.tahun_selesai);
    if (data.profil instanceof File) {
      formData.append('profil', data.profil);
    } else if (typeof data.profil === 'string') {
      formData.append('profil_url', data.profil);
    }
    
    const response = await fetch(`${API_URL}/pemerintah`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Response from server:", responseData); // Log successful response
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan pemerintah');
  }
}


export const addProfil= async (data: Profil): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('nama_desa', data.nama_desa);
    formData.append('alamat_kantor', data.alamat_kantor);
    formData.append('kecamatan', data.kecamatan);
    formData.append('kabupaten', data.kabupaten);
    formData.append('provinsi', data.provinsi);
    formData.append('profil_singkat', data.profil_singkat);
    formData.append('gambar_desa', data.gambar_desa);
    formData.append('batas_barat', data.batas_barat);
    formData.append('batas_timur', data.batas_timur);
    formData.append('batas_utara', data.batas_utara);
    formData.append('batas_selatan', data.batas_selatan);
    formData.append('sejarah_desa', data.sejarah_desa);
    formData.append('visi_desa', data.visi_desa);
    formData.append('misi_desa', data.misi_desa);
    
    await fetch(`${API_URL}/profile`, {
      method: 'POST',
      body: formData,
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan profil');
  }
}

export const addPengumuman = async (data: Pengumuman): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('judul_pengumuman', data.judul_pengumuman);
    formData.append('deskripsi_pengumuman', data.deskripsi_pengumuman);
    formData.append('cover_pengumuman', data.cover_pengumuman);
    formData.append('file_pengumuman', data.file_pengumuman);
    
    await fetch(`${API_URL}/create/pengumuman`, {
      method: 'POST',
      body: formData,
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan pengumuman');
  }
}




export const addDusun = async (data: Dusun): Promise<void> =>{
  try{
    await fetch(`${API_URL}/dusun`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

  }
  catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan agenda');
  }
};
export const addAnggaran = async (data: Anggaran): Promise<void> =>{
  try{
    await fetch(`${API_URL}/anggaran`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

  }
  catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan anggaran');
  }
};
export const addTugas = async (data: Tugas): Promise<void> =>{
  try{
    await fetch(`${API_URL}/tugas`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

  }
  catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan tugas');
  }
};
export const addPenerima = async (data: Penerima): Promise<void> =>{
  try{
    await fetch(`${API_URL}/penerima-bantuan`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

  }
  catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan penerima');
  }
};
export const addBantuan = async (data: Bantuan): Promise<void> =>{
  try{
    await fetch(`${API_URL}/bantuan`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

  }
  catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan agenda');
  }
};
export const addLaporan = async (data: Laporan): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('id_agenda', data.id_agenda);
    formData.append('jumlah_peserta', data.jumlah_peserta);
    formData.append('lokasi_kegiatan', data.lokasi_kegiatan);
    formData.append('donasi', data.donasi);
    formData.append('tgl_realisasi', data.tgl_realisasi);
    formData.append('anggaran_desa', data.anggaran_desa);
    formData.append('status_kegiatan', data.status_kegiatan);
    formData.append('koordinator', data.koordinator);

    if (Array.isArray(data.dokumentasi)) {
      data.dokumentasi.forEach((file, index) => {
        formData.append(`dokumentasi_${index}`, file);
      });
    } else {
      formData.append('dokumentasi', data.dokumentasi);
    }

    const response = await fetch(`${API_URL}/agenda/laporan`, {
      method: 'POST',
      body: formData,
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Gagal menambahkan laporan');
    }

    console.log('Laporan berhasil ditambahkan!');
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan laporan');
  }
};

export const addPenduduk = async (data: PendudukDesa): Promise<void> => {
  try {
    await fetch(`${API_URL}/penduduk`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambah penduduk');
  }
};

//
//get bY ID
//
export const getPendudukById = async (id: string): Promise<PendudukDesa> => {
  try {
    const response = await fetch(`${API_URL}/penduduk/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as PendudukDesa;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data penduduk');
  }
};
export const getAnggaranById = async (id: string): Promise<Anggaran> => {
  try {
    const response = await fetch(`${API_URL}/anggaran/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Anggaran;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data anggaran');
  }
};

export const getBeritaById= async (id: string): Promise<Berita> => {
  try {
    const response = await fetch(`${API_URL}/berita/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Berita;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
};
export const getOrganisasiById= async (id: string): Promise<Organisasi> => {
  try {
    const response = await fetch(`${API_URL}/organisasi/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Organisasi;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
};
export const getProfilById= async (id: string): Promise<Profil> => {
  try {
    const response = await fetch(`${API_URL}/profile/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Profil;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
};
export const getPengumumanById= async (id: string): Promise<Pengumuman> => {
  try {
    const response = await fetch(`${API_URL}/pengumuman/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Pengumuman;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
};

export const getDusunById = async(id: string): Promise<Dusun> =>{
  try{
    const response = await fetch(`${API_URL}/dusun/${id}`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if(!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Dusun;
  }catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data dusun');
  }
}
export const getAgendaById = async(id: string): Promise<Agenda> =>{
  try{
    const response = await fetch(`${API_URL}/agenda/${id}`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if(!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Agenda;
  }catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data agenda');
  }
}
export const getLaporanById = async(id: string): Promise<Laporan> =>{
  try{
    const response = await fetch(`${API_URL}/agenda/laporan/${id}`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if(!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Laporan;
  }catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data laporan agenda');
  }
}

//
//UPDATE API
//
export const updatePenduduk = async (id: string, data: PendudukDesa): Promise<void> => {
  try {
    await fetch(`${API_URL}/penduduk/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal memperbarui penduduk');
  }
};
export const updateAnggaran = async (id: string, data: Anggaran): Promise<void> => {
  try {
    await fetch(`${API_URL}/anggaran/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal memperbarui anggaran');
  }
};

export const updateDusun = async(id: string, data: Dusun): Promise<void>=>{
  try{
    await fetch(`${API_URL}/dusun/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }catch(error){
    console.error('errror: ' , error);
    throw new Error('Gagal memperbaharui dusun');
  }
}
export const updateAgenda = async(id: string, data: Agenda): Promise<void>=>{
  try{
    await fetch(`${API_URL}/agenda/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }catch(error){
    console.error('errror: ' , error);
    throw new Error('Gagal memperbaharui agenda');
  }
}


export const updateBerita = async (id: string, data: Berita): Promise<void> => {
  try {
    const formData = new FormData();

    // Append new data to FormData
    formData.append('judul_berita', data.judul_berita);
    formData.append('isi_berita', data.isi_berita);
    if (data.cover) {
      formData.append('cover', data.cover);
    }
    if (data.file) {
      formData.append('file', data.file);
    }

    await fetch(`${API_URL}/berita/${id}`, {
      method: 'PUT',
      body: formData,
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal memperbarui berita');
  }
}


export const updatePengumuman = async (id: string, data: Pengumuman): Promise<void> => {
  try {
    const formData = new FormData();

    // Append new data to FormData
    formData.append('judul_pengumuman', data.judul_pengumuman);
    formData.append('deskripsi_pengumuman', data.deskripsi_pengumuman);
    if (data.cover_pengumuman) {
      formData.append('cover_pengumuman', data.cover_pengumuman);
    }
    if (data.file_pengumuman) {
      formData.append('file_pengumuman', data.file_pengumuman);
    }

    await fetch(`${API_URL}/pengumuman/${id}`, {
      method: 'PUT',
      body: formData,
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal memperbarui pengumuman');
  }
}


export const updateOrganisasi = async (id: string, data: Organisasi): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('nama_lembaga', data.nama_lembaga);
    formData.append('singkatan', data.singkatan);
    formData.append('alamat_organisasi', data.alamat_organisasi);
    formData.append('tahun_berdiri', data.tahun_berdiri);
    formData.append('ketua', data.ketua);
    formData.append('wakil_ketua', data.wakil_ketua);
    formData.append('sekretaris', data.sekretaris);
    formData.append('bendahara', data.bendahara);
    formData.append('jumlah_anggota', data.jumlah_anggota);
    formData.append('deskripsi', data.deskripsi);

    if (data.logo_organisasi instanceof File) {
      formData.append('logo_organisasi', data.logo_organisasi);
    } else if (typeof data.logo_organisasi === 'string') {
      formData.append('logo_organisasi', data.logo_organisasi);
    }

    const response = await fetch(`http://localhost:3000/api/organisasi/${id}`, {
      method: 'PUT',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to update organisasi');
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal memperbarui organisasi');
  }
};

export const updateProfil = async (id: string, data: Profil): Promise<void> => {
  try {
    const formData = new FormData();

    // Append data to FormData
    formData.append('nama_desa', data.nama_desa);
    formData.append('alamat_kantor', data.alamat_kantor);
    formData.append('kecamatan', data.kecamatan);
    formData.append('kabupaten', data.kabupaten);
    formData.append('provinsi', data.provinsi);
    formData.append('profil_singkat', data.profil_singkat);
    formData.append('visi_desa', data.visi_desa);
    formData.append('misi_desa', data.misi_desa);
    formData.append('sejarah_desa', data.sejarah_desa);
    formData.append('batas_barat', data.batas_barat);
    formData.append('batas_utara', data.batas_utara);
    formData.append('batas_selatan', data.batas_selatan);
    
    // Append gambar_desa if it exists
    if (data.gambar_desa instanceof File) {
      formData.append('gambar_desa', data.gambar_desa);
    }

    // Send the PUT request to update the profile
    const response = await fetch(`http://localhost:3000/api/profile/${id}`, {
      method: 'PUT',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Gagal memperbarui profil');
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal memperbarui profil');
  }
}

