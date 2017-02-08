package ua.kiev.dimoon.portal.back.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.approval.ApprovalStore;
import org.springframework.security.oauth2.provider.approval.TokenApprovalStore;
import org.springframework.security.oauth2.provider.approval.TokenStoreUserApprovalHandler;
import org.springframework.security.oauth2.provider.request.DefaultOAuth2RequestFactory;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;
import ua.kiev.dimoon.portal.back.config.oauth2.AuthorizationServerConfiguration;
import ua.kiev.dimoon.portal.back.config.oauth2.ResourceServerConfiguration;

import javax.sql.DataSource;

/**
 * Created by lutay.d on 08.02.2017.
 */
@Configuration
@EnableWebSecurity
@Import({AuthorizationServerConfiguration.class, ResourceServerConfiguration.class})
public class OAuth2SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private static final String DEFAULT_ACCESS_TOKEN_FROM_AUTHENTICATION_SELECT_STATEMENT =
            "select token_id, token from oauth_access_token where authentication_id = ? for update";

    @Autowired
    private DataSource dataSource;

    @Autowired
    private ClientDetailsService clientDetailsService;

    @Autowired
    private PortalUserDetailService portalUserDetailService;
    
    @Bean
    public JdbcTemplate portalJdbcTemplate(){
        return new JdbcTemplate(this.dataSource);
    }

    @Bean
    protected TokenStore tokenStore(){
        JdbcTokenStore tokenStore = new JdbcTokenStore(dataSource);
        tokenStore.setSelectAccessTokenFromAuthenticationSql(DEFAULT_ACCESS_TOKEN_FROM_AUTHENTICATION_SELECT_STATEMENT);
        return tokenStore;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {
/*
        auth.inMemoryAuthentication()
                .withUser("john").password("123").roles("USER");
*/
        auth.authenticationProvider(portalAuthenticationProvider());/*jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery("select login as username,password,true as enabled from users where login = ?")
                .authoritiesByUsernameQuery("select login as username, 'USER' as authority from users where login = ?");*/
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean()
            throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public DaoAuthenticationProvider portalAuthenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(portalUserDetailService);
        return provider;
    }

    @Bean
    @Autowired
    public TokenStoreUserApprovalHandler userApprovalHandler(TokenStore tokenStore){
        TokenStoreUserApprovalHandler handler = new TokenStoreUserApprovalHandler();
        handler.setTokenStore(tokenStore);
        handler.setRequestFactory(new DefaultOAuth2RequestFactory(clientDetailsService));
        handler.setClientDetailsService(clientDetailsService);
        return handler;
    }

    @Bean
    @Autowired
    public ApprovalStore approvalStore(TokenStore tokenStore) throws Exception {
        TokenApprovalStore store = new TokenApprovalStore();
        store.setTokenStore(tokenStore);
        return store;
    }
}
