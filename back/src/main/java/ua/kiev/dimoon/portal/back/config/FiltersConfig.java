package ua.kiev.dimoon.portal.back.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by lutay.d on 09.06.2016.
 */
@Configuration
public class FiltersConfig {
    final static private Logger LOG =
            LoggerFactory.getLogger(FiltersConfig.class);

    @Bean
    public Filter SimpleCORSFilter() {
        LOG.debug("Making CORS filter");
        return new Filter() {
            public void doFilter (ServletRequest req, ServletResponse res, FilterChain
                    chain)throws IOException, ServletException {
                HttpServletResponse response = (HttpServletResponse) res;
                response.setHeader("Access-Control-Allow-Origin", "*");
                response.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH, OPTIONS");
                response.setHeader("Access-Control-Max-Age", "3600");
                response.setHeader("Access-Control-Allow-Headers", "Content-Type, api_key, Authorization");
                chain.doFilter(req, res);
            }

            public void init (FilterConfig filterConfig){}

            public void destroy () {}
        };
    }
}
