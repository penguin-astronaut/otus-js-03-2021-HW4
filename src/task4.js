const user = {
  name: "John",
};

const age = +prompt("Input number");
user.age = Number.isInteger(age) ? age : 0;

const admin = Object.assign(user);
admin.role = "admin";

export { user, admin };
