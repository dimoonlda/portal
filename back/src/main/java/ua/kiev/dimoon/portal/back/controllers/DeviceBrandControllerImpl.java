package ua.kiev.dimoon.portal.back.controllers;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;
import ua.kiev.dimoon.portal.back.controllers.interfaces.DeviceBrandController;
import ua.kiev.dimoon.portal.back.model.domain.DeviceBrand;
import ua.kiev.dimoon.portal.back.model.dto.BaseResult;
import ua.kiev.dimoon.portal.back.repositories.DeviceBrandRepository;

import java.util.List;
import java.util.Objects;

/**
 * Created by admin on 31.01.2017.
 */
@Api
@RestController
@RequestMapping("/deviceBrands")
public class DeviceBrandControllerImpl implements DeviceBrandController {

    private DeviceBrandRepository deviceBrandRepository;

    @Autowired
    public DeviceBrandControllerImpl setDeviceBrandRepository(DeviceBrandRepository deviceBrandRepository) {
        this.deviceBrandRepository = deviceBrandRepository;
        return this;
    }

    @Override
    @RequestMapping(method = RequestMethod.GET)
    public DeferredResult<ResponseEntity<BaseResult<List<DeviceBrand>>>> getBrands() {
        DeferredResult<ResponseEntity<BaseResult<List<DeviceBrand>>>> result = new DeferredResult<>();
        deviceBrandRepository.findAll().whenComplete((deviceBrands, throwable) -> {
            if (Objects.nonNull(throwable)) {
                result.setErrorResult(throwable.getCause());
            }
            result.setResult(deviceBrands.isEmpty() ? new ResponseEntity<>(HttpStatus.NOT_FOUND) :
                    new ResponseEntity<>(new BaseResult<>(deviceBrands), HttpStatus.OK));
        });
        return result;
    }
}
