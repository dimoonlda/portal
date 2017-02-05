package ua.kiev.dimoon.portal.back.model.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.Objects;


@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Entity(name = "device_types")
public class DeviceType {
    @Id
    @GeneratedValue(generator = "device_types_gen", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "device_types_gen", sequenceName = "device_types_id_seq", allocationSize = 1)
    private Integer id;
    @Column(nullable = false)
    private String title;

    public DeviceType() {
    }

    public DeviceType(Integer id, String title) {
        this.id = id;
        this.title = title;
    }

    public Integer getId() {
        return id;
    }

    public DeviceType setId(Integer id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public DeviceType setTitle(String title) {
        this.title = title;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DeviceType that = (DeviceType) o;
        return Objects.equals(getId(), that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }

    @Override
    public String toString() {
        return "DeviceType{" +
                "id=" + id +
                ", title=" + title +
                '}';
    }
}
