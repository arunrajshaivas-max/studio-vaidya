
export const translations = {
    English: {
      dashboard: {
        title: "Welcome to VAIDYA",
        description: "Your personal AI health assistant.",
        featureCards: {
          aiAssistant: {
            title: "AI Assistant",
            description: "Get instant health advice by describing your symptoms or uploading an image.",
            cta: "Get Diagnosis",
          },
          appointments: {
            title: "Appointments",
            description: "Book and manage your appointments with healthcare professionals.",
            cta: "Book Now",
          },
          healthTracker: {
            title: "Health Tracker",
            description: "Monitor your medications and vital signs to stay on top of your health.",
            cta: "View Tracker",
          },
          healthRecords: {
            title: "Health Records",
            description: "Access your complete medical history and past consultations securely.",
            cta: "View Records",
          },
        },
        reminders: {
            title: "Today's Reminders",
            description: "Your medication and appointments for today.",
            medication: "Take Paracetamol - 1 tablet at 2:00 PM",
            appointment: "Appointment with Dr. Sharma at 4:30 PM",
        }
      },
      symptomChecker: {
        page: {
            title: "AI Assistant",
            description: "Get preliminary advice based on your symptoms or a photo.",
            tabs: {
                text: "Describe Symptoms",
                image: "Analyze Image",
                voice: "Voice Analysis",
            },
        },
        text: {
            title: "Describe Your Symptoms",
            description: "Select your language and describe your symptoms. Our AI will provide preliminary advice.",
            languageLabel: "Language",
            languagePlaceholder: "Select a language",
            symptomsLabel: "Symptoms",
            symptomsPlaceholder: "e.g., I have a headache and a slight fever...",
            getAdviceButton: "Get AI Advice",
            analyzingButton: "Analyzing...",
            resultTitle: "AI Health Assistant's Advice",
            readAloudButton: "Read Aloud",
            pauseButton: "Pause",
            disclaimer: {
                title: "Disclaimer",
                text: "This is a preliminary analysis by an AI and is not a substitute for professional medical advice. Please consult a qualified healthcare provider for an accurate diagnosis and treatment.",
            }
        },
        image: {
            title: "Analyze an Image",
            description: "Upload a photo of a visible symptom (e.g., skin rash, wound) for a preliminary AI diagnosis.",
            uploadArea: "Click or drag to upload an image",
            optionalDescriptionLabel: "Optional Description",
            optionalDescriptionPlaceholder: "e.g., This rash appeared 2 days ago and is itchy.",
            analyzeButton: "Analyze Image",
            analyzingButton: "Analyzing...",
            resultTitle: "AI Analysis Result",
            preliminaryDiagnosisLabel: "Preliminary Diagnosis",
            assessedSeverityLabel: "Assessed Severity",
            recommendationLabel: "Recommendation",
            disclaimer: {
                title: "Disclaimer",
                text: "This is a preliminary analysis by an AI and is not a substitute for professional medical advice. Please consult a qualified healthcare provider for an accurate diagnosis and treatment.",
            }
        },
        voice: {
            title: "Analyze Symptoms via Voice",
            description: "Record yourself describing your symptoms. Our AI will analyze the audio.",
            languageLabel: "Language",
            languagePlaceholder: "Select a language",
            startRecording: "Click to start recording.",
            recording: "Recording... Click to stop.",
            analyzing: "Analyzing...",
            resultTitle: "AI Analysis Result",
            possibleCausesLabel: "Possible Causes",
            suggestedNextStepsLabel: "Suggested Next Steps",
            disclaimer: {
                title: "Disclaimer",
                text: "This is a preliminary analysis by an AI and is not a substitute for professional medical advice. Please consult a qualified healthcare provider for an accurate diagnosis and treatment.",
            }
        }
      }
    },
    Hindi: {
      dashboard: {
        title: "वैद्य में आपका स्वागत है",
        description: "आपका व्यक्तिगत एआई स्वास्थ्य सहायक।",
        featureCards: {
          aiAssistant: {
            title: "एआई सहायक",
            description: "अपने लक्षणों का वर्णन करके या एक छवि अपलोड करके तुरंत स्वास्थ्य सलाह प्राप्त करें।",
            cta: "निदान प्राप्त करें",
          },
          appointments: {
            title: "अपॉइंटमेंट्स",
            description: "स्वास्थ्य पेशेवरों के साथ अपनी अपॉइंटमेंट्स बुक और प्रबंधित करें।",
            cta: "अभी बुक करें",
          },
          healthTracker: {
            title: "स्वास्थ्य ट्रैकर",
            description: "अपने स्वास्थ्य पर नज़र रखने के लिए अपनी दवाओं और महत्वपूर्ण संकेतों की निगरानी करें।",
            cta: "ट्रैकर देखें",
          },
          healthRecords: {
            title: "स्वास्थ्य रिकॉर्ड",
            description: "अपने संपूर्ण चिकित्सा इतिहास और पिछली परामर्शों तक सुरक्षित रूप से पहुँचें।",
            cta: "रिकॉर्ड देखें",
          },
        },
        reminders: {
            title: "आज के अनुस्मारक",
            description: "आज के लिए आपकी दवाएं और अपॉइंटमेंट्स।",
            medication: "पैरासिटामोल - दोपहर 2:00 बजे 1 टैबलेट लें",
            appointment: "डॉ. शर्मा के साथ शाम 4:30 बजे अपॉइंटमेंट",
        }
      },
      symptomChecker: {
        page: {
            title: "एआई सहायक",
            description: "अपने लक्षणों या एक तस्वीर के आधार पर प्रारंभिक सलाह प्राप्त करें।",
            tabs: {
                text: "लक्षणों का वर्णन करें",
                image: "छवि का विश्लेषण करें",
                voice: "आवाज विश्लेषण",
            },
        },
        text: {
            title: "अपने लक्षणों का वर्णन करें",
            description: "अपनी भाषा चुनें और अपने लक्षणों का वर्णन करें। हमारा AI प्रारंभिक सलाह प्रदान करेगा।",
            languageLabel: "भाषा",
            languagePlaceholder: "एक भाषा चुनें",
            symptomsLabel: "लक्षण",
            symptomsPlaceholder: "उदा., मुझे सिरदर्द और हल्का बुखार है...",
            getAdviceButton: "AI सलाह प्राप्त करें",
            analyzingButton: "विश्लेषण हो रहा है...",
            resultTitle: "AI स्वास्थ्य सहायक की सलाह",
            readAloudButton: "जोर से पढ़ें",
            pauseButton: "रोकें",
            disclaimer: {
                title: "अस्वीकरण",
                text: "यह AI द्वारा किया गया एक प्रारंभिक विश्लेषण है और यह पेशेवर चिकित्सा सलाह का विकल्प नहीं है। कृपया सटीक निदान और उपचार के लिए एक योग्य स्वास्थ्य सेवा प्रदाता से परामर्श करें।",
            }
        },
        image: {
            title: "एक छवि का विश्लेषण करें",
            description: "प्रारंभिक AI निदान के लिए एक दृश्य लक्षण (जैसे, त्वचा पर लाल चकत्ते, घाव) की एक तस्वीर अपलोड करें।",
            uploadArea: "एक छवि अपलोड करने के लिए क्लिक करें या खींचें",
            optionalDescriptionLabel: "वैकल्पिक विवरण",
            optionalDescriptionPlaceholder: "उदा., यह दाने 2 दिन पहले दिखाई दिए और खुजली हो रही है।",
            analyzeButton: "छवि का विश्लेषण करें",
            analyzingButton: "विश्लेषण हो रहा है...",
            resultTitle: "AI विश्लेषण परिणाम",
            preliminaryDiagnosisLabel: "प्रारंभिक निदान",
            assessedSeverityLabel: "आकलित गंभीरता",
            recommendationLabel: "सिफारिश",
            disclaimer: {
                title: "अस्वीकरण",
                text: "यह AI द्वारा किया गया एक प्रारंभिक विश्लेषण है और यह पेशेवर चिकित्सा सलाह का विकल्प नहीं है। कृपया सटीक निदान और उपचार के लिए एक योग्य स्वास्थ्य सेवा प्रदाता से परामर्श करें।",
            }
        },
        voice: {
            title: "आवाज के माध्यम से लक्षणों का विश्लेषण करें",
            description: "अपने लक्षणों का वर्णन करते हुए खुद को रिकॉर्ड करें। हमारा AI ऑडियो का विश्लेषण करेगा।",
            languageLabel: "भाषा",
            languagePlaceholder: "एक भाषा चुनें",
            startRecording: "रिकॉर्डिंग शुरू करने के लिए क्लिक करें।",
            recording: "रिकॉर्डिंग हो रही है... रोकने के लिए क्लिक करें।",
            analyzing: "विश्लेषण हो रहा है...",
            resultTitle: "AI विश्लेषण परिणाम",
            possibleCausesLabel: "संभावित कारण",
            suggestedNextStepsLabel: "सुझाए गए अगले चरण",
            disclaimer: {
                title: "अस्वीकरण",
                text: "यह AI द्वारा किया गया एक प्रारंभिक विश्लेषण है और यह पेशेवर चिकित्सा सलाह का विकल्प नहीं है। कृपया सटीक निदान और उपचार के लिए एक योग्य स्वास्थ्य सेवा प्रदाता से परामर्श करें।",
            }
        }
      }
    },
    Kannada: {
        dashboard: {
          title: "ವೈದ್ಯಕ್ಕೆ ಸ್ವಾಗತ",
          description: "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಎಐ ಆರೋಗ್ಯ ಸಹಾಯಕ.",
          featureCards: {
            aiAssistant: {
              title: "ಎಐ ಸಹಾಯಕ",
              description: "ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸುವ ಮೂಲಕ ಅಥವಾ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡುವ ಮೂಲಕ ತ್ವರಿತ ಆರೋಗ್ಯ ಸಲಹೆ ಪಡೆಯಿರಿ.",
              cta: "ರೋಗನಿರ್ಣಯ ಪಡೆಯಿರಿ",
            },
            appointments: {
              title: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು",
              description: "ಆರೋಗ್ಯ ವೃತ್ತಿಪರರೊಂದಿಗೆ ನಿಮ್ಮ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳನ್ನು ಬುಕ್ ಮಾಡಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.",
              cta: "ಈಗಲೇ ಬುಕ್ ಮಾಡಿ",
            },
            healthTracker: {
              title: "ಆರೋಗ್ಯ ಟ್ರ್ಯಾಕರ್",
              description: "ನಿಮ್ಮ ಆರೋಗ್ಯದ ಮೇಲೆ ನಿಗಾ ಇಡಲು ನಿಮ್ಮ ಔಷಧಿಗಳು ಮತ್ತು ಪ್ರಮುಖ ಚಿಹ್ನೆಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ.",
              cta: "ಟ್ರ್ಯಾಕರ್ ವೀಕ್ಷಿಸಿ",
            },
            healthRecords: {
              title: "ಆರೋಗ್ಯ ದಾಖಲೆಗಳು",
              description: "ನಿಮ್ಮ ಸಂಪೂರ್ಣ ವೈದ್ಯಕೀಯ ಇತಿಹಾಸ ಮತ್ತು ಹಿಂದಿನ ಸಮಾಲೋಚನೆಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಪ್ರವೇಶಿಸಿ.",
              cta: "ದಾಖಲೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
            },
          },
          reminders: {
              title: "ಇಂದಿನ ಜ್ಞಾಪನೆಗಳು",
              description: "ಇಂದು ನಿಮ್ಮ ಔಷಧಿ ಮತ್ತು ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು.",
              medication: "ಪ್ಯಾರಸಿಟಮಾಲ್ - ಮಧ್ಯಾಹ್ನ 2:00 ಗಂಟೆಗೆ 1 ಟ್ಯಾಬ್ಲೆಟ್ ತೆಗೆದುಕೊಳ್ಳಿ",
              appointment: "ಡಾ. ಶರ್ಮಾ ಅವರೊಂದಿಗೆ ಸಂಜೆ 4:30 ಕ್ಕೆ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್",
          }
        },
        symptomChecker: {
            page: {
                title: "ಎಐ ಸಹಾಯಕ",
                description: "ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳು ಅಥವಾ ಫೋಟೋ ಆಧರಿಸಿ ಪ್ರಾಥಮಿಕ ಸಲಹೆ ಪಡೆಯಿರಿ.",
                tabs: {
                    text: "ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ",
                    image: "ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
                    voice: "ಧ್ವನಿ ವಿಶ್ಲೇಷಣೆ",
                },
            },
            text: {
                title: "ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ",
                description: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ. ನಮ್ಮ AI ಪ್ರಾಥಮಿಕ ಸಲಹೆಯನ್ನು ನೀಡುತ್ತದೆ.",
                languageLabel: "ಭಾಷೆ",
                languagePlaceholder: "ಒಂದು ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                symptomsLabel: "ರೋಗಲಕ್ಷಣಗಳು",
                symptomsPlaceholder: "ಉದಾ., ನನಗೆ ತಲೆನೋವು ಮತ್ತು ಸ್ವಲ್ಪ ಜ್ವರವಿದೆ...",
                getAdviceButton: "AI ಸಲಹೆ ಪಡೆಯಿರಿ",
                analyzingButton: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
                resultTitle: "AI ಆರೋಗ್ಯ ಸಹಾಯಕನ ಸಲಹೆ",
                readAloudButton: "ಗಟ್ಟಿಯಾಗಿ ಓದಿ",
                pauseButton: "ವಿರಾಮ",
                disclaimer: {
                    title: "ಹಕ್ಕು ನಿರಾಕರಣೆ",
                    text: "ಇದು AI ಯ ಪ್ರಾಥಮಿಕ ವಿಶ್ಲೇಷಣೆಯಾಗಿದೆ ಮತ್ತು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ. ದಯವಿಟ್ಟು ನಿಖರವಾದ ರೋಗನಿರ್ಣಯ ಮತ್ತು ಚಿಕಿತ್ಸೆಗಾಗಿ ಅರ್ಹ ಆರೋಗ್ಯ ಪೂರೈಕೆದಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
                }
            },
            image: {
                title: "ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
                description: "ಪ್ರಾಥಮಿಕ AI ರೋಗನಿರ್ಣಯಕ್ಕಾಗಿ ಗೋಚರ ರೋಗಲಕ್ಷಣದ (ಉದಾ., ಚರ್ಮದ ದದ್ದು, ಗಾಯ) ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
                uploadArea: "ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಎಳೆಯಿರಿ",
                optionalDescriptionLabel: "ಐಚ್ಛಿಕ ವಿವರಣೆ",
                optionalDescriptionPlaceholder: "ಉದಾ., ಈ ದದ್ದು 2 ದಿನಗಳ ಹಿಂದೆ ಕಾಣಿಸಿಕೊಂಡಿತು ಮತ್ತು ತುರಿಕೆಯಾಗಿದೆ.",
                analyzeButton: "ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
                analyzingButton: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
                resultTitle: "AI ವಿಶ್ಲೇಷಣೆ ಫಲಿತಾಂಶ",
                preliminaryDiagnosisLabel: "ಪ್ರಾಥಮಿಕ ರೋಗನಿರ್ಣಯ",
                assessedSeverityLabel: "ಅಂದಾಜು ತೀವ್ರತೆ",
                recommendationLabel: "ಶಿಫಾರಸು",
                disclaimer: {
                    title: "ಹಕ್ಕು ನಿರಾಕರಣೆ",
                    text: "ಇದು AI ಯ ಪ್ರಾಥಮಿಕ ವಿಶ್ಲೇಷಣೆಯಾಗಿದೆ ಮತ್ತು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ. ದಯವಿಟ್ಟು ನಿಖರವಾದ ರೋಗನಿರ್ಣಯ ಮತ್ತು ಚಿಕಿತ್ಸೆಗಾಗಿ ಅರ್ಹ ಆರೋಗ್ಯ ಪೂರೈಕೆದಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
                }
            },
            voice: {
                title: "ಧ್ವನಿ ಮೂಲಕ ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
                description: "ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸುವಾಗ ನಿಮ್ಮನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ. ನಮ್ಮ AI ಆಡಿಯೊವನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ.",
                languageLabel: "ಭಾಷೆ",
                languagePlaceholder: "ಒಂದು ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                startRecording: "ರೆಕಾರ್ಡಿಂಗ್ ಪ್ರಾರಂಭಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ.",
                recording: "ರೆಕಾರ್ಡಿಂಗ್ ಆಗುತ್ತಿದೆ... ನಿಲ್ಲಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ.",
                analyzing: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
                resultTitle: "AI ವಿಶ್ಲೇಷಣೆ ಫಲಿತಾಂಶ",
                possibleCausesLabel: "ಸಂಭವನೀಯ ಕಾರಣಗಳು",
                suggestedNextStepsLabel: "ಸೂಚಿಸಲಾದ ಮುಂದಿನ ಕ್ರಮಗಳು",
                disclaimer: {
                    title: "ಹಕ್ಕು ನಿರಾಕರಣೆ",
                    text: "ಇದು AI ಯ ಪ್ರಾಥಮಿಕ ವಿಶ್ಲೇಷಣೆಯಾಗಿದೆ ಮತ್ತು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ. ದಯವಿಟ್ಟು ನಿಖರವಾದ ರೋಗನಿರ್ಣಯ ಮತ್ತು ಚಿಕಿತ್ಸೆಗಾಗಿ ಅರ್ಹ ಆರೋಗ್ಯ ಪೂರೈಕೆದಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
                }
            }
        }
    },
    Tamil: {
        dashboard: {
          title: "வைத்யாவிற்கு வரவேற்கிறோம்",
          description: "உங்கள் தனிப்பட்ட AI சுகாதார உதவியாளர்.",
          featureCards: {
            aiAssistant: {
              title: "AI உதவியாளர்",
              description: "உங்கள் அறிகுறிகளை விவரிப்பதன் மூலமோ அல்லது ஒரு படத்தைப் பதிவேற்றுவதன் மூலமோ உடனடி சுகாதார ஆலோசனையைப் பெறுங்கள்.",
              cta: "நோய் கண்டறிதல் செய்யுங்கள்",
            },
            appointments: {
              title: "சந்திப்புகள்",
              description: "சுகாதார நிபுணர்களுடன் உங்கள் சந்திப்புகளை முன்பதிவு செய்து நிர்வகிக்கவும்.",
              cta: "இப்போதே பதிவு செய்",
            },
            healthTracker: {
              title: "சுகாதார டிராக்கர்",
              description: "உங்கள் ஆரோக்கியத்தைக் கண்காணிக்க உங்கள் மருந்துகள் மற்றும் முக்கிய அறிகுறிகளைக் கண்காணிக்கவும்.",
              cta: "டிராக்கரைக் காண்க",
            },
            healthRecords: {
              title: "சுகாதார பதிவுகள்",
              description: "உங்கள் முழுமையான மருத்துவ வரலாறு மற்றும் கடந்தகால ஆலோசனைகளை பாதுகாப்பாக அணுகவும்.",
              cta: "பதிவுகளைக் காண்க",
            },
          },
          reminders: {
              title: "இன்றைய நினைவூட்டல்கள்",
              description: "இன்று உங்கள் மருந்து மற்றும் சந்திப்புகள்.",
              medication: "பாரசிட்டமால் - மதியம் 2:00 மணிக்கு 1 மாத்திரை எடுத்துக் கொள்ளுங்கள்",
              appointment: "டாக்டர் சர்மாவுடன் மாலை 4:30 மணிக்கு சந்திப்பு",
          }
        },
        symptomChecker: {
            page: {
                title: "AI உதவியாளர்",
                description: "உங்கள் அறிகுறிகள் அல்லது புகைப்படத்தின் அடிப்படையில் பூர்வாங்க ஆலோசனையைப் பெறுங்கள்.",
                tabs: {
                    text: "அறிகுறிகளை விவரிக்கவும்",
                    image: "படத்தை பகுப்பாய்வு செய்யவும்",
                    voice: "குரல் பகுப்பாய்வு",
                },
            },
            text: {
                title: "உங்கள் அறிகுறிகளை விவரிக்கவும்",
                description: "உங்கள் மொழியைத் தேர்ந்தெடுத்து உங்கள் அறிகுறிகளை விவரிக்கவும். எங்கள் AI பூர்வாங்க ஆலோசனையை வழங்கும்.",
                languageLabel: "மொழி",
                languagePlaceholder: "एक மொழியைத் தேர்ந்தெடுக்கவும்",
                symptomsLabel: "அறிகுறிகள்",
                symptomsPlaceholder: "எ.கா., எனக்கு தலைவலி மற்றும் லேசான காய்ச்சல் உள்ளது...",
                getAdviceButton: "AI ஆலோசனையைப் பெறுங்கள்",
                analyzingButton: "பகுப்பாய்வு செய்யப்படுகிறது...",
                resultTitle: "AI சுகாதார உதவியாளரின் அறிவுரை",
                readAloudButton: "உரக்க வாசிக்கவும்",
                pauseButton: "இடைநிறுத்து",
                disclaimer: {
                    title: "பொறுப்புத் துறப்பு",
                    text: "இது ஒரு AI இன் பூர்வாங்க பகுப்பாய்வு மற்றும் தொழில்முறை மருத்துவ ஆலோசனைக்கு மாற்றாக இல்லை. துல்லியமான நோயறிதல் மற்றும் சிகிச்சைக்கு தகுதியான சுகாதார வழங்குநரை அணுகவும்.",
                }
            },
            image: {
                title: "ஒரு படத்தைப் பகுப்பாய்வு செய்யுங்கள்",
                description: "ஒரு பூர்வாங்க AI நோயறிதலுக்காக காணக்கூடிய அறிகுறியின் (எ.கா., தோல் வெடிப்பு, காயம்) புகைப்படத்தைப் பதிவேற்றவும்.",
                uploadArea: "ഒരു படத்தைப் பதிவேற்ற கிளிக் செய்யவும் அல்லது இழுக்கவும்",
                optionalDescriptionLabel: "விருப்ப விளக்கம்",
                optionalDescriptionPlaceholder: "எ.கா., இந்த சொறி 2 நாட்களுக்கு முன்பு தோன்றி அரிப்பு.",
                analyzeButton: "படத்தை பகுப்பாய்வு செய்யுங்கள்",
                analyzingButton: "பகுப்பாய்வு செய்கிறது...",
                resultTitle: "AI பகுப்பாய்வு முடிவு",
                preliminaryDiagnosisLabel: "பூர்வாங்க निदान",
                assessedSeverityLabel: "மதிப்பிடப்பட்ட தீவிரம்",
                recommendationLabel: "பரிந்துரை",
                disclaimer: {
                    title: "பொறுப்புத் துறப்பு",
                    text: "இது ஒரு AI இன் பூர்வாங்க பகுப்பாய்வு மற்றும் தொழில்முறை மருத்துவ ஆலோசனைக்கு மாற்றாக இல்லை. துல்லியமான நோயறிதல் மற்றும் சிகிச்சைக்கு தகுதியான சுகாதார வழங்குநரை அணுகவும்.",
                }
            },
            voice: {
                title: "குரல் மூலம் அறிகுறிகளைப் பகுப்பாய்வு செய்யுங்கள்",
                description: "உங்கள் அறிகுறிகளை விவரிக்கும்போது உங்களைப் பதிவு செய்யுங்கள். எங்கள் AI ஆடியோவைப் பகுப்பாய்வு செய்யும்.",
                languageLabel: "மொழி",
                languagePlaceholder: "एक மொழியைத் தேர்ந்தெடுக்கவும்",
                startRecording: "பதிவைத் தொடங்க கிளிக் செய்க.",
                recording: "பதிவுசெய்கிறது... நிறுத்த கிளிக் செய்க.",
                analyzing: "பகுப்பாய்வு செய்கிறது...",
                resultTitle: "AI பகுப்பாய்வு முடிவு",
                possibleCausesLabel: "சாத்தியமான காரணங்கள்",
                suggestedNextStepsLabel: "பரிந்துரைக்கப்பட்ட அடுத்த படிகள்",
                disclaimer: {
                    title: "பொறுப்புத் துறப்பு",
                    text: "இது ஒரு AI இன் பூர்வாங்க பகுப்பாய்வு மற்றும் தொழில்முறை மருத்துவ ஆலோசனைக்கு மாற்றாக இல்லை. துல்லியமான நோயறிதல் மற்றும் சிகிச்சைக்கு தகுதியான சுகாதார வழங்குநரை அணுகவும்.",
                }
            }
        }
    }
  };
