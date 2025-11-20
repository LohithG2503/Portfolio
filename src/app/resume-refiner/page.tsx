import AIResumeRefinerForm from "@/components/ai-resume-refiner-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function ResumeRefinerPage() {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <Card className="bg-background/60 backdrop-blur-sm border-black/5 dark:border-white/10">
                <CardHeader className="text-center">
                    <div className="flex justify-center items-center mb-4">
                        <Sparkles className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-headline">AI Resume Refiner</CardTitle>
                    <CardDescription className="text-lg">
                        Paste your resume content below and let our AI enhance it for your target job.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <AIResumeRefinerForm />
                </CardContent>
            </Card>
        </div>
    );
}
