# Reactivity API

This API is a part of Reactivity app created with React TypeScript and .NET

## How to use

- run `git clone ...`
- run `cd API`
- run `dotnet run`

## API Resources

### Activity API Resources

All the Activity API router follows `/api/activities/`

| #   | Routers                   | Verbs  | Progress | Is Private | Description                                      |
| --- | ------------------------- | ------ | -------- | ---------- | ------------------------------------------------ |
| 1   | `/api/activities/`                | GET    | DONE     | NO        | Get Activities Info |
| 2   | `/api/activities/{id}`                | GET   | DONE     | NO         | Get an Activity |
| 3   | `/api/activities/`          | POST   | DONE     | NO         | Create a new Activity |
| 4   | `/api/activities/{id}` | PUT   | DONE     | NO         | Edit Activity |
| 5   | `/api/activities/{id}` | DELETE  | DONE     | NO         | Delete Activity |