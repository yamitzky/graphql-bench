case class BookId(id: String) extends AnyVal

case class Book(id: BookId, author: String)

class BookRepo {
  def books(id: BookId): List[Book] = {
    List(Book(id = id, author = "yamitzky"))
  }
}
