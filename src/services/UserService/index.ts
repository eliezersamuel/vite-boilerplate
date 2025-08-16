import { api } from "../instance";

class UserService {
    getUsers() {
        return api.get("/users");
    }
}

export default new UserService();
