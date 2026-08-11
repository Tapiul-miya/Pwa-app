import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonToggle,
  IonButton,
  IonIcon,
  IonBadge,
  IonToast,
  IonNote,
} from '@ionic/react';
import {
  settingsOutline,
  moonOutline,
  logoFirebase,
  logoGithub,
  codeWorkingOutline,
  cloudUploadOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';

export const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [autoDeploy, setAutoDeploy] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const toggleDarkMode = (isDark: boolean) => {
    setDarkMode(isDark);
    document.body.classList.toggle('dark', isDark);
    setToastMsg(isDark ? 'Dark Theme Active' : 'Light Theme Active');
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="bg-[#0A0A0B] px-2">
          <div className="flex items-center justify-between px-3 py-1">
            <IonTitle className="font-extrabold tracking-tight text-base uppercase text-[#F8FAFC]">
              CI/CD CONFIGURATION
            </IonTitle>
            <span className="px-2.5 py-0.5 bg-[#1E293B] text-[#F59E0B] text-[10px] font-bold tracking-wider rounded-full border border-[#F59E0B]/30 uppercase">
              DEPLOY READY
            </span>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding bg-[#0A0A0B]">
        {/* Page Title */}
        <div className="pt-2 pb-4">
          <h1 className="text-3xl font-black uppercase tracking-tighter text-[#F8FAFC] mb-1">
            PROJECT <span className="text-[#3880FF]">SETTINGS</span>
          </h1>
          <p className="text-xs text-[#94A3B8] font-medium">
            Manage PWA cache rules, Capacitor bundle targets & GitHub Actions deployment token.
          </p>
        </div>

        {/* App Preferences */}
        <IonCard className="m-0 mb-6 rounded-2xl border border-[#1E293B] bg-[#0F0F12] shadow-xl">
          <IonCardHeader>
            <IonCardTitle className="text-base font-bold text-[#F8FAFC] uppercase tracking-wide flex items-center gap-2">
              <IonIcon icon={settingsOutline} className="text-[#3880FF]" />
              App Preferences
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="full" className="py-0">
              <IonItem>
                <IonIcon icon={moonOutline} slot="start" className="text-[#3880FF]" />
                <IonLabel>
                  <h3 className="font-bold text-sm text-[#F8FAFC]">Bold Dark Palette</h3>
                  <p className="text-xs text-[#94A3B8]">High contrast #0A0A0B theme</p>
                </IonLabel>
                <IonToggle
                  checked={darkMode}
                  onIonChange={(e) => toggleDarkMode(e.detail.checked)}
                />
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={cloudUploadOutline} slot="start" className="text-[#10B981]" />
                <IonLabel>
                  <h3 className="font-bold text-sm text-[#F8FAFC]">PWA Service Worker Sync</h3>
                  <p className="text-xs text-[#94A3B8]">Automatic web asset caching</p>
                </IonLabel>
                <IonToggle
                  checked={autoDeploy}
                  onIonChange={(e) => setAutoDeploy(e.detail.checked)}
                />
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        {/* Deployment Targets */}
        <IonCard className="m-0 mb-6 rounded-2xl border border-[#1E293B] bg-[#0F0F12] shadow-xl">
          <IonCardHeader>
            <IonCardTitle className="text-base font-bold text-[#F8FAFC] uppercase tracking-wide flex items-center gap-2">
              <IonIcon icon={logoFirebase} className="text-[#EF4444]" />
              Hosting & CI/CD Pipeline
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="full" className="py-0">
              <IonItem>
                <IonLabel>
                  <h3 className="font-bold text-sm text-[#F8FAFC]">Firebase Target Directory</h3>
                  <p className="text-xs text-[#94A3B8]">Single Page Application rewrites</p>
                </IonLabel>
                <span className="text-[10px] font-mono font-bold bg-[#10B981]/20 text-[#10B981] px-2 py-0.5 rounded-full border border-[#10B981]/30">
                  dist/
                </span>
              </IonItem>

              <IonItem>
                <IonLabel>
                  <h3 className="font-bold text-sm text-[#F8FAFC]">Capacitor Bundle ID</h3>
                  <p className="text-xs text-[#94A3B8]">Android / iOS Package Identifier</p>
                </IonLabel>
                <IonNote slot="end" className="text-xs font-mono font-bold text-[#F8FAFC]">
                  com.myiapp.ionicapp
                </IonNote>
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={logoGithub} slot="start" className="text-[#F8FAFC]" />
                <IonLabel>
                  <h3 className="font-bold text-sm text-[#F8FAFC]">GitHub Repository Secret</h3>
                  <p className="text-xs text-[#94A3B8]">Automated deployment token</p>
                </IonLabel>
                <span className="text-[10px] font-mono font-bold bg-[#1E293B] text-[#3880FF] px-2 py-0.5 rounded-full border border-[#3880FF]/30">
                  FIREBASE_TOKEN
                </span>
              </IonItem>
            </IonList>

            <div className="mt-4 pt-2">
              <IonButton
                expand="block"
                className="font-extrabold text-xs uppercase tracking-wider"
                onClick={() => {
                  setToastMsg('Simulating GitHub Actions workflow payload...');
                  setShowToast(true);
                }}
              >
                <IonIcon icon={codeWorkingOutline} slot="start" />
                Simulate Workflow Run
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>

        <div className="text-center py-4">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#64748B]">
            Ionic Hybrid App v1.0.0 • Vite + Capacitor + Firebase
          </p>
        </div>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMsg}
          duration={2000}
          color="dark"
        />
      </IonContent>
    </IonPage>
  );
};
