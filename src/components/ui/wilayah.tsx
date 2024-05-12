import React, { useEffect, useRef, useState } from 'react';

interface WilayahDropdownProps {
    label: string;
    id: string;
    url: string;
    onChange: (value: string) => void;
}

const WilayahDropdown: React.FC<WilayahDropdownProps> = ({ label, id, url, onChange }) => {
    const [options, setOptions] = useState<{ id: string; text: string }[]>([]);
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        const selectElement = selectRef.current;
        if (!selectElement) return;

        // Initialize select2
        $(selectElement).select2({
            placeholder: `Pilih ${label}`,
            width: '100%',
            data: options, // Pass the options data directly to select2
        });

        // Handle change event
        $(selectElement).on('change', function () {
            onChange($(this).val() as string);
        });

        // Load data
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const loadedOptions = data.map(({ id, nama }: { id: string; nama: string }) => ({ id, text: nama }));
                setOptions([{ id: '', text: `Pilih ${label}` }, ...loadedOptions]);
            });

        // Cleanup on unmount
        return () => {
            $(selectElement).off('change').select2('destroy');
        };
    }, [label, url, onChange, options]);

    return (
        <div>
            <label>{label}</label>
            <select ref={selectRef} id={id}></select>
        </div>
    );
};

export default WilayahDropdown;
