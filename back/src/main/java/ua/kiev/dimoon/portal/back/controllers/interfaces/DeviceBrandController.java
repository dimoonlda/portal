package ua.kiev.dimoon.portal.back.controllers.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.context.request.async.DeferredResult;
import ua.kiev.dimoon.portal.back.model.domain.DeviceBrand;
import ua.kiev.dimoon.portal.back.model.dto.BaseResult;

import java.util.List;

/**
 * Created by admin on 31.01.2017.
 */
public interface DeviceBrandController {
    DeferredResult<ResponseEntity<BaseResult<List<DeviceBrand>>>> getBrands();
}
