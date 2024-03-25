
import axiosClient from "./axiosClient"

  const productApi = {
    getAll()
    {
        const url ='/Products'
        return axiosClient.get(url);
    },
    getById(id)
    {
      const url = `/Products/${id}`;
      return axiosClient.get(url)
    }
}
export default productApi;