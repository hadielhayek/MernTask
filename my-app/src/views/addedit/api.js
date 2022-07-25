import axios from '../../plugins/http.service';
const axiosFunction = {
    postData(data) {
        return axios.post("post",data);
    },
    getPostById(id) {
        return axios.get(`post/${id}`);
    },
    editPost(data,id) {
        return axios.put(`post/${id}`,data);
    },
};
export default axiosFunction;