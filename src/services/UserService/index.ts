import { api } from "../instance";
import { CustomDecorator } from "./decorator";

class UserService {
    @CustomDecorator()
    getUsers() {
        return api.get("/users");
    }
}

export default new UserService();
