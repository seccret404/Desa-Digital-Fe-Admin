import { Agenda } from '../interfaces/agenda';
import { Berita } from '../interfaces/berita';
import { Dusun } from '../interfaces/dusun';
import { Laporan } from '../interfaces/laporan';
import { Organisasi } from '../interfaces/organisasi';
import { Pemerintah } from '../interfaces/pemerintah';
import { PendudukDesa } from '../interfaces/penduduk';
import { Pengumuman } from '../interfaces/pengumuman';

// const API_URL = 'https://desa-digital-bakend-jf9ckkwwo-seccret404s-projects.vercel.app/api';
const API_URL = 'http://localhost:3000/api';

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


export const addPemerintah = async(data:Pemerintah): Promise<void>=>{
  try{
    await fetch(`${API_URL}/pemerintah`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(data),
    });
  }catch(error){
    console.error('error:', error);
    throw new Error('Gagal Menambah Pemerintah');
  }
}


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

