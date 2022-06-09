import { Person } from "./person";

fdescribe("Person test", () => {

  describe("Test return fullname of perfson", () => {
    it('Should return fullname (name+lastname)', () => {
      //TRIPLE A
      //ARRANGE, ACT, ASSERT
      //ARRANGE
      const person = new Person("Diego", "Cor", 23);
      //ACT
      const rpta = person.getFullName();
      //ASSERT
      expect(person.getFullName()).toEqual("Diego Cor");
    })
  });
  describe("Test return age of perfson", () => {
    it("Should return the age of person", () => {
      const person = new Person("Phill", "Ipp", 35)
      const age = person.getAgeInYears(10);
      expect(age).toEqual(45);
    });
  });
});
