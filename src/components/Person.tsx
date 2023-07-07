export function Person() {
  enum Directions {
    Up,
    Left,
    Down,
    Right,
  }

  class Person {
    private first_name: string
    private age: number
    private id: string
    static direction: Directions = Directions.Up

    constructor(first_name: string, age: number) {
      this.first_name = first_name
      this.age = age
      this.id = crypto.randomUUID()
    }

    static giveDirection(d?: Directions): Directions {
      console.log(`${d} - ${this.direction} -> ${d === this.direction}`)
      if (!(d === this.direction)) {
        if (d) {
          this.direction = d
        }
      }
      return this.direction
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

    isOlder<T>(age: T) {
      enum older {
        Adult = 18,
      }
      if (typeof age === 'number') {
        if (age >= older.Adult) {
          console.log(`${this.first_name} is Older`)
        }
      }
      console.log(`array: ${new Array<boolean>(10).fill(true)}`)
    }
  }

  // const result: Directions = Person.giveDirection(Directions.Down)
  // console.log(result)
  const p = new Person('mike', 32)
  p.isOlder<number>(10)
  return <></>
}
