name := "scala-sangria"

version := "0.1"

scalaVersion := "2.12.8"

libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-http"   % "10.1.6",
  "com.typesafe.akka" %% "akka-stream" % "2.5.19",

  "org.sangria-graphql" %% "sangria" % "1.4.2",
  "org.sangria-graphql" %% "sangria-circe" % "1.2.1",

  "de.heikoseeberger" %% "akka-http-circe" % "1.23.0",

  "io.circe" %% "circe-optics" %  "0.10.0",
  "io.circe" %% "circe-parser" %  "0.10.0",
)
