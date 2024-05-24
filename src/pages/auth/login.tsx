import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TextField } from "@mui/material";
import logo from '../../../public/assets/real.png';
import { login } from '../../services/desaServices';
import { useNavigate } from 'react-router-dom';
import { LoginResponse } from '../../interfaces/auth';

interface LoginProps {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export default function Login({ setIsLoggedIn }: LoginProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            navigate('/dashboard');
        }
    }, [setIsLoggedIn, navigate]);

    const handleLogin = async () => {
        try {
            const response: LoginResponse = await login(username, password);
            const { token } = response;
            localStorage.setItem('token', token);
            setIsLoggedIn(true);
            navigate('/dashboard');
        } catch (error) {
            setError('Username atau password salah.');
            localStorage.removeItem('token');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-[#F5F5F5]">
            <div className="w-[500px] h-[400px] bg-[#ffffff] p-4 rounded-[8px]">
                <div className="flex flex-col space-y-4 text-black">
                    <div className="flex justify-center">
                        <img src={logo} alt="" />
                    </div>
                    <div className="">
                        <div className="font-medium text-[18px] text-center">Selamat Datang di Desa Digital</div>
                        <div className="text-[14px] text-[#8D8C8C] text-center">Silahkan login untuk mulai mengelola informasi desa ! </div>
                    </div>
                    <TextField
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="outlined-basic"
                        label="Nama pengguna"
                        variant="outlined"
                        className="bg-[#FFFFFF] rounded-[5px]"
                    />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="outlined-basic"
                        label="Kata sandi"
                        type="password"
                        variant="outlined"
                        className="bg-[#FFFFFF] rounded-[5px]"
                    />
                    {error && <div className="text-red-500 text-center">{error}</div>}
                    <button onClick={handleLogin} className="bg-blue-500 text-white py-2 rounded">Login</button>
                </div>
            </div>
        </div>
    );
}
