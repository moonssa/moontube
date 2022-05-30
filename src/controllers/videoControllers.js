import { lazyrouter } from "express/lib/application";
import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search");

export const watch = (req, res) => {
  const { id } = req.params;

  return res.render("watch", {
    pageTitle: `Watching `,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;

  res.render("edit", { pageTitle: `Editing: ` });
};

export const postEdit = (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const { title } = req.body;

  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload");
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });

    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload",
      errorMessage: error._message,
    });
  }
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
