# MDMA (Markdown Document Management Application)

## Overview
MDMA is a collaborative wiki-style platform that enables users to create, upload, and manage Markdown documents in a centralized knowledge base. It provides an intuitive interface for building and organizing wiki content, making it perfect for team documentation, knowledge sharing, and collaborative writing.

## Features
- 📝 Create and edit wiki pages using Markdown
- 📤 Upload existing Markdown files
- 👤 Register your own User 
- 💬 Create Comments on other wiki pages
- 📤 Share your wiki pages to others
- 🔔 Get a quick view on Changes in a News Channel
- 💬 Chat with other Users
- 🎨 Customize your own Profile

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm
- Java 21
- Docker

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Time-0N/MDMA.git
cd MDMA
```

2. Run Docker Compose:
```
Placeholder
```

The application will be available at `http://localhost:3000`

## Project Structure
```
MDMA/
├── backend/              # Spring Boot Backend
├── frontend/       # Angular Frontend
├── docker/             # Compose File and Dockerfiles
```

## Contributing 
Contributions are welcome! Please feel free to submit a Pull Request.

## License
Placeholder that will probbably get deleted

---

# Dev

The MDMA project uses [OpenAPI Generator](https://openapi-generator.tech/) to automatically generate API client and server code from a shared OpenAPI specification file.

---

## 🧪 Backend Code Generation (Spring Boot)

Generates Java interfaces and models for the REST API on the backend.

./gradlew backend:openApiGenerate

- 📄 Uses: `docs/openapi/openapi.yaml`
- 📁 Outputs to: `backend/src/main/java/ch/mdma/rest/generated`

---

## 🧩 Frontend Code Generation (Angular)

Generates TypeScript services and models to communicate with the backend API.

./gradlew frontend:generateFrontendApi

- 📄 Uses: `docs/openapi/openapi.yaml`
- 📁 Outputs to: `frontend/src/app/generated`

---

## Docker Environment Variable Setup (.env File)

For starting Compose File, needs .env in root dir.

.env Template:
```env
# Database Configuration
POSTGRES_DB=mdma_db
POSTGRES_USER=mdma_user
POSTGRES_PASSWORD=your_secure_password_here

# Keycloak Configuration
KEYCLOAK_ADMIN=admin
KEYCLOAK_ADMIN_PASSWORD=your_secure_admin_password_here
```

