package ua.kiev.dimoon.portal.back.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by lutay.d on 25.01.2017.
 */
@Configuration
@EnableJpaRepositories(basePackages = {"ua.kiev.dimoon.portal.back.repositories"})
@EntityScan(
        basePackages = {"ua.kiev.dimoon.portal.back.model.domain"},
        basePackageClasses = {Jsr310JpaConverters.class}
        )
public class JpaConfig {
}
