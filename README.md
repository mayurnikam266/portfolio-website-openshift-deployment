# Mayur Nikam - Portfolio Website

A modern portfolio website showcasing DevOps expertise, deployed on **Amazon ECS** via a **GitHub Actions** CI/CD pipeline.

## Tech Stack

- **Framework:** Next.js 14 (TypeScript)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Container:** Docker
- **CI/CD:** GitHub Actions
- **Registry:** Amazon ECR
- **Deployment:** Amazon ECS (Fargate)

## CI/CD Pipeline

Every push to the `main` branch triggers the following GitHub Actions workflow:

1. **Build** – Install dependencies and build the Next.js app
2. **Dockerize** – Build a Docker image
3. **Push** – Push the image to Amazon ECR
4. **Deploy** – Update the ECS service to run the new image

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key |
| `AWS_REGION` | e.g. `us-east-1` |
| `ECR_REPOSITORY` | ECR repo name |
| `ECS_CLUSTER` | ECS cluster name |
| `ECS_SERVICE` | ECS service name |
| `CONTAINER_NAME` | Container name in the task definition |

## Local Development

### Prerequisites
- Node.js 18+
- Docker

### Run locally (Node)

```bash
git clone <repository-url>
cd devops-portfolio-cicd-aws
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Run locally (Docker)

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── navigation.tsx
│       ├── hero.tsx
│       ├── about.tsx
│       ├── skills.tsx
│       ├── projects.tsx
│       ├── experience.tsx
│       ├── education.tsx
│       └── contact.tsx
├── public/
├── Dockerfile
├── docker-compose.yml
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## AWS Infrastructure

- **ECR** – Stores Docker images
- **ECS Cluster (Fargate)** – Runs containers serverlessly
- **Task Definition** – Defines container spec (image, CPU, memory, port 3000)
- **ECS Service** – Maintains desired task count and handles rolling deploys
- **ALB (optional)** – Load balancer for HTTPS and custom domain

## Author

**Mayur Nikam** – DevOps Engineer | Cloud Infrastructure Specialist
# devops-portfolio-cicd-ecs
