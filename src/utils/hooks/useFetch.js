import { useState } from 'react';
import { apiInstance } from '../axios';

function useFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFetch = async (providedUrl, params) => {
        setLoading(true)
        try {
            const resp = await apiInstance.get(providedUrl, { params: params });
            setData(resp?.data)
            setError(null)
        }
        catch (err) {
            setData(null)
            setError(err)
        }
        setLoading(false)
    }
    
    return { data, loading, error, handleFetch }
}

export default useFetch;