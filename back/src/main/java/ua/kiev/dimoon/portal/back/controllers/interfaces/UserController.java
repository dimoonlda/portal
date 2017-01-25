package ua.kiev.dimoon.portal.back.controllers.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.context.request.async.DeferredResult;
import ua.kiev.dimoon.portal.back.model.dto.BaseResult;
import ua.kiev.dimoon.portal.back.model.domain.User;
import ua.kiev.dimoon.portal.back.model.dto.UserProfile;

/**
 * Created by lutay.d on 23.01.2017.
 */
public interface UserController {
    DeferredResult<ResponseEntity<BaseResult<User>>> getUserById(Long userId);
    DeferredResult<ResponseEntity<BaseResult<Void>>> createOrUpdate(User user);
    DeferredResult<ResponseEntity<BaseResult<UserProfile>>> getUserProfile();
    DeferredResult<ResponseEntity<BaseResult<UserProfile>>> updateUserProfile(UserProfile userProfile);
}
