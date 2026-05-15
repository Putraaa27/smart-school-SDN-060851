import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/react-start";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway";

const SYSTEM_PROMPT = `You are the friendly AI assistant for UPT SD Negeri 060851, a public elementary school in Medan, Indonesia.

School facts you know:
- Name: UPT SD Negeri 060851
- NPSN: 10220784
- Accreditation: B
- Established: 1910
- Curriculum: Kurikulum 2013
- Status: Public Elementary School (Sekolah Dasar Negeri)
- Address: Jl. Madong Lubis 1, Sei Kera Hilir II, Medan Perjuangan, Medan, Sumatera Utara, Indonesia
- Operational days: Monday to Saturday
- Operational hours: 07:00 – 13:00 WIB
- School area: 2,926 m²
- Teachers: 8, Staff: 2
- Classrooms: 6, Library: 1
- Teacher toilets: 4, Student toilets: 10
- Internet: available, Electricity: available, Laboratory: not available

Be warm, concise, and helpful. Answer in the language the user writes (Indonesian or English). Use markdown when useful. If asked something you don't know, say so politely and suggest contacting the school.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const model = gateway("google/gemini-3-flash-preview");
        const result = streamText({
          model,
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });
        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});