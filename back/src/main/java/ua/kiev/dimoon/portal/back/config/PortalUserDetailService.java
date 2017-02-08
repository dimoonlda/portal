package ua.kiev.dimoon.portal.back.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import ua.kiev.dimoon.portal.back.model.domain.User;
import ua.kiev.dimoon.portal.back.model.dto.PortalUserContext;

import java.util.Collections;

/**
 * Created by lutay.d on 08.02.2017.
 */
@Component
public class PortalUserDetailService implements UserDetailsService {

    Logger LOG = LoggerFactory.getLogger(PortalUserDetailService.class);

    public static final String SELECT_USER_SQL = "Select u.login, u.password, u.id\n" +
            " from users u\n" +
            " where u.login = ? ";

    @Autowired
    private JdbcTemplate portalJdbcTemplate;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = null;
        try {
            user = portalJdbcTemplate.queryForObject(SELECT_USER_SQL, new String[]{username}, new BeanPropertyRowMapper<>(User.class));
        } catch (DataAccessException e){
            LOG.error("Can't find user in database. Username: {}", username, e);
        }
        if (user!=null){
            LOG.debug("Found user {} in db", user );
            PortalUserContext userContext = new PortalUserContext(user.getLogin(),
                    user.getPassword(),
                    Collections.singletonList(new SimpleGrantedAuthority("USER")));
            userContext.setId(user.getId());
            return userContext;
        } else {
            LOG.debug("Username {} not found in db", username);
            throw new UsernameNotFoundException("User " + username + " not found in db");
        }
    }
}
