import  { useState, useEffect } from 'react'
import useRequest from '../hooks/useRequest';

const useGetMaterials = () => {
    const [materials, setMaterials] = useState(null);

    const apiClient = useRequest({ baseUrl : 'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material' });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await apiClient.get('');
  
          if (!response || !response.data) {
            throw new Error('No data received');
          }
  
          setMaterials(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };
      
      fetchData();
    }, []);

  return { materials : materials?.material };
}

export default useGetMaterials;