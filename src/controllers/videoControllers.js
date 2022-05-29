export const home = (req, res) => res.send("Home");
export const search = (req, res) => res.send("Search");

export const watch = (req, res) => {
  console.log(req.params);
  return res.send("Watch Video");
};
export const edit = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
export const upload = (req, res) => res.send("Upload Video");
