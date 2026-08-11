import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonBadge,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonLabel,
  IonItem,
  IonList,
  IonToast,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from '@ionic/react';
import {
  phonePortraitOutline,
  cloudDoneOutline,
  logoGithub,
  logoFirebase,
  flashOutline,
  checkmarkCircle,
  checkmarkDoneCircleOutline,
  cubeOutline,
  layersOutline,
  chevronDownCircleOutline,
  terminalOutline,
} from 'ionicons/icons';

export const Home: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    setTimeout(() => {
      event.detail.complete();
      setToastMessage('System status updated successfully');
      setShowToast(true);
    }, 1000);
  };

  const triggerAction = (name: string) => {
    setToastMessage(`${name} executed successfully!`);
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="bg-[#0A0A0B] px-2">
          <div className="flex items-center justify-between px-3 py-1">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-[#3880FF] rounded-md"></div>
              <IonTitle className="font-extrabold tracking-tight text-base uppercase text-[#F8FAFC]">
                PROJECT_INIT.v1
              </IonTitle>
            </div>
            <span className="px-2.5 py-0.5 bg-[#1E293B] text-[#3880FF] text-[10px] font-bold tracking-wider rounded-full border border-[#3880FF]/30 uppercase">
              PWA READY
            </span>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding bg-[#0A0A0B]">
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent
            pullingIcon={chevronDownCircleOutline}
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing system..."
          />
        </IonRefresher>

        {/* Hero Bold Typography Header */}
        <div className="pt-2 pb-6">
          <h1 className="text-[42px] sm:text-[56px] leading-[0.9] font-black tracking-tighter mb-4 uppercase text-[#F8FAFC]">
            FULL <br />
            STACK <br />
            <span className="text-[#3880FF]">IONIC.</span>
          </h1>
          <p className="text-[#94A3B8] text-sm sm:text-base font-medium leading-relaxed max-w-md mb-6">
            A production-ready boilerplate architecture for hybrid mobile applications and high-performance PWAs.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <IonChip className="bg-[#1E293B] text-[#F8FAFC] font-bold text-xs m-0">
              <IonIcon icon={checkmarkCircle} color="success" />
              <IonLabel>Capacitor 6</IonLabel>
            </IonChip>
            <IonChip className="bg-[#1E293B] text-[#F8FAFC] font-bold text-xs m-0">
              <IonIcon icon={cloudDoneOutline} className="text-[#3880FF]" />
              <IonLabel>PWA Manifest</IonLabel>
            </IonChip>
          </div>

          {/* Quick Terminal Command Box */}
          <div className="bg-[#111114] p-3.5 border border-[#1E293B] rounded-xl flex items-center justify-between mb-8 shadow-inner">
            <div className="flex items-center space-x-2.5 overflow-hidden">
              <IonIcon icon={terminalOutline} className="text-[#3880FF] text-lg shrink-0" />
              <code className="text-xs font-mono text-[#F8FAFC] truncate">
                npm install @ionic/react @capacitor/core
              </code>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shrink-0 ml-2"></div>
          </div>
        </div>

        {/* Bold Numbered Steps Section */}
        <div className="space-y-6 mb-8 bg-[#0F0F12] p-5 rounded-2xl border border-[#1E293B]">
          <h2 className="text-xs font-black uppercase tracking-widest text-[#3880FF] mb-2">
            Architecture Blueprint
          </h2>

          <div className="flex items-start space-x-4">
            <span className="text-3xl font-black text-[#1E293B] select-none">01</span>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F8FAFC]">
                Project Setup
              </h3>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Vite + React TS configured for strict-mode type safety.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 pt-2 border-t border-[#1E293B]">
            <span className="text-3xl font-black text-[#1E293B] select-none">02</span>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F8FAFC]">
                Native Bridge
              </h3>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Capacitor runtime integrated for Android and iOS builds.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 pt-2 border-t border-[#1E293B]">
            <span className="text-3xl font-black text-[#1E293B] select-none">03</span>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F8FAFC]">
                CI/CD Pipelines
              </h3>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Automated Firebase deployment via GitHub Actions.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Cards */}
        <IonCard className="m-0 mb-6 rounded-2xl border border-[#1E293B] bg-[#0F0F12] shadow-xl">
          <IonCardHeader>
            <IonCardSubtitle className="text-[#3880FF] font-extrabold tracking-widest uppercase text-[10px]">
              System Components
            </IonCardSubtitle>
            <IonCardTitle className="text-lg font-black text-[#F8FAFC] uppercase tracking-tight">
              Stack Integrations
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="px-2 pb-2">
            <IonList lines="full" className="py-0">
              <IonItem className="--border-color-[#1E293B]">
                <IonIcon icon={cubeOutline} slot="start" className="text-[#3880FF]" />
                <IonLabel>
                  <h2 className="font-bold text-sm text-[#F8FAFC]">Ionic Framework 8</h2>
                  <p className="text-xs text-[#94A3B8]">Standalone UI components with mobile gestures</p>
                </IonLabel>
                <IonBadge slot="end" className="bg-[#3880FF] text-white font-bold text-[10px]">
                  Frontend
                </IonBadge>
              </IonItem>

              <IonItem className="--border-color-[#1E293B]">
                <IonIcon icon={phonePortraitOutline} slot="start" className="text-[#10B981]" />
                <IonLabel>
                  <h2 className="font-bold text-sm text-[#F8FAFC]">Capacitor Native Bridge</h2>
                  <p className="text-xs text-[#94A3B8]">Android & iOS hardware runtime wrapper</p>
                </IonLabel>
                <IonBadge slot="end" className="bg-[#10B981] text-white font-bold text-[10px]">
                  Mobile
                </IonBadge>
              </IonItem>

              <IonItem className="--border-color-[#1E293B]">
                <IonIcon icon={flashOutline} slot="start" className="text-[#F59E0B]" />
                <IonLabel>
                  <h2 className="font-bold text-sm text-[#F8FAFC]">Vite + React + TS</h2>
                  <p className="text-xs text-[#94A3B8]">Ultra-fast bundling & strict type safety</p>
                </IonLabel>
                <IonBadge slot="end" className="bg-[#F59E0B] text-black font-bold text-[10px]">
                  Core
                </IonBadge>
              </IonItem>

              <IonItem lines="none">
                <IonIcon icon={logoFirebase} slot="start" className="text-[#EF4444]" />
                <IonLabel>
                  <h2 className="font-bold text-sm text-[#F8FAFC]">Firebase Hosting</h2>
                  <p className="text-xs text-[#94A3B8]">Global CDN deployment target for PWA</p>
                </IonLabel>
                <IonBadge slot="end" className="bg-[#EF4444] text-white font-bold text-[10px]">
                  Cloud
                </IonBadge>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        {/* Grid Stats & Quick Actions */}
        <h2 className="text-xs font-black text-[#3880FF] uppercase tracking-widest mb-3 px-1">
          System Utilities
        </h2>
        <IonGrid className="ion-no-padding mb-6">
          <IonRow>
            <IonCol size="6" className="pr-1.5 pb-2">
              <div className="bg-[#0F0F12] rounded-2xl p-4 border border-[#1E293B] h-full flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#3880FF]/10 text-[#3880FF] flex items-center justify-center mb-2">
                    <IonIcon icon={layersOutline} className="text-lg" />
                  </div>
                  <h3 className="font-bold text-[#F8FAFC] text-xs uppercase tracking-wide">
                    Service Worker
                  </h3>
                  <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug">PWA Manifest ready</p>
                </div>
                <IonButton
                  size="small"
                  expand="block"
                  fill="outline"
                  className="mt-3 text-[10px] font-bold tracking-wider uppercase border-[#3880FF] text-[#3880FF]"
                  onClick={() => triggerAction('Service Worker Sync')}
                >
                  Sync SW
                </IonButton>
              </div>
            </IonCol>

            <IonCol size="6" className="pl-1.5 pb-2">
              <div className="bg-[#0F0F12] rounded-2xl p-4 border border-[#1E293B] h-full flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-2">
                    <IonIcon icon={checkmarkDoneCircleOutline} className="text-lg" />
                  </div>
                  <h3 className="font-bold text-[#F8FAFC] text-xs uppercase tracking-wide">
                    Capacitor Config
                  </h3>
                  <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug font-mono">
                    com.myiapp.ionicapp
                  </p>
                </div>
                <IonButton
                  size="small"
                  expand="block"
                  fill="outline"
                  color="success"
                  className="mt-3 text-[10px] font-bold tracking-wider uppercase"
                  onClick={() => triggerAction('Native Bridge Check')}
                >
                  Verify ID
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
          color="dark"
        />
      </IonContent>
    </IonPage>
  );
};
