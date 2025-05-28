package ch.mdma.mapper;

import ch.mdma.rest.generated.model.User;

public class UserMapper {

    private UserMapper() {}

    public static User toRest(ch.mdma.data.model.entity.User entity) {
        if (entity == null) return null;

        return new User(
                entity.getUsername(),
                entity.getEmail(),
                entity.getFirstName(),
                entity.getLastName(),
                entity.getAboutMe()
        );
    }
}
