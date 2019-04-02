'use strict'
const Book = use('App/Models/Book')

class BookController {
  async index({ request, response }) {
    return await Book.all()
  }
  async store({ request, response }) {
    const books = request.post()
    const book1 = new Book()
    const book2 = new Book()
    book1.title = books.title1
    book2.title = books.title2
    await book1.save()
    await book2.save()

  }
  async show({ request, response, params }) {
    const id = params.id
    const book = await Book.find(id)
    console.log(book)
    response.send(book)
  }
  async destroy({ request, response, params }) {
    const id = params.id
    const book = await Book.find(id)
    console.log(book)
    await book.delete()    
  }
}

module.exports = BookController
