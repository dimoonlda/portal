package ua.kiev.dimoon.portal.back.controllers.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.context.request.async.DeferredResult;
import ua.kiev.dimoon.portal.back.model.domain.BaseResult;
import ua.kiev.dimoon.portal.back.model.domain.User;

/**
 * Created by lutay.d on 23.01.2017.
 */
public interface UserController {
    DeferredResult<ResponseEntity<BaseResult<User>>> getUserById(Long userId);
}
