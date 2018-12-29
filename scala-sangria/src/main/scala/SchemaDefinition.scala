import sangria.schema._
import sangria.macros.derive._

object SchemaDefinition {
  implicit val BookIdType = ScalarAlias[BookId, String](IDType, _.id, id ⇒ Right(BookId(id)))

  val Id = Argument("id", BookIdType)
  val BookType = deriveObjectType[Unit, Book]()
  val QueryType = ObjectType("Query", fields[BookRepo, Unit](
    Field("books", ListType(BookType),
      arguments = Id :: Nil,
      resolve = c => c.ctx.books(c arg Id))))
  val schema = Schema(QueryType)
}
