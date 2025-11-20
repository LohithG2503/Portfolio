'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { refineResumeAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Loader2, Sparkles, Terminal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
  data: null as { refinedResumeContent: string } | null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Refining...
        </>
      ) : (
        <>
          Refine with AI <Sparkles className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export default function AIResumeRefinerForm() {
  const [state, formAction] = useFormState(refineResumeAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'Success') {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="resumeContent" className="text-lg">Your Resume Content</Label>
        <Textarea
          id="resumeContent"
          name="resumeContent"
          placeholder="Paste your full resume content here..."
          rows={15}
          required
          className="bg-background"
        />
        {state.errors?.resumeContent && (
          <p className="text-sm text-destructive">{state.errors.resumeContent[0]}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="jobPerformanceData" className="text-lg">Job Performance Data (Optional)</Label>
          <Textarea
            id="jobPerformanceData"
            name="jobPerformanceData"
            placeholder="e.g., 'Exceeded sales targets by 20%', 'Reduced bug reports by 15%'"
            rows={5}
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="targetJobDescription" className="text-lg">Target Job Description (Optional)</Label>
          <Textarea
            id="targetJobDescription"
            name="targetJobDescription"
            placeholder="Paste the job description you are applying for here..."
            rows={5}
            className="bg-background"
          />
        </div>
      </div>

      <SubmitButton />

      {state.data && (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle className="text-xl text-primary">AI Refinement Complete!</AlertTitle>
          <AlertDescription className="mt-4 space-y-4">
            <p>Here is your AI-powered, refined resume content:</p>
            <div className="p-4 bg-muted rounded-md border text-sm whitespace-pre-wrap">
                {state.data.refinedResumeContent}
            </div>
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
}
