import axios from '../../plugins/http.service';
const axiosFunction = {
    getAllPosts() {
        return axios.get("post");
    },
    deletePost(id) {
        return axios.delete(`post/${id}`);
    },
};
export default axiosFunction;