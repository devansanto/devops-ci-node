const app = require("../index");

describe("Unit Test Basic", () => {

  test("1 + 1 harus sama dengan 2", () => {
    expect(1 + 1).toBe(2);
  });

  test("String harus sama", () => {
    expect("devops").toBe("devops");
  });

  test("Boolean true", () => {
    expect(true).toBe(true);
  });

  test("Array length", () => {
    const arr = [1,2,3];
    expect(arr.length).toBe(3);
  });

  test("Object test", () => {
    const user = {name: "Devan"};
    expect(user.name).toBe("Devan");
  });

});