# ShareHome

ShareHome is a cross-platform web application for organizing life in a
sharehouse through group chat, chores, and common-pot finance management.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The application can also be started in Docker:

```bash
docker compose up --build
```

The health endpoint is available at
[http://localhost:3000/api/health](http://localhost:3000/api/health).

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```
