const user = {
  name: "John",

  setAge() {
    const age = +prompt("Input number");
    this.age = Number.isInteger(age) ? age : 0;
  },
};

const admin = { ...user };
admin.role = "admin";

export { user, admin };
