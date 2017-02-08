package ua.kiev.dimoon.portal.back.model.dto;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

/**
 * Created by lutay.d on 08.02.2017.
 */
public class PortalUserContext extends User {

    private Long id;

    public PortalUserContext(String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
    }

    public Long getId() {
        return id;
    }

    public PortalUserContext setId(Long id) {
        this.id = id;
        return this;
    }

    @Override
    public String toString() {
        return "PortalUserContext{" +
                "id=" + id +
                "} " + super.toString();
    }
}
