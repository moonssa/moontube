export const fakeUser = {
  username: "Nick",
  loggedIn: false,
};

export const home = (req, res) => {
  const videos = [
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
  return res.render("home", { pageTitle: "Home", fakeUser, videos });
};
export const search = (req, res) => res.send("Search");

export const watch = (req, res) => {
  console.log(req.params);
  return res.render("watch", { pageTitle: "Watch" });
};
export const edit = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
export const upload = (req, res) => res.send("Upload Video");
