import { streamText, tool } from 'ai';
import { openai } from '@ai-sdk/openai'; // Or Google Gemini, Anthropic, etc.
import { getSession } from '@auth0/nextjs-auth0';
import { z } from 'zod';

export async function POST(req) {
  // 1. Get the current Auth0 session (Backend secure)
  const session = await getSession();
  if (!session) return new Response('Unauthorized', { status: 401 });

  const { messages } = await req.json();

  // 2. Start the AI Stream
  const result = streamText({
    model: openai('gpt-4o'), // Choose your model
    messages,
    system: "You are an autonomous project manager. Use your tools to read GitHub and schedule meetings.",
    
    // 3. Define the Tools the AI can use
    tools: {
      readGitHub: tool({
        description: 'Read the users latest commits',
        parameters: z.object({ repoName: z.string() }),
        execute: async ({ repoName }) => {
          // --- THE TOKEN VAULT MAGIC HAPPENS HERE ---
          // Make a request to Auth0's Token Exchange endpoint using session.accessToken
          // Retrieve the GitHub vault token, then fetch the commits
          return "Fetched commits: Fixed login bug, updated CSS."; 
        },
      }),
      
      scheduleMeeting: tool({
        description: 'Schedule a Google Calendar invite',
        parameters: z.object({ time: z.string(), agenda: z.string() }),
        execute: async ({ time, agenda }) => {
          // --- THE TOKEN VAULT MAGIC HAPPENS HERE ---
          // Make a request to Auth0's Token Exchange endpoint
          // Retrieve the Google vault token, then create the calendar event
          return "Meeting scheduled successfully.";
        },
      }),
    },
    maxSteps: 5, // Allows the AI to call multiple tools in a row!
  });

  return result.toDataStreamResponse();
}
