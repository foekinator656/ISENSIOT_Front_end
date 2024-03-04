package hsleiden.isensiot_backend.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "frituren")
public class Frituur {
    @Id
    @GeneratedValue
    private Long id;
    private int oilVolume;
    private int panCount;
    private int panVolume;
    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;
    private String ipAddress;

}
