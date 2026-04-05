"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function AIGovernedRBACPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col gap-12 p-6 md:p-10 mt-20">

      {/* 🔥 HERO */}
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
          AI-Governed RBAC System
        </h1>

        <p className="max-w-2xl text-muted-foreground">
          A governance layer that controls what an AI is allowed to respond with  
          enforcing role-based and need-based access before any data reaches the model.
        </p>

        {/* Preview Image */}
        <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
          <img
            src="/images/rbac.png"
            alt="AI Governed RBAC"
            className="w-full h-full object-contain bg-black"
          />
        </div>

        {/* CTA */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://github.com/your-repo-link"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
          >
            <FaGithub /> View Code
          </a>

          
        </div>
      </div>

      {/* 🔽 CONTENT */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">

          <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
            About the System
          </h2>

          <p className="text-muted-foreground">
            This project introduces a governance layer between users and AI systems.
            Instead of directly sending queries to the model, every request is first
            validated against access control policies to prevent unauthorized data exposure.
          </p>

          {/* Highlights */}
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Role + Level based access control (NRL)</li>
            <li>Policy engine to evaluate ALLOW / DENY decisions</li>
            <li>AI query gateway that filters sensitive data</li>
            <li>Audit logging for compliance and traceability</li>
            <li>Secure-by-default AI responses</li>
          </ul>

          {/* Concept */}
          <div className="mt-4 p-4 rounded-lg border border-border bg-gradient-to-br from-purple-500/10 to-transparent">
            <p className="text-sm text-muted-foreground">
              AI is not the decision-maker , access control is.  
              The system ensures the model only sees what the user is authorized to access.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-4">
              Tech Stack
            </h3>
            <p className="text-muted-foreground">
              React, Tailwind CSS, Node.js, Policy Engine, OpenAI API ,Pinecone
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">

          <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
            System Flow
          </h2>

          <div className="bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-semibold">1. Authentication</h3>
            <p className="text-sm text-muted-foreground">
              User identity is verified before processing any request.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-semibold">2. Policy Evaluation</h3>
            <p className="text-sm text-muted-foreground">
              Role and access level are checked to determine if the request is allowed.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-semibold">3. AI Gateway</h3>
            <p className="text-sm text-muted-foreground">
              Only permitted data is forwarded to the AI model.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-semibold">4. Audit Logging</h3>
            <p className="text-sm text-muted-foreground">
              Every request, decision, and response is logged for transparency.
            </p>
          </div>

          {/* Dev Flex */}
          <div className="mt-4 p-4 rounded-lg border border-border bg-gradient-to-br from-purple-500/10 to-transparent">
            <p className="text-sm text-muted-foreground">
              Built to solve a real enterprise problem — controlling AI behavior 
              in sensitive environments where unrestricted responses can lead to data leaks.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}