package ua.kiev.dimoon.portal.back.controllers;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;
import ua.kiev.dimoon.portal.back.controllers.interfaces.DeviceTypeController;
import ua.kiev.dimoon.portal.back.model.domain.DeviceType;
import ua.kiev.dimoon.portal.back.model.dto.BaseResult;
import ua.kiev.dimoon.portal.back.repositories.DeviceTypeRepository;

import java.util.List;
import java.util.Objects;

/**
 * Created by admin on 31.01.2017.
 */
@Api
@RestController
@RequestMapping("/deviseTypes")
public class DeviceTypeControllerImpl implements DeviceTypeController {

    private DeviceTypeRepository deviceTypeRepository;

    @Autowired
    public DeviceTypeControllerImpl setDeviceTypeRepository(DeviceTypeRepository deviceTypeRepository) {
        this.deviceTypeRepository = deviceTypeRepository;
        return this;
    }

    @Override
    @RequestMapping(method = RequestMethod.GET)
    public DeferredResult<ResponseEntity<BaseResult<List<DeviceType>>>> getDeviceTypes() {
        DeferredResult<ResponseEntity<BaseResult<List<DeviceType>>>> result = new DeferredResult();
        deviceTypeRepository.findAll().whenComplete((deviceTypes, throwable) -> {
            if (Objects.nonNull(throwable)) {
                result.setErrorResult(throwable.getCause());
            }
            if (deviceTypes.isEmpty()) {
                result.setResult(new ResponseEntity<>(HttpStatus.NOT_FOUND));
            } else {
                result.setResult(new ResponseEntity<>(new BaseResult<>(deviceTypes), HttpStatus.OK));
            }
        });
        return result;
    }
}
