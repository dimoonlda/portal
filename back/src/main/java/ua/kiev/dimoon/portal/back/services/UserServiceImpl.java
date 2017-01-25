package ua.kiev.dimoon.portal.back.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.kiev.dimoon.portal.back.model.domain.User;
import ua.kiev.dimoon.portal.back.model.dto.UserProfile;
import ua.kiev.dimoon.portal.back.repositories.UserRepository;
import ua.kiev.dimoon.portal.back.services.exceptions.PortalServiceException;
import ua.kiev.dimoon.portal.back.services.interfaces.UserService;

import java.time.LocalDate;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

/**
 * Created by lutay.d on 23.01.2017.
 */
@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
        return this;
    }

    @Override
    public CompletableFuture<User> getUserById(Long userId) throws PortalServiceException {
        return userRepository.findOneById(userId);
    }

    @Override
    public CompletableFuture<User> save(User user) {
        return CompletableFuture.supplyAsync(() -> userRepository.save(user));
    }

    @Override
    public CompletableFuture<Optional<UserProfile>> getUserProfile() throws PortalServiceException {
        return userRepository.findOneById(1L)
                .thenApply(user -> {
                    if (Objects.isNull(user)) {
                        return Optional.empty();
                    }
                    return Optional.of(new UserProfile(user));
                });
    }

    @Override
    public CompletableFuture<Optional<UserProfile>> saveProfile(UserProfile userProfile) {
        return userRepository.findOneById(userProfile.getId())
                .thenApply(user -> {
                    if (Objects.isNull(user)) {
                        return Optional.empty();
                    }
                    user.setDateOfBirth(userProfile.getDateOfBirth())
                            .setEmail(userProfile.getEmail())
                            .setFirstName(userProfile.getFirstName())
                            .setLastName(userProfile.getLastName());
                    userRepository.save(user);
                    return Optional.of(userProfile);
                });
    }
}
