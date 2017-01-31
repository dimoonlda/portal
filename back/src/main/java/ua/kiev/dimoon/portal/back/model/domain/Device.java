package ua.kiev.dimoon.portal.back.model.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Entity(name = "devices")
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "device_gen")
    @SequenceGenerator(name = "device_gen", sequenceName = "devices_id_seq", allocationSize = 1)
    private Long id;

    @Column(nullable = false)
    private String title;

    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(name = "type_id", nullable = false)
    @ManyToOne
    private DeviceType type;

    private String model;

    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(name = "brand_id", nullable = false)
    @ManyToOne
    private DeviceBrand brand;

    @Column(name = "dateofmanufacturing")
    private LocalDate dateOfManufacturing;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    //@JsonManagedReference
    private User user;

    private String url;

    public Long getId() {
        return id;
    }

    public Device setId(Long id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public Device setTitle(String title) {
        this.title = title;
        return this;
    }

    public DeviceType getType() {
        return type;
    }

    public Device setType(DeviceType type) {
        this.type = type;
        return this;
    }

    public String getModel() {
        return model;
    }

    public Device setModel(String model) {
        this.model = model;
        return this;
    }

    public DeviceBrand getBrand() {
        return brand;
    }

    public Device setBrand(DeviceBrand brand) {
        this.brand = brand;
        return this;
    }

    public LocalDate getDateOfManufacturing() {
        return dateOfManufacturing;
    }

    public Device setDateOfManufacturing(LocalDate dateOfManufacturing) {
        this.dateOfManufacturing = dateOfManufacturing;
        return this;
    }

    public String getUrl() {
        return url;
    }

    public Device setUrl(String url) {
        this.url = url;
        return this;
    }

    public User getUser() {
        return user;
    }

    public Device setUser(User user) {
        this.user = user;
        return this;
    }

    @Override
    public String toString() {
        return "Device{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", type=" + type +
                ", model='" + model + '\'' +
                ", brand=" + brand +
                ", dateOfManufacturing=" + dateOfManufacturing +
                ", user=" + user +
                ", url='" + url + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Device device = (Device) o;
        return Objects.equals(getId(), device.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}
