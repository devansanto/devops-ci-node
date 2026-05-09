terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}

provider "docker" {}

resource "docker_image" "nodeapp" {
  name = "nginx:latest"
}

resource "docker_container" "web" {
  image = docker_image.nodeapp.image_id
  name  = "terraform-nginx"

  ports {
    internal = 80
    external = 8080
  }
}