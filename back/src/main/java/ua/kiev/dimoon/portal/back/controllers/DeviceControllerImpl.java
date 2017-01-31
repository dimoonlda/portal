package ua.kiev.dimoon.portal.back.controllers;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;
import ua.kiev.dimoon.portal.back.controllers.interfaces.DeviceController;
import ua.kiev.dimoon.portal.back.model.domain.Device;
import ua.kiev.dimoon.portal.back.model.dto.BaseResult;
import ua.kiev.dimoon.portal.back.repositories.DeviceRepository;

import java.util.List;
import java.util.Objects;

/**
 * Created by lutay.d on 31.01.2017.
 */
@Api
@RestController
@RequestMapping("/devices")
public class DeviceControllerImpl implements DeviceController {

    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    @RequestMapping(method = RequestMethod.GET)
    public DeferredResult<ResponseEntity<BaseResult<List<Device>>>> getUserDevices() {
        Long userId = 1L;
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

}
