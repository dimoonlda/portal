package ua.kiev.dimoon.portal.back.repositories;

import org.springframework.data.repository.Repository;
import org.springframework.scheduling.annotation.Async;
import ua.kiev.dimoon.portal.back.model.domain.User;

import java.util.concurrent.CompletableFuture;

/**
 * Created by lutay.d on 25.01.2017.
 */
public interface UserRepository extends Repository<User, Long> {
    @Async
    CompletableFuture<User> findOneById(Long userId);

    <S extends User> S save(S user);
}
