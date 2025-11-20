'use server';

import { refineResume } from '@/ai/flows/ai-refine-resume';
import { z } from 'zod';

const ResumeSchema = z.object({
  resumeContent: z.string().min(50, { message: 'Resume content must be at least 50 characters long.' }),
  jobPerformanceData: z.string().optional(),
  targetJobDescription: z.string().optional(),
});

type State = {
  message: string;
  data: { refinedResumeContent: string } | null;
  errors: {
    resumeContent?: string[];
    jobPerformanceData?: string[];
    targetJobDescription?: string[];
  } | null;
};

export async function refineResumeAction(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = ResumeSchema.safeParse({
    resumeContent: formData.get('resumeContent'),
    jobPerformanceData: formData.get('jobPerformanceData'),
    targetJobDescription: formData.get('targetJobDescription'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check the fields.',
      errors: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }

  try {
    const result = await refineResume(validatedFields.data);
    return {
      message: 'Success',
      data: result,
      errors: null,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred while refining the resume. Please try again later.',
      errors: null,
      data: null,
    };
  }
}
