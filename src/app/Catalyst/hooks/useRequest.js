import axios from 'axios';

const bearerToken = 'Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo';

const useRequest = ({ baseUrl = '' }) => {
    const apiClient = axios.create({
        baseURL: baseUrl,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      return apiClient;
}

export default useRequest;