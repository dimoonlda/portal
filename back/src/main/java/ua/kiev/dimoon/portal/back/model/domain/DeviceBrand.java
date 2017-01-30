package ua.kiev.dimoon.portal.back.model.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

/**
 * Created by lutay.d on 30.01.2017.
 */
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Entity(name = "device_brands")
public class DeviceBrand {
    @Id
    @GeneratedValue(generator = "device_brands_gen", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "device_brands_gen", sequenceName = "device_brands_id_seq", allocationSize = 1)
    private Integer id;
    @Column(nullable = false)
    private String title;

    public Integer getId() {
        return id;
    }

    public DeviceBrand setId(Integer id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public DeviceBrand setTitle(String title) {
        this.title = title;
        return this;
    }

    @Override
    public String toString() {
        return "DeviceBrand{" +
                "id=" + id +
                ", title='" + title + '\'' +
                '}';
    }
}
