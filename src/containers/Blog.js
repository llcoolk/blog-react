import React, { Component } from "react";
import Card from "../components/Card";

const posts = [
  {
    PostId: 1,
    title: "Pray for Redding ",
    description:
      "Keep all the fire fighters safe and peace of mind to everyone affected!",
    imageUrl:
      "https://i2.wp.com/pulpitandpen.org/wp-content/uploads/2018/07/Screen-Shot-2018-07-27-at-11.09.50-AM.png?fit=990%2C628",
    createdAt: "2018-07-29T02:36:39.000Z",
    updatedAt: "2018-08-14T03:05:12.000Z",
    UserId: 5
  },
  {
    PostId: 2,
    title: "Pray for Redding 111111",
    description:
      "Keep all the fire fighters safe and peace of mind to everyone affected!",
    imageUrl:
      "https://i2.wp.com/pulpitandpen.org/wp-content/uploads/2018/07/Screen-Shot-2018-07-27-at-11.09.50-AM.png?fit=990%2C628",
    createdAt: "2018-07-29T03:30:10.000Z",
    updatedAt: "2018-08-07T16:08:19.000Z",
    UserId: 1
  },
  {
    PostId: 3,
    title: "posting title",
    description:
      "post description Keep all the fire fighters safe and peace of mind to everyone affected!",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN72FzETVX0wVsX2qKT-vVLFunoGEWF8z7HNo2Ll4XfQz06P_o",
    createdAt: "2018-08-07T03:44:56.000Z",
    updatedAt: "2018-08-14T03:05:45.000Z",
    UserId: 2
  },
  {
    PostId: 4,
    title: "another post",
    description:
      "post description Keep all the fire fighters safe and peace of mind to everyone affected!",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN72FzETVX0wVsX2qKT-vVLFunoGEWF8z7HNo2Ll4XfQz06P_o",
    createdAt: "2018-08-07T03:45:16.000Z",
    updatedAt: "2018-08-14T03:06:52.000Z",
    UserId: 7
  },
  {
    PostId: 5,
    title: "created using post",
    description: "another one of post description",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTST52JdA2GTC8P-5yQ5wb6DuvHC3Wivdc9dl6JVFDEMUymAv4hkQ",
    createdAt: "2018-08-07T04:07:59.000Z",
    updatedAt: "2018-08-14T03:07:58.000Z",
    UserId: 10
  },
  {
    PostId: 6,
    title: "post #6",
    description: "Post #6 description",
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/_JQv-4jfsv3aFpw83LHktIPBELE=/0x0:4291x2861/1200x800/filters:focal(1514x1341:2200x2027)/cdn.vox-cdn.com/uploads/chorus_image/image/60689557/GettyImages_1006014580.0.jpg",
    createdAt: "2018-08-07T04:08:55.000Z",
    updatedAt: "2018-08-14T03:08:06.000Z",
    UserId: 1
  },
  {
    PostId: 7,
    title: "post number 7",
    description:
      "post number 7 desciption dklksdfljafdjldkfjdlk;;afklkajflakfjalk;jdfa  kdjfksljfakdfjalsk;fjld",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJkEz3CveB5eFMAeXTNUS1tT9s1KMxPq5zJ1ZByt8JA9WvuvW2Q",
    createdAt: "2018-08-07T04:25:47.000Z",
    updatedAt: "2018-08-14T03:08:13.000Z",
    UserId: 2
  },
  {
    PostId: 8,
    title: "post number 8",
    description:
      "post number 8 desciption dklksdfljafdjldkfjdlk;;afklkajflakfjalk;jdfa  kdjfksljfakdfjalsk;fjld",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJkEz3CveB5eFMAeXTNUS1tT9s1KMxPq5zJ1ZByt8JA9WvuvW2Q",
    createdAt: "2018-08-07T15:51:06.000Z",
    updatedAt: "2018-08-07T15:51:06.000Z",
    UserId: 2
  }
];

class Blog extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Blog page</h1>
        <div className="row">
          {posts.map(post => (
            <div key={post.PostId} className="col-md-6">
              <Card
                title={post.title}
                description={post.description}
                imageUrl={post.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
