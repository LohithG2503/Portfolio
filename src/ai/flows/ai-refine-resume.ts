'use server';

/**
 * @fileOverview An AI-powered resume refinement tool.
 *
 * - refineResume - A function that refines resume content using AI.
 * - RefineResumeInput - The input type for the refineResume function.
 * - RefineResumeOutput - The return type for the refineResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineResumeInputSchema = z.object({
  resumeContent: z
    .string()
    .describe('The current content of the resume to be refined.'),
  jobPerformanceData: z
    .string()
    .optional()
    .describe(
      'Optional data about job performance that can be used to tailor the resume.'
    ),
  targetJobDescription: z
    .string()
    .optional()
    .describe(
      'Optional description of the target job to tailor the resume towards.'
    ),
});
export type RefineResumeInput = z.infer<typeof RefineResumeInputSchema>;

const RefineResumeOutputSchema = z.object({
  refinedResumeContent: z
    .string()
    .describe('The refined content of the resume, optimized for effectiveness.'),
});
export type RefineResumeOutput = z.infer<typeof RefineResumeOutputSchema>;

export async function refineResume(input: RefineResumeInput): Promise<RefineResumeOutput> {
  return refineResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refineResumePrompt',
  input: {schema: RefineResumeInputSchema},
  output: {schema: RefineResumeOutputSchema},
  prompt: `You are an expert resume writer. Your goal is to refine the content of a resume to maximize its effectiveness, based on job performance data and the target job description if available.

Original Resume Content: {{{resumeContent}}}

Job Performance Data: {{{jobPerformanceData}}}

Target Job Description: {{{targetJobDescription}}}

Refined Resume Content:`, // The refined resume content will be generated here
});

const refineResumeFlow = ai.defineFlow(
  {
    name: 'refineResumeFlow',
    inputSchema: RefineResumeInputSchema,
    outputSchema: RefineResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
