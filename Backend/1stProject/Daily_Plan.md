```
# Month 1 Planner: DevOps-Ready Dev Server + Task REST API

## Week 1: Foundations (CLI, HTTP/REST, Node.js Basics)

### Day 1: CLI & OS Fundamentals
- **Video:** [Command Line Crash Course For Beginners (Traversy Media)](https://www.youtube.com/watch?v=uwAqEzhyjtw) (30 min)
- **Questions:**
  - What is the difference between absolute and relative paths?
  - How do you list hidden files in a directory?
  - What does the `chmod` command do?

### Day 2: HTTP & REST Fundamentals
- **Video:** [HTTP Crash Course & Exploration (Traversy Media)](https://www.youtube.com/watch?v=yk2YVIC-OeQ) (38 min)
- **Questions:**
  - What are the 5 main HTTP methods and their purposes?
  - Explain the difference between status codes 200, 201, 204, 400, 401, 403, 404, 500.
  - What is the purpose of the Content-Type header?

### Day 3: Node.js Runtime & Event Loop
- **Video:** [What the heck is the event loop anyway? (Philip Roberts)](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (26 min)
- **Questions:**
  - What is the call stack and how does it interact with the event loop?
  - Explain the difference between callbacks, promises, and async/await.
  - What is libuv and what role does it play?

### Day 4: Node.js Async Patterns - Callbacks & Promises
- **Video:** [Async JavaScript: From Callbacks to Promises to Async/Await (Web Dev Simplified)](https://www.youtube.com/watch?v=V_Kr9OSfDeU) (24 min)
- **Questions:**
  - What is callback hell and how do promises solve it?
  - How do you handle errors in promises vs async/await?
  - What is Promise.all() used for?

### Day 5: Express.js Basics - Routes
- **Video:** [Express.js Crash Course (Traversy Media)](https://www.youtube.com/watch?v=L72fhGm1tfE) (30 min)
- **Questions:**
  - What is the difference between app.get() and app.post()?
  - How do you define route parameters in Express?
  - What is the purpose of next() in route handlers?

### Day 6: Express.js Middleware
- **Video:** [Express Middleware Explained (Web Dev Simplified)](https://www.youtube.com/watch?v=lY6icfhap2o) (15 min)
- **Questions:**
  - What is middleware and what is the execution order?
  - How do you create custom middleware?
  - What is the difference between app-level and router-level middleware?

### Day 7: Weekly Review + Mini Project Setup
- **Task:** Initialize a basic Express server with one GET and one POST route (TypeScript).
- **Questions:**
  - How do you structure an Express project?
  - What should be in your .gitignore file?

## Week 2: TypeScript & Database Integration

### Day 8: TypeScript Basics - Types & Interfaces
- **Video:** [TypeScript in 100 Seconds (Fireship)](https://www.youtube.com/watch?v=zQnBQ4tB3ZA) (2 min) + [Learn TypeScript - Full Course for Beginners (freeCodeCamp)](https://www.youtube.com/watch?v=SpwzRDUQ1GI) (4 hrs)
- **Questions:**
  - What is the difference between `type` and `interface`?
  - What are generics and when would you use them?
  - How do you define optional properties?

### Day 9: TypeScript with Node.js Setup
- **Video:** [Setup Node.js with TypeScript (Web Dev Simplified)](https://www.youtube.com/watch?v=S3yCVQ1dkAY) (18 min)
- **Questions:**
  - What does tsconfig.json configure?
  - What is the difference between @types/node and the TypeScript package?
  - How do you compile TypeScript to JavaScript?

### Day 10: PostgreSQL Basics - Installation & Tables
- **Video:** [PostgreSQL Full Course (freeCodeCamp)](https://www.youtube.com/watch?v=qw--VYLpxG4) (4 hrs)
- **Questions:**
  - What are the main PostgreSQL data types?
  - What is the difference between PRIMARY KEY and UNIQUE?
  - How do you create a table with foreign key constraints?

### Day 11: SQL DML - CRUD Operations
- **Video:** [SQL Crash Course for Beginners 2022 (freeCodeCamp)](https://www.youtube.com/watch?v=DWtQU8VP3Hg) (1 hr)
- **Questions:**
  - What is the difference between INSERT, UPDATE, DELETE, and SELECT?
  - How do you use WHERE clauses effectively?
  - What is the purpose of RETURNING in PostgreSQL?

### Day 12: Node.js + PostgreSQL with pg Client
- **Video:** [Node.js & PostgreSQL Tutorial (Software Nuggets)](https://www.youtube.com/watch?v=wTDxzuFqOsg) (22 min)
- **Questions:**
  - How do you connect to PostgreSQL from Node.js?
  - What is connection pooling and why is it important?
  - How do you prevent SQL injection?

### Day 13: Project Schema Design
- **Task:** Design and create tasks table schema.
- **Questions:**
  - What fields should a task have (id, title, description, status, created_at)?
  - What are appropriate data types for each field?
  - How do you add indexes for performance?

### Day 14: Weekly Review + Database Connection Setup
- **Task:** Connect Express app to PostgreSQL and test connection.
- **Questions:**
  - Where should database credentials be stored?
  - How do you handle database connection errors?

## Week 3: Docker & API Development

### Day 15: Docker Basics - Containers & Images
- **Video:** [Docker Tutorial for Beginners (TechWorld with Nana)](https://www.youtube.com/watch?v=1wHsqFjUFM0) (35 min)
- **Questions:**
  - What is the difference between an image and a container?
  - What is a Dockerfile and what are common instructions?
  - How do you view running containers?

### Day 16: Docker Compose for Multi-Container Apps
- **Video:** [Ultimate Docker Compose Tutorial (TechWorld with Nana)](https://www.youtube.com/watch?v=SXwC9fSwct8) (18 min)
- **Questions:**
  - What is docker-compose.yml used for?
  - How do you define environment variables in Compose?
  - What is the difference between volumes and bind mounts?

### Day 17: Dockerizing Node.js Application
- **Video:** [How to build a NodeJS application with Docker | Docker (official)](https://www.youtube.com/watch?v=UcHlJNIaHOw) (15 min)
- **Questions:**
  - Why use multi-stage builds?
  - What is .dockerignore and what should it contain?
  - How do you expose ports in Docker?

### Day 18: Project: Task API - GET & POST Routes
- **Video:** [Build a REST API with Node.js and PostgreSQL (Amigoscode)](https://www.youtube.com/watch?v=HO5iiDaZO2E) (25 min)
- **Questions:**
  - How do you parse JSON request bodies?
  - What status codes should POST and GET return?
  - How do you handle validation errors?

### Day 19: Project: Task API - PUT & DELETE Routes
- **Task:** Complete CRUD operations (PUT and DELETE).
- **Questions:**
  - What is the difference between PUT and PATCH?
  - How do you handle "not found" errors?
  - What status code should DELETE return?

### Day 20: Error Handling in Express
- **Video:** [Express Error Handling (Web Dev Simplified)](https://www.youtube.com/watch?v=DyqVqaf1KnA) (12 min)
- **Questions:**
  - What is an error-handling middleware?
  - How do you create custom error classes?
  - How do you handle async errors in Express?

### Day 21: Weekly Review + Request Logging
- **Task:** Add morgan or winston for request logging.
- **Questions:**
  - What information should be logged for each request?
  - What is the difference between development and production logging?

## Week 4: Integration, LLM Route & Finalization

### Day 22: Environment Configuration
- **Video:** [Node.js Environment Variables (Web Dev Simplified)](https://www.youtube.com/watch?v=1NvJhiEdxo8) (10 min)
- **Questions:**
  - What is dotenv and how does it work?
  - What variables should never be committed to git?
  - How do you manage different environments (dev, test, prod)?

### Day 23: Optional LLM Echo Route Setup
- **Questions:**
  - How do you make HTTP requests from Node.js to external APIs?
  - Where should API keys be stored?
  - How do you handle rate limiting?

### Day 24: Input Validation & Sanitization
- **Questions:**
  - Why is input validation important?
  - What is the difference between validation and sanitization?
  - How do you handle validation errors uniformly?

### Day 25: Testing with Docker Compose
- **Questions:**
  - How do you wait for the database to be ready before starting the app?
  - What is the proper shutdown sequence for containers?
  - How do you view logs from multiple containers?

### Day 26: API Documentation & Postman Collection
- **Questions:**
  - What information should be documented for each endpoint?
  - How do you organize environment variables in Postman?
  - What are pre-request scripts used for?

### Day 27: Code Review & Refactoring
- **Questions:**
  - Is your code DRY (Don't Repeat Yourself)?
  - Are error messages user-friendly?
  - Is your folder structure scalable?

### Day 28: Final Testing & Edge Cases
- **Questions:**
  - What happens when the database is down?
  - How does your API handle very large payloads?
  - Are there any unhandled promise rejections?

### Day 29: Deployment Preparation
- **Questions:**
  - What changes between dev and production Docker configurations?
  - How do you handle database migrations in production?
  - What security headers should be added?

### Day 30: Project Completion & Documentation
- **Questions:**
  - Can someone else set up your project in under 10 minutes?
  - What would you improve with more time?
  - What did you learn about DevOps practices?
```

