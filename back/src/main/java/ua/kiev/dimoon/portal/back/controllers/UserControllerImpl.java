package ua.kiev.dimoon.portal.back.controllers;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;
import ua.kiev.dimoon.portal.back.controllers.interfaces.UserController;
import ua.kiev.dimoon.portal.back.model.domain.BaseResult;
import ua.kiev.dimoon.portal.back.model.domain.User;
import ua.kiev.dimoon.portal.back.services.interfaces.UserService;

import java.util.Objects;

/**
 * Created by lutay.d on 23.01.2017.
 */
@Api
@RestController
@RequestMapping("/users")
public class UserControllerImpl implements UserController {

    private UserService userService;

    @Autowired
    public UserControllerImpl setUserService(UserService userService) {
        this.userService = userService;
        return this;
    }

    @RequestMapping(value = "/{userId}", method = RequestMethod.GET)
    @Override
    public DeferredResult<ResponseEntity<BaseResult<User>>> getUserById(@PathVariable Long userId) {
        DeferredResult<ResponseEntity<BaseResult<User>>> deferredResult = new DeferredResult<>();
        userService.getUserById(userId).whenComplete((user, throwable) -> {
           if (Objects.nonNull(throwable)) {
               deferredResult.setErrorResult(throwable.getCause());
           } else {
               if (Objects.isNull(user)) {
                   deferredResult.setResult(new ResponseEntity<>(HttpStatus.NOT_FOUND));
               } else {
                   deferredResult.setResult(new ResponseEntity<>(new BaseResult<>(user), HttpStatus.OK));
               }
           }
        });
        return deferredResult;
    }
}
