import { AppLayout } from '@/components/app-layout';
import { PageHeader } from '@/components/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TextAnalysisForm } from '@/components/symptom-checker/text-analysis-form';
import { ImageAnalysisForm } from '@/components/symptom-checker/image-analysis-form';
import { VoiceAnalysisForm } from '@/components/symptom-checker/voice-analysis-form';
import { Languages, Image as ImageIcon, Mic } from 'lucide-react';

export default function SymptomCheckerPage() {
  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        <PageHeader
          title="AI Assistant"
          description="Get preliminary advice based on your symptoms or a photo."
        />
        <main className="flex-1 p-4 md:p-8">
          <Tabs defaultValue="text" className="w-full max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="text">
                <Languages className="mr-2 h-4 w-4" />
                Describe Symptoms
              </TabsTrigger>
              <TabsTrigger value="image">
                <ImageIcon className="mr-2 h-4 w-4" />
                Analyze Image
              </TabsTrigger>
              <TabsTrigger value="voice">
                <Mic className="mr-2 h-4 w-4" />
                Voice Analysis
              </TabsTrigger>
            </TabsList>
            <TabsContent value="text">
              <TextAnalysisForm />
            </TabsContent>
            <TabsContent value="image">
              <ImageAnalysisForm />
            </TabsContent>
            <TabsContent value="voice">
              <VoiceAnalysisForm />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </AppLayout>
  );
}
