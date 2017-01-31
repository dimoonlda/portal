package ua.kiev.dimoon.portal.back.repositories;

import org.springframework.data.repository.Repository;
import ua.kiev.dimoon.portal.back.model.domain.DeviceBrand;

import java.util.List;
import java.util.concurrent.CompletableFuture;

/**
 * Created by admin on 31.01.2017.
 */
public interface DeviceBrandRepository extends Repository<DeviceBrand, Integer> {
    CompletableFuture<List<DeviceBrand>> findAll();
}
