import { lazyrouter } from "express/lib/application";

export const fakeUser = {
  username: "Nick",
  loggedIn: false,
};
let videos = [
  {
    title: "Hello",
    rating: 5,
    comments: 2,
    createdAt: "2 min ago",
    views: 79,
    id: 1,
  },
  {
    title: "pacinco",
    rating: 3,
    comments: 2,
    createdAt: "3 days ago",
    views: 1,
    id: 2,
  },
  {
    title: "path",
    rating: 2,
    comments: 5,
    createdAt: "now",
    views: 10,
    id: 3,
  },
];

export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home", fakeUser, videos });
};
export const search = (req, res) => res.send("Search");

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `Watching ${video.title}`,
    fakeUser,
    video,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing: ${video.title}`, fakeUser, video });
};

export const postEdit = (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload");
};

export const postUpload = (req, res) => {
  console.log(req.body);
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
export const upload = (req, res) => res.send("Upload Video");
