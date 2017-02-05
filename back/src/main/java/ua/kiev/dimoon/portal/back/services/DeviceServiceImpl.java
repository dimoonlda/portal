package ua.kiev.dimoon.portal.back.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.kiev.dimoon.portal.back.model.domain.Device;
import ua.kiev.dimoon.portal.back.repositories.DeviceRepository;
import ua.kiev.dimoon.portal.back.repositories.UserRepository;
import ua.kiev.dimoon.portal.back.services.exceptions.PortalServiceException;
import ua.kiev.dimoon.portal.back.services.interfaces.DeviceService;

import java.util.concurrent.CompletableFuture;

/**
 * Created by admin on 04.02.2017.
 */
@Service
public class DeviceServiceImpl implements DeviceService {
    private static final Logger LOG = LoggerFactory.getLogger(DeviceServiceImpl.class);
    private DeviceRepository deviceRepository;
    private UserRepository userRepository;

    @Autowired
    public DeviceServiceImpl setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
        return this;
    }

    @Autowired
    public DeviceServiceImpl setDeviceRepository(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
        return this;
    }

    @Override
    public CompletableFuture<Device> createOrUpdate(Device device) throws PortalServiceException {
        Long userId = 1L;
        return userRepository.findOneById(userId)
                .thenAccept(device::setUser)
                .thenCompose(aVoid -> deviceRepository.save(device));/*
                .thenApply(aVoid -> {
                    LOG.debug("saved device: {}", deviceRepository.save(device));
                    return device;
                });*/
    }
}
