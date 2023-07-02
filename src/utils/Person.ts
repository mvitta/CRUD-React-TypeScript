export class Person {
  private first_name: string
  private age: number
  private id: string

  constructor(first_name: string, age: number) {
    this.first_name = first_name
    this.age = age
    this.id = crypto.randomUUID()
  }

  public get getFirstName(): string {
    return this.first_name
  }

  public get getAge(): number {
    return this.age
  }

  public set setFirstName(first_name: string) {
    this.first_name = first_name
  }

  public set setAge(age: number) {
    this.age = age
  }

  public showPerson() {
    console.log(`${this.id} : ${this.first_name} - ${this.age}`)
  }
}
