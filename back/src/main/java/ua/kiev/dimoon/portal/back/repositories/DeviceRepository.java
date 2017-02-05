package ua.kiev.dimoon.portal.back.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.scheduling.annotation.Async;
import ua.kiev.dimoon.portal.back.model.domain.Device;

import java.util.List;
import java.util.concurrent.CompletableFuture;

/**
 * Created by lutay.d on 31.01.2017.
 */
public interface DeviceRepository extends Repository<Device, Long> {

    @Async
    @Query(value = "select * from devices where user_id = ?1", nativeQuery = true)
    CompletableFuture<List<Device>> findByUserId(Long user_id);

    @Async
    <S extends Device> CompletableFuture<S> save(S device);
}
