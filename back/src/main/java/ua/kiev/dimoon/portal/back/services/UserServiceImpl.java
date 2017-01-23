package ua.kiev.dimoon.portal.back.services;

import org.springframework.stereotype.Service;
import ua.kiev.dimoon.portal.back.model.domain.User;
import ua.kiev.dimoon.portal.back.services.exceptions.PortalServiceException;
import ua.kiev.dimoon.portal.back.services.interfaces.UserService;

import java.time.LocalDate;
import java.util.concurrent.CompletableFuture;

/**
 * Created by lutay.d on 23.01.2017.
 */
@Service
public class UserServiceImpl implements UserService {
    @Override
    public CompletableFuture<User> getUserById(Long userId) throws PortalServiceException {
        if (userId.equals(100L)) {
            return CompletableFuture.completedFuture(new User()
                    .setId(100L)
                    .setFirstName("Dmytro")
                    .setLastName("Dmytrenko")
                    .setEmail("test@gmail.com")
                    .setLogin("dimich")
                    .setPassword("qwerty12345")
                    .setDateOfBirth(LocalDate.now()));
        } else {
            return CompletableFuture.completedFuture(null);
        }
    }
}
