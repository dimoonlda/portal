package ua.kiev.dimoon.portal.back.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.resource.BaseOAuth2ProtectedResourceDetails;
import org.springframework.security.oauth2.client.token.DefaultAccessTokenRequest;
import org.springframework.security.oauth2.client.token.grant.password.ResourceOwnerPasswordAccessTokenProvider;
import org.springframework.security.oauth2.client.token.grant.password.ResourceOwnerPasswordResourceDetails;
import org.springframework.security.oauth2.common.DefaultOAuth2RefreshToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.common.exceptions.OAuth2Exception;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.async.DeferredResult;
import ua.kiev.dimoon.portal.back.controllers.interfaces.UserController;
import ua.kiev.dimoon.portal.back.model.domain.User;
import ua.kiev.dimoon.portal.back.model.dto.BaseResult;
import ua.kiev.dimoon.portal.back.model.dto.UserProfile;
import ua.kiev.dimoon.portal.back.services.interfaces.UserService;

import java.util.Objects;

/**
 * Created by lutay.d on 23.01.2017.
 */
@Api
@RestController
@RequestMapping("/users")
public class UserControllerImpl implements UserController {
    private static final Logger LOG = LoggerFactory.getLogger(UserControllerImpl.class);

    private UserService userService;
    private OAuth2RestTemplate usbOauthRestTemplate;

    @Autowired
    public void setUsbOauthRestTemplate(OAuth2RestTemplate usbOauthRestTemplate) {
        this.usbOauthRestTemplate = usbOauthRestTemplate;
    }
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

    @Override
    @RequestMapping(method = RequestMethod.POST)
    public DeferredResult<ResponseEntity<BaseResult<Void>>> createOrUpdate(@RequestBody User user) {
        DeferredResult<ResponseEntity<BaseResult<Void>>> deferredResult = new DeferredResult<>();
        userService.save(user).whenComplete((savedUser, throwable) -> {
            if (Objects.nonNull(throwable)) {
                deferredResult.setErrorResult(throwable.getCause());
            } else {
                deferredResult.setResult(new ResponseEntity<>(HttpStatus.CREATED));
            }
        });
        return deferredResult;
    }

    @Override
    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public DeferredResult<ResponseEntity<BaseResult<UserProfile>>> getUserProfile() {
        DeferredResult<ResponseEntity<BaseResult<UserProfile>>> deferredResult = new DeferredResult<>();
        userService.getUserProfile().whenComplete((userProfileOptional, throwable) -> {
            if (Objects.nonNull(throwable)) {
                deferredResult.setErrorResult(throwable.getCause());
            } else {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                deferredResult.setResult(userProfileOptional
                                .map(userProfile -> new ResponseEntity<>(new BaseResult<>(userProfile), HttpStatus.OK))
                                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND))
                );
            }
        });
        return deferredResult;
    }

    @Override
    @RequestMapping(value = "/profile", method = RequestMethod.POST)
    public DeferredResult<ResponseEntity<BaseResult<UserProfile>>> updateUserProfile(@RequestBody UserProfile userProfile) {
        DeferredResult<ResponseEntity<BaseResult<UserProfile>>> deferredResult = new DeferredResult<>();
        userService.saveProfile(userProfile).whenComplete((userProfileOptional, throwable) -> {
            if (Objects.nonNull(throwable)) {
                deferredResult.setErrorResult(throwable.getCause());
            } else {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                deferredResult.setResult(userProfileOptional
                        .map(savedUserProfile -> new ResponseEntity<>(new BaseResult<>(savedUserProfile), HttpStatus.OK))
                        .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND))
                );
            }
        });
        return deferredResult;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<BaseResult<OAuth2AccessToken>> login(
            @RequestParam String username,
            @RequestParam String password) {
        LOG.debug("Loggin in " + username);
        OAuth2AccessToken token;
        try {
            ResourceOwnerPasswordAccessTokenProvider provider = new ResourceOwnerPasswordAccessTokenProvider();
            ResourceOwnerPasswordResourceDetails resourceDetails = (ResourceOwnerPasswordResourceDetails) usbOauthRestTemplate.getResource();
            resourceDetails.setUsername(username);
            resourceDetails.setPassword(password);
            //usbOauthRestTemplate.getOAuth2ClientContext().setAccessToken(null);
            //token = usbOauthRestTemplate.getAccessToken();

            //We have to use provider because usbOauthRestTemplate.getAccessToken() creates session
            // and use it in order to get new or refresh access token
            token = provider.obtainAccessToken(resourceDetails, new DefaultAccessTokenRequest());
        }catch (OAuth2Exception ade){
            LOG.debug("Can't get access token for username = {}.", username, ade);
            return new ResponseEntity<>(new BaseResult<Void>()
                    .setErrorCode(ade.getHttpErrorCode())
                    .setErrorMessage(ade.getMessage()),
                    HttpStatus.valueOf(ade.getHttpErrorCode()));
        }catch (Exception e){
            LOG.debug("Unexpected exception for username = {}.", username, e);
            throw new RuntimeException("Unexpected exception.");
        }
        LOG.debug("User {}, got access token: {}", username, token.getValue());
        return new ResponseEntity<>(new BaseResult<>(token), HttpStatus.OK);
    }

    @Override
    @RequestMapping(value = "/refresh", method = RequestMethod.POST)
    public ResponseEntity<BaseResult<OAuth2AccessToken>> refresh(
            @RequestParam String refreshToken){
        LOG.debug("Refreshing access token by refresh token = {}", refreshToken);
        OAuth2AccessToken accessToken;
        try {
            ResourceOwnerPasswordAccessTokenProvider provider = new ResourceOwnerPasswordAccessTokenProvider();
            BaseOAuth2ProtectedResourceDetails resourceDetails =
                    (BaseOAuth2ProtectedResourceDetails) usbOauthRestTemplate.getResource();
            DefaultOAuth2RefreshToken token = new DefaultOAuth2RefreshToken(refreshToken);
            accessToken =
                    provider.refreshAccessToken(resourceDetails, token, new DefaultAccessTokenRequest());
        }catch (OAuth2Exception ade){
            LOG.debug("Can't get access token for refresh token = {}.", refreshToken, ade);
            return new ResponseEntity<>(new BaseResult<Void>()
                    .setErrorCode(ade.getHttpErrorCode())
                    .setErrorMessage(ade.getMessage()),
                    HttpStatus.valueOf(ade.getHttpErrorCode()));
        }catch (Exception e){
            LOG.debug("Unexpected exception for refresh token = {}.", refreshToken, e);
            throw new RuntimeException("Unexpected exception.");
        }
        LOG.debug("Sent new access token = {} for refresh token = {}", accessToken.getValue(), refreshToken);
        return new ResponseEntity<>(new BaseResult<>(accessToken), HttpStatus.OK);
    }

/*
    @Override
    @RequestMapping(value = "/{userId}/devices", method = RequestMethod.GET)
    public DeferredResult<ResponseEntity<BaseResult<List<Device>>>> getDevicesByUserId(@PathVariable Long userId) {
        DeferredResult<ResponseEntity<BaseResult<List<Device>>>> deferredResult = new DeferredResult<>();
        deviceRepository.findByUserId(userId).whenComplete((devices, throwable) -> {
            if (Objects.nonNull(throwable)) {
                deferredResult.setErrorResult(throwable.getCause());
            } else {
                deferredResult.setResult(
                        devices.isEmpty() ? new ResponseEntity<>(HttpStatus.NOT_FOUND)
                                : new ResponseEntity<>(new BaseResult<>(devices), HttpStatus.OK)
                );
            }
        });
        return deferredResult;
    }
*/
}
