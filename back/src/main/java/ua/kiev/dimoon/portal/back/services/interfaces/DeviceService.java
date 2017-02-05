package ua.kiev.dimoon.portal.back.services.interfaces;

import ua.kiev.dimoon.portal.back.model.domain.Device;
import ua.kiev.dimoon.portal.back.services.exceptions.PortalServiceException;

import java.util.concurrent.CompletableFuture;

/**
 * Created by admin on 04.02.2017.
 */
public interface DeviceService {
    CompletableFuture<Device> createOrUpdate(Device device) throws PortalServiceException;
}
