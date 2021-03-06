package ua.kiev.dimoon.portal.back.config.oauth2;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import ua.kiev.dimoon.portal.back.config.OAuthClientConfig;

/**
 * Created by lutay.d on 08.02.2017.
 */
@Configuration
@EnableResourceServer
@Import({OAuthClientConfig.class})
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {
    public static final String RESOURCE_ID = "portal";

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
        resources.resourceId(RESOURCE_ID);
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/users/login").permitAll()
                .antMatchers("/users/refresh").permitAll()
                .antMatchers("/api-docs/**").permitAll()
                .antMatchers("/v2/api-docs/**").permitAll()
                .antMatchers("/swagger**").permitAll()
                .antMatchers("/webjars/**").permitAll()
                .antMatchers("/configuration/**").permitAll()
                .antMatchers("/images/**").permitAll()
                .antMatchers("/**").permitAll()
                .antMatchers("/**").authenticated()
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
}
