class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.size = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.size++
  }

  prepend(value) {
    const newNodo = new Node(value)
    newNodo.next = this.head
    this.head = newNodo
    this.size++
  }

  linkedListToArrayWithoutP() {
    const array = []
    let currentNode = this.head
    while (currentNode) {
      const { id, nombre, apellido, email, date } = currentNode.value
      array.push({ id, nombre, apellido, email, date })
      currentNode = currentNode.next
    }

    return array
  }

  linkedListToArrayWithP() {
    const array = []
    let currentNode = this.head
    while (currentNode) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }

    return array
  }

  // validar, puede crashear
  find(id) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value.id === id) {
        return currentNode
      }
      currentNode = currentNode.next
    }
  }

  deleteByID(id) {
    if (this.find(id)) {
      if (this.head.value.id === id) this.head = this.head.next
      else {
        let currentNode = this.head
        // se recorre la lista hasta llegar a un nodo anterior [nodo anterior]-> [currentNode.next.value.id !== id]
        while (currentNode.next.value.id !== id) {
          currentNode = currentNode.next
        }
        // avanzamos dos nodos siquiente al actual
        const next = currentNode.next.next
        //en current.next es el nodo que coincide con el id
        currentNode.next = next
      }
    }
  }

  //   crear metodo, actualizar, y borrar, cifrar contraseña y nombre de usuario
}
