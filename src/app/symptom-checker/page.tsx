
"use client";

import { AppLayout } from '@/components/app-layout';
import { PageHeader } from '@/components/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TextAnalysisForm } from '@/components/symptom-checker/text-analysis-form';
import { ImageAnalysisForm } from '@/components/symptom-checker/image-analysis-form';
import { VoiceAnalysisForm } from '@/components/symptom-checker/voice-analysis-form';
import { Languages, Image as ImageIcon, Mic } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/i18n';

export default function SymptomCheckerPage() {
  const { language } = useLanguage();
  const t = translations[language].symptomChecker.page;

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        <PageHeader
          title={t.title}
          description={t.description}
        />
        <main className="flex-1 p-4 md:p-8">
          <Tabs defaultValue="text" className="w-full max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="text">
                <Languages className="mr-2 h-4 w-4" />
                {t.tabs.text}
              </TabsTrigger>
              <TabsTrigger value="image">
                <ImageIcon className="mr-2 h-4 w-4" />
                {t.tabs.image}
              </TabsTrigger>
              <TabsTrigger value="voice">
                <Mic className="mr-2 h-4 w-4" />
                {t.tabs.voice}
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
