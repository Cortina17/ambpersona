export class Person {
  constructor(public name: string, public lastname: string, public age: number) { }

  getAgeInYears(years: number): number {
    return this.age + years;
  }

  getFullName(): string {
    return `${this.name} ${this.lastname}`;
  }
}
