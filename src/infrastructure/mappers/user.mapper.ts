import { UserEntity } from "@/domain/entities/user.entity.js";
import { CustomError } from "@/domain/errors/custom.error.js";

export class UserMapper {
    static userEntityFromObject(obj: { [key: string]: any; }): UserEntity {
        const { id, _id, name, email, password, roles } = obj;

        if (!id && !_id) {
            throw CustomError.badRequest("User object must have either 'id' or '_id' property.");
        }

        if (!name) throw CustomError.badRequest("User object must have 'name' property.");
        if (!email) throw CustomError.badRequest("User object must have 'email' property.");
        if (!password) throw CustomError.badRequest("User object must have 'password' property.");
        if (!roles) throw CustomError.badRequest("User object must have 'roles' property.");

        return new UserEntity(
            id || _id,
            name,
            email,
            password,
            Array.isArray(roles) ? roles : [roles],
            obj.img
        );

    }
}