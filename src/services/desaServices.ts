import { Agenda } from '../interfaces/agenda';
import { Dusun } from '../interfaces/dusun';
import { Organisasi } from '../interfaces/organisasi';
import { PendudukDesa } from '../interfaces/penduduk';

const API_URL = 'https://desa-digital-bakend-g1hhdlvim-seccret404s-projects.vercel.app/api';

export const getDusun = async (): Promise<Dusun[]> => {
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

