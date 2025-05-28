package ch.mdma.data.model.entity;

import java.util.List;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(generator = "UUID")
    @UuidGenerator
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    @OneToMany(mappedBy = "post")
    private List<Like> likes;

    @Column(columnDefinition = "TEXT", length = 1000, nullable = false)
    private String content;

    @Column(length = 100, columnDefinition = "TEXT", nullable = false)
    private String title;

    @Column(length = 100, columnDefinition = "TEXT", nullable = false)
    private String description;
}   