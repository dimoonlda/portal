package ua.kiev.dimoon.portal.back.model.domain;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Entity
@Access(AccessType.FIELD)
@Table(name = "devices")
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "device_gen")
    @SequenceGenerator(name = "device_gen", sequenceName = "devices_id_seq", allocationSize = 1)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @JsonIdentityInfo(
            generator = ObjectIdGenerators.PropertyGenerator.class,
            property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(name = "type_id", nullable = false)
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private DeviceType type;

    @Column(name = "model", nullable = false)
    private String model;

    @JsonIdentityInfo(
            generator = ObjectIdGenerators.PropertyGenerator.class,
            property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(name = "brand_id", nullable = false)
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private DeviceBrand brand;

    @Column(name = "dateofmanufacturing")
    private LocalDate dateOfManufacturing;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @Column(name = "url", length = 1024)
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

    @JsonProperty("type")
    public Device setType(Integer typeId) {
        this.type = new DeviceType().setId(typeId);
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

    @JsonProperty("brand")
    public Device setBrand(Integer brandId) {
        this.brand = new DeviceBrand().setId(brandId);
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
                ", user=" + user.getId() +
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
