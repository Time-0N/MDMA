package ch.mdma.security;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import ch.mdma.data.model.entity.User;

import java.util.Collection;

public class UserAuthentication extends AbstractAuthenticationToken {
    private final User user;

    public UserAuthentication(User user, Collection<? extends GrantedAuthority> authorities) {
        super(authorities);
        this.user = user;
        setAuthenticated(true);
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public Object getPrincipal() {
        return user;
    }
}

