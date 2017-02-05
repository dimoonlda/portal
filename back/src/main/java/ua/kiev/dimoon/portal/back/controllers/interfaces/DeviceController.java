package ua.kiev.dimoon.portal.back.controllers.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.context.request.async.DeferredResult;
import ua.kiev.dimoon.portal.back.model.domain.Device;
import ua.kiev.dimoon.portal.back.model.dto.BaseResult;

import java.util.List;

/**
 * Created by lutay.d on 31.01.2017.
 */
public interface DeviceController {
    DeferredResult<ResponseEntity<BaseResult<List<Device>>>> getUserDevices();

    DeferredResult<ResponseEntity<BaseResult<Device>>> createOrUpdate(Device device);
}
