-- SELECT blog_posts.text_content, post_comments.text_content, users.username
--   FROM blog_posts
--   INNER JOIN post_comments ON blog_posts.id = post_comments.post_id
--   INNER JOIN users ON users.id = post_comments.user_id;

  
--   SELECT blog_posts.text_content, post


INSERT INTO post_comments (post_id, user_id, text_content)
  VALUES (
    (
      SELECT id FROM blog_posts
        WHERE text_content = 'Peculiar trifling absolute and wandered vicinity property yet.'
    ),
    3,
    'Interesting post'
  )
;


