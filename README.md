# Mayur Nikam - Portfolio Website

A modern portfolio website showcasing DevOps expertise, deployed on **Red Hat OpenShift** via a **GitHub Actions** CI/CD pipeline.

## Tech Stack

- **Framework:** Next.js 14 (TypeScript)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Container:** Docker
- **CI/CD:** GitHub Actions
- **Registry:** DockerHub
- **Deployment:** Red Hat OpenShift (Developer Sandbox or CRC)

## CI/CD Pipeline

Every push to the `main` branch triggers the GitHub Actions workflow which performs the following:

1. **Build & Push** – Checks out code, builds a Docker image, and pushes it to DockerHub with a unique Commit SHA tag.
2. **Deploy** – Logs into the OpenShift Cluster.
3. **Configure** – Dynamically injects the unique image tag into the Kubernetes manifests.
4. **Release** – Applies the Deployment and Service to OpenShift, then exposes the application to the internet via an OpenShift Route.

### Required GitHub Secrets

To make the CI/CD pipeline work, add these in your GitHub Repository under **Settings > Secrets and variables > Actions**:

| Secret | Description |
|---|---|
| `DOCKERHUB_USERNAME` | Your DockerHub Username |
| `DOCKERHUB_TOKEN` | DockerHub Access Token (or password) |
| `OPENSHIFT_SERVER` | OpenShift API URL (e.g., `https://api.rm1.0a51.p1.openshiftapps.com:6443`) |
| `OPENSHIFT_TOKEN` | OpenShift Access Token |

## Local Development

### Prerequisites
- Node.js 18+
- Docker

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Infrastructure as Code (Kubernetes Manifests)

The `k8s/` folder contains declarative manifests used for OpenShift deployment:
- `deployment.yaml` specifies the container image and port 3000
- `service.yaml` handles internal cluster traffic routing
- OpenShift's `oc expose svc` automatically generates the public Route

## Author

**Mayur Nikam** – DevOps Engineer | Cloud Infrastructure Specialist
