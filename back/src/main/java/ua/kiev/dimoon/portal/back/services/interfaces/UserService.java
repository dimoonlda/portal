package ua.kiev.dimoon.portal.back.services.interfaces;

import ua.kiev.dimoon.portal.back.model.domain.User;
import ua.kiev.dimoon.portal.back.model.dto.UserProfile;
import ua.kiev.dimoon.portal.back.services.exceptions.PortalServiceException;

import java.util.Optional;
import java.util.concurrent.CompletableFuture;

/**
 * Created by lutay.d on 23.01.2017.
 */
public interface UserService {
    /**
     * Returns user info by user ID.
     * @param userId user ID.
     * @return user info.
     * @throws PortalServiceException
     */
    CompletableFuture<User> getUserById(Long userId) throws PortalServiceException;

    CompletableFuture<User> save(User user);

    CompletableFuture<Optional<UserProfile>> getUserProfile() throws PortalServiceException;
    CompletableFuture<Optional<UserProfile>> saveProfile(UserProfile userProfile);
}
