function skillsMember() {
  var skills = {
    name: "John",
    age: 23,
    skills: ["HTML", "CSS", "JS"],
    salary: 35000,
    getSkills: function () {
      return this.skills;
    },
  };
  return skills;
}