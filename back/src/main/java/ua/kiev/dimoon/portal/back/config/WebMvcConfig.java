package ua.kiev.dimoon.portal.back.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by lutay.d on 23.01.2017.
 */
@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    // During development, webpack server runs on localhost:3000
    // Make the browser happy by returning CORS headers in this case
//    @Bean
//    @Profile("dev")
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurerAdapter() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**").allowedOrigins("http://localhost:3000");
//            }
//        };
//    }
}
