package ua.kiev.dimoon.portal.back.controllers.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.context.request.async.DeferredResult;
import ua.kiev.dimoon.portal.back.model.domain.DeviceType;
import ua.kiev.dimoon.portal.back.model.dto.BaseResult;

import java.util.List;

/**
 * Created by admin on 31.01.2017.
 */
public interface DeviceTypeController {
    DeferredResult<ResponseEntity<BaseResult<List<DeviceType>>>> getDeviceTypes();
}
