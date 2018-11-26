package com.softwareengineering.forum.models;

import java.util.Date;

import org.springframework.jdbc.core.RowMapper;

import lombok.Data;
//requirements:
// 1.int to hold post num
// 2. String for body
// 3. String for topic
// 4. date of creation
//5. user that posted

@Data
public class Post {
    private int postId;
    private int postLike;
    private String body;
    private String title;
    private Date creationDate;
    private int memberId;
    private Member creator;

    public Post() {

    }

    public Post(String title, String body) {
        this.title = title;
        this.body = body;
    }

    public Post(String body, String title, int member_id) {
        this.body = body;
        this.title = title;
        this.memberId = member_id;
    }

    public Post(String body, String title, Member creator) {
        this.body = body;
        this.title = title;
        this.creator = creator;
    }

    public Post(int id, String title, String body, int likes, Date creation, int member) {
        this.postId = id;
        this.title = title;
        this.body = body;
        this.postLike = likes;
        this.creationDate = creation;
        this.memberId = member;
    }

    public static RowMapper<Post> mapper = (rs, rowNum) -> {
        return new Post(rs.getInt("post_id"), rs.getString("title"), rs.getString("body"), rs.getInt("post_like"),
                rs.getTimestamp("creation_date"), rs.getInt("member_id"));
    };

}