allprojects {
    group = "ch.mdma"
    version = "0.0.1-SNAPSHOT"

    repositories {
        mavenCentral()
    }
}

tasks.register("buildFrontend") {
    dependsOn(":frontend:build")
}

tasks.register("buildBackend") {
    dependsOn(":backend:build")
}
