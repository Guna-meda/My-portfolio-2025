"use client";

import { FaGithub, FaDocker } from "react-icons/fa";

export default function MicroservicesProjectPage() {
  const architectureImage = "/images/microservices-arch.png";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col gap-12 p-6 md:p-10 mt-20">

      {/* 🔥 HERO SECTION */}
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400">
          Dockerized Microservices Task System
        </h1>

        <p className="max-w-2xl text-muted-foreground">
          A backend-focused microservices architecture demonstrating event-driven
          communication using RabbitMQ, containerization with Docker, and scalable service design.
        </p>

        {/* 🧠 Architecture Image */}
        <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
          <img
            src="/images/nodejs.png"
            alt="Microservices Architecture"
            className="w-full h-full object-contain bg-black"
          />
        </div>

        {/* CTA */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://github.com/Guna-meda/nodejs-microservices"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
          >
            <FaGithub /> View Code
          </a>
        </div>
      </div>

      {/* 🔽 CONTENT */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* 🧠 LEFT - Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">

          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">
            About the System
          </h2>

          <p className="text-muted-foreground">
            This project is a fully containerized microservices system where multiple services
            communicate asynchronously through a message broker. It demonstrates how scalable
            backend systems are built in real-world applications.
          </p>

          {/* 🔥 Core Highlights */}
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Event-driven architecture using RabbitMQ</li>
            <li>Decoupled services (User, Task, Notification)</li>
            <li>Dockerized environment for easy deployment</li>
            <li>Asynchronous communication between services</li>
            <li>Scalable backend system design</li>
          </ul>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mt-4">
              Tech Stack
            </h3>
            <p className="text-muted-foreground">
              Node.js, Express, MongoDB, RabbitMQ, Docker, Docker Compose
            </p>
          </div>
        </div>

        {/* ⚙️ RIGHT - Services Breakdown */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">

          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">
            Services Breakdown
          </h2>

          <div className="bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-semibold">User Service</h3>
            <p className="text-sm text-muted-foreground">
              Handles user creation and retrieval.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-semibold">Task Service</h3>
            <p className="text-sm text-muted-foreground">
              Creates tasks and publishes events to RabbitMQ when a task is created.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-semibold">Notification Service</h3>
            <p className="text-sm text-muted-foreground">
              Listens to events from RabbitMQ and processes task creation notifications.
            </p>
          </div>

          {/* 💀 Dev Flex Section */}
          <div className="mt-4 p-4 rounded-lg border border-border bg-gradient-to-br from-green-500/10 to-transparent">
            <p className="text-sm text-muted-foreground">
              Built with a focus on real-world backend patterns like message queues,
              service decoupling, and container orchestration — not just CRUD APIs.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}