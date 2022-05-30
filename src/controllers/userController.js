import { fakeUser } from "./videoControllers";

export const join = (req, res) => res.send("Join");

export const login = (req, res) => {
  fakeUser.loggedIn = true;
  return res.render("login", { pageTitle: "Login", fakeUser });
};

export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Delete User");

export const logout = (req, res) => {
  fakeUser.loggedIn = false;
  return res.render("logout", { pageTitle: "Logout", fakeUser });
};

export const see = (req, res) => res.send("See User");
