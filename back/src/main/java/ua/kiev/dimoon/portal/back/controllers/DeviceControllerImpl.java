package ua.kiev.dimoon.portal.back.controllers;

import io.swagger.annotations.Api;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.async.DeferredResult;
import ua.kiev.dimoon.portal.back.controllers.interfaces.DeviceController;
import ua.kiev.dimoon.portal.back.model.domain.Device;
import ua.kiev.dimoon.portal.back.model.dto.BaseResult;
import ua.kiev.dimoon.portal.back.repositories.DeviceRepository;
import ua.kiev.dimoon.portal.back.services.interfaces.DeviceService;

import javax.validation.Valid;
import java.util.List;
import java.util.Objects;

/**
 * Created by lutay.d on 31.01.2017.
 */
@Api
@RestController
@RequestMapping("/devices")
public class DeviceControllerImpl implements DeviceController {
    private static final Logger LOG = LoggerFactory.getLogger(DeviceControllerImpl.class);
    @Autowired
    private DeviceRepository deviceRepository;
    private DeviceService deviceService;

    @Autowired
    public DeviceControllerImpl setDeviceService(DeviceService deviceService) {
        this.deviceService = deviceService;
        return this;
    }

    @Override
    @RequestMapping(method = RequestMethod.GET)
    public DeferredResult<ResponseEntity<BaseResult<List<Device>>>> getUserDevices() {
        Long userId = 1L;
        DeferredResult<ResponseEntity<BaseResult<List<Device>>>> deferredResult = new DeferredResult<>();
        deviceRepository.findByUser_Id(userId).whenComplete((devices, throwable) -> {
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

    @Override
    @RequestMapping(method = RequestMethod.POST)
    public DeferredResult<ResponseEntity<BaseResult<Device>>> createOrUpdate(
            @RequestBody  @Valid Device device) {
        DeferredResult<ResponseEntity<BaseResult<Device>>> deferredResult = new DeferredResult<>();
        deviceService.createOrUpdate(device).whenComplete((savedDevice, throwable) -> {
            if (Objects.nonNull(throwable)) {
                deferredResult.setErrorResult(throwable.getCause());
            } else {
                LOG.debug("saved device: {}", savedDevice);
                deferredResult.setResult(
                        new ResponseEntity<>(new BaseResult<>(savedDevice), HttpStatus.OK)
                );
            }
        });
        return deferredResult;
    }

    @Override
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public DeferredResult<ResponseEntity<BaseResult<Void>>> delete(@PathVariable Long id) {
        DeferredResult<ResponseEntity<BaseResult<Void>>> deferredResult = new DeferredResult<>();
        deviceRepository.delete(id).whenComplete((aVoid, throwable) -> {
            if (Objects.nonNull(throwable)) {
                deferredResult.setErrorResult(throwable.getCause());
            }
            deferredResult.setResult(new ResponseEntity<>(new BaseResult<>(), HttpStatus.OK));
        });
        return deferredResult;
    }

}
