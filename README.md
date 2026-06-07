# DEVOPS TUGAS AKHIR

## DevOps CI Node Project

Project ini merupakan implementasi CI/CD menggunakan GitHub Actions pada aplikasi Node.js yang dikontainerisasi menggunakan Docker.

Tujuan project:
- Otomatisasi testing
- Otomatisasi build
- Otomatisasi deployment
- Monitoring aplikasi

## Anggota Kelompok

| Nama                          | NIM        | 
| Febriani Dwi Alviah           | 2310506010 | 
| Armando Firlian Ihza Yulianto | 2310506016 | 
| Devan Putra Susanto           | 2340506072 | 

---

## Tech Stack

### Frontend

* HTML
* JavaScript

### Backend

* Node.js / Express

### Database

* MYSQL

### DevOps Tools

* Docker
* Docker Compose
* GitHub Actions
* Railway

### Infrastucture

* Terraform

### Monitoring

* Promotheus

### Visualization

* Grafana

---

## Arsitektur Sistem

Developer melakukan push code ke repository GitHub.

GitHub Actions akan menjalankan proses:

1. Build aplikasi
2. Menjalankan testing
3. Build Docker image
4. Deploy ke Railway

Alur sistem:

Developer → GitHub → GitHub Actions → Docker → Railway → User

---



### Arsitektur Sistem

Developer melakukan perubahan kode pada repository GitHub.

Setiap perubahan yang di-push ke repository akan memicu GitHub Actions untuk menjalankan proses:

Checkout Source Code
Install Dependencies
Run Testing
Build Application
Build Docker Image
Deploy Application

Alur sistem:

Developer
↓
GitHub Repository
↓
GitHub Actions
↓
Testing
↓
Docker Build
↓
Deployment
↓
Application
↓
Prometheus
↓
Grafana Dashboard

---
### Deployment Dan repository

Deployment
*  https://railway.com/project/9a1266af-031d-40a0-aedd-6214186ac903/service/42c51bee-3c1f-475a-9fbc-a8acd567733a?

*  https://devansanto.github.io/devops-ci-node/

* https://github.com/ArmandoFirlian/Simpel-CI-Project/settings/pages

* https://github.com/febrianide/DEVELOPMENT-AND-OPERATION.git

Production URL:

* https://github.com/devansanto/devops-ci-node
* https://github.com/ArmandoFirlian/Simpel-CI-Project
* 
## Challenges & Lessons Learned

### Challenges

* Konfigurasi Docker
* Integrasi GitHub Actions
* Deployment Railway
* Environment Variables

### Lessons Learned

* Implementasi CI/CD
* Containerization menggunakan Docker
* Kolaborasi menggunakan Git dan GitHub
* Otomatisasi deployment

---

## License

Project ini dibuat untuk keperluan akademik pada Mata Kuliah DevOps Universitas Tidar.
