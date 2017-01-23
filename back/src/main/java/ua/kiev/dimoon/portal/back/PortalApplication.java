package ua.kiev.dimoon.portal.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import ua.kiev.dimoon.portal.back.config.FiltersConfig;
import ua.kiev.dimoon.portal.back.config.SwaggerConfig;

/**
 * Created by lutay.d on 23.01.2017.
 */
@SpringBootApplication
@Import({SwaggerConfig.class, FiltersConfig.class})
public class PortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortalApplication.class, args);
    }
}
