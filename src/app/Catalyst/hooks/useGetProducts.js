// import React from 'react'

// const useGetProducts = () => {
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await apiClient.get('');
    
//             if (!response || !response.data) {
//               throw new Error('No data received');
//             }
    
//             setData(response.data);
//           } catch (error) {
//             console.log(error.message);
//           }
//         };
        
//         fetchData();
//       }, []);

//   return (
//     <div>useGetProducts</div>
//   )
// }

// export default useGetProducts