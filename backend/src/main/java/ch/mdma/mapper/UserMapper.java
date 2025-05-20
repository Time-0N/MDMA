package ch.mdma.mapper;

import ch.mdma.rest.generated.model.User;

public class UserMapper {

    private UserMapper() {}

    public static User toRest(ch.mdma.data.model.entity.User entity) {
        if (entity == null) return null;

        User dto = new User();
        dto.setUsername(entity.getUsername());
        dto.setEmail(entity.getEmail());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        return dto;
    }
}
