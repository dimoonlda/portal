package ua.kiev.dimoon.portal.back.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.token.grant.password.ResourceOwnerPasswordResourceDetails;
import org.springframework.security.oauth2.common.AuthenticationScheme;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
import ua.kiev.dimoon.portal.back.config.oauth2.ResourceServerConfiguration;

/**
 * Created by lutay.d on 09.03.2016.
 */
@Configuration
@EnableOAuth2Client
public class OAuthClientConfig {

    @Value("${oauth2.client.id}")
    private String clientId = "portalReact";
    @Value("${oauth2.client.secret}")
    private String clientSecret = "123456789";
    @Value("${oauth2.server.url}")
    private String tokenServer = "http://localhost:8080";

    @Bean
    public ResourceOwnerPasswordResourceDetails oauthResourceDetails() {
        MobileBankingResourceOwnerPasswordResourceDetails details = new MobileBankingResourceOwnerPasswordResourceDetails();
        details.setId(ResourceServerConfiguration.RESOURCE_ID);
        details.setClientId(clientId);
        details.setClientSecret(clientSecret);
        details.setAccessTokenUri(tokenServer);
        details.setGrantType("password");
        details.setAuthenticationScheme(AuthenticationScheme.form);
        return details;
    }

    @Bean
    public OAuth2RestTemplate usbOauthRestTemplate(OAuth2ClientContext clientContext) {
        return new OAuth2RestTemplate(oauthResourceDetails(), clientContext);
    }

    private final class MobileBankingResourceOwnerPasswordResourceDetails extends ResourceOwnerPasswordResourceDetails {
        @Override
        public boolean isClientOnly() {
            return true;
        }
    }

}
