const app = require("../../server");
const supertest = require("supertest");
const request = supertest(app);
const { createPost, getPosts, deleteAllPosts } = require("../../models/post");
const {
  createUser,
  deleteAllUsers,
  findUserByUsername,
} = require("../../models/user");

describe("/api/posts", () => {
  let user;

  beforeAll(async () => {
    await deleteAllUsers();
    await createUser("username", "email", "password"); // To satisfy foreign key constraint
    user = await findUserByUsername("username");
  });

  beforeEach(async () => {
    await deleteAllPosts();
  });

  it("should get no posts by default", async () => {
    const response = await request.get("/api/posts");

    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.length).toEqual(0);
  });

  it("should get the list of posts", async () => {
    await createPost("title", "body", ["tags1", "tag2"], user.id, 1);

    const response = await request.get("/api/posts");

    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.length).toEqual(1);
    expect(response.body[0].title).toEqual("title");
    expect(response.body[0].body).toEqual("body");
    expect(response.body[0].tags.length).toEqual(2);
    expect(response.body[0].owner_user_id).toEqual(user.id);
    expect(response.body[0].post_type_id).toEqual(1);
  });

  it("should save a post to the database", async () => {
    const response = await request.post("/api/posts").send({
      title: "title",
      body: "body",
      tags: ["tags1", "tag2"],
      ownerUserId: user.id,
      postTypeId: 1,
    });

    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.title).toEqual("title");
    expect(response.body.body).toEqual("body");
    expect(response.body.tags.length).toEqual(2);
    expect(response.body.owner_user_id).toEqual(user.id);
    expect(response.body.post_type_id).toEqual(1);
  });

  it("should edit a post", async () => {
    await createPost("title", "body", ["tags1", "tag2"], user.id, 1);
    const posts = await getPosts();
    const post = posts[0];
    const response = await request.put(`/api/posts/${post.id}`).send({
      title: "title modified",
      body: "body",
      tags: ["tags1", "tag2"],
      ownerUserId: user.id,
      postTypeId: 1,
    });

    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.title).toEqual("title modified");
    expect(response.body.body).toEqual("body");
    expect(response.body.tags.length).toEqual(2);
    expect(response.body.owner_user_id).toEqual(user.id);
    expect(response.body.post_type_id).toEqual(1);
  });

  it("should delete a post", async () => {
    await createPost("title", "body", ["tags1", "tag2"], user.id, 1);
    const posts = await getPosts();
    const post = posts[0];
    const response = await request.delete(`/api/posts/${post.id}`);

    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual({ success: true });
  });
});
