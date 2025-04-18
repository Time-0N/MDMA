plugins {
  base
}

tasks.register<Exec>("npmInstall") {
  workingDir = file(".")
  commandLine = listOf("npm", "install")
}

tasks.register<Exec>("ngBuild") {
  dependsOn("npmInstall")
  workingDir = file(".")
  commandLine = listOf("npx", "ng", "build")
}

tasks.named("build") {
  dependsOn("ngBuild")
}
