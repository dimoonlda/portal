package ua.kiev.dimoon.portal.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import ua.kiev.dimoon.portal.back.config.FiltersConfig;
import ua.kiev.dimoon.portal.back.config.JpaConfig;
import ua.kiev.dimoon.portal.back.config.OAuth2SecurityConfiguration;
import ua.kiev.dimoon.portal.back.config.SwaggerConfig;

/**
 * Created by lutay.d on 23.01.2017.
 */
@SpringBootApplication
@Import({JpaConfig.class, SwaggerConfig.class, FiltersConfig.class, OAuth2SecurityConfiguration.class})
public class PortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortalApplication.class, args);
    }
}
