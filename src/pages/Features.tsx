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
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonToggle,
  IonProgressBar,
  IonToast,
  IonChip,
} from '@ionic/react';
import {
  hardwareChipOutline,
  wifiOutline,
  pulseOutline,
  cameraOutline,
  downloadOutline,
  folderOpenOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';

export const Features: React.FC = () => {
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [hapticsActive, setHapticsActive] = useState(true);
  const [batteryLevel] = useState(88);
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [simulatedFiles, setSimulatedFiles] = useState([
    'app-config.json',
    'user-profile.dat',
    'offline-cache.db',
  ]);

  const triggerHaptic = (type: string) => {
    if ('vibrate' in navigator && hapticsActive) {
      navigator.vibrate(100);
    }
    setToastMsg(`Triggered Capacitor Haptic: ${type}`);
    setShowToast(true);
  };

  const addFile = () => {
    const newName = `data-log-${Date.now().toString().slice(-4)}.log`;
    setSimulatedFiles((prev) => [...prev, newName]);
    setToastMsg(`Wrote ${newName} to Capacitor Filesystem`);
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="bg-[#0A0A0B] px-2">
          <div className="flex items-center justify-between px-3 py-1">
            <IonTitle className="font-extrabold tracking-tight text-base uppercase text-[#F8FAFC]">
              CAPACITOR HARDWARE
            </IonTitle>
            <span className="px-2.5 py-0.5 bg-[#1E293B] text-[#10B981] text-[10px] font-bold tracking-wider rounded-full border border-[#10B981]/30 uppercase">
              ACTIVE API
            </span>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding bg-[#0A0A0B]">
        {/* Page Title */}
        <div className="pt-2 pb-4">
          <h1 className="text-3xl font-black uppercase tracking-tighter text-[#F8FAFC] mb-1">
            DEVICE <span className="text-[#3880FF]">DIAGNOSTICS</span>
          </h1>
          <p className="text-xs text-[#94A3B8] font-medium">
            Test Capacitor native plugins & hardware API bridge integrations.
          </p>
        </div>

        {/* Device Info & Battery */}
        <IonCard className="m-0 mb-6 rounded-2xl border border-[#1E293B] bg-[#0F0F12] shadow-xl">
          <IonCardHeader>
            <div className="flex items-center justify-between">
              <IonCardTitle className="text-base font-bold text-[#F8FAFC] uppercase tracking-wide flex items-center gap-2">
                <IonIcon icon={hardwareChipOutline} className="text-[#3880FF]" />
                Hardware Status
              </IonCardTitle>
              <span className="text-[10px] font-mono font-bold bg-[#1E293B] text-[#94A3B8] px-2 py-0.5 rounded-full border border-[#1E293B]">
                WEB / NATIVE
              </span>
            </div>
          </IonCardHeader>
          <IonCardContent>
            <div className="mb-5 bg-[#111114] p-3 rounded-xl border border-[#1E293B]">
              <div className="flex justify-between text-xs font-bold mb-1.5 text-[#F8FAFC]">
                <span className="uppercase tracking-wider text-[10px] text-[#94A3B8]">
                  Simulated Battery Charge
                </span>
                <span className="text-[#10B981]">{batteryLevel}%</span>
              </div>
              <IonProgressBar value={batteryLevel / 100} color="success" className="h-2 rounded-full" />
            </div>

            <IonList lines="full" className="py-0">
              <IonItem>
                <IonIcon
                  icon={wifiOutline}
                  slot="start"
                  className={wifiEnabled ? 'text-[#3880FF]' : 'text-[#64748B]'}
                />
                <IonLabel>
                  <h3 className="font-bold text-sm text-[#F8FAFC]">Network Interface</h3>
                  <p className="text-xs text-[#94A3B8]">
                    {wifiEnabled ? 'Online (Wi-Fi 6 Connection)' : 'Offline mode'}
                  </p>
                </IonLabel>
                <IonToggle
                  checked={wifiEnabled}
                  onIonChange={(e) => setWifiEnabled(e.detail.checked)}
                />
              </IonItem>

              <IonItem lines="none">
                <IonIcon
                  icon={pulseOutline}
                  slot="start"
                  className={hapticsActive ? 'text-[#F59E0B]' : 'text-[#64748B]'}
                />
                <IonLabel>
                  <h3 className="font-bold text-sm text-[#F8FAFC]">Tactile Haptics</h3>
                  <p className="text-xs text-[#94A3B8]">Vibration & gesture feedback engine</p>
                </IonLabel>
                <IonToggle
                  checked={hapticsActive}
                  onIonChange={(e) => setHapticsActive(e.detail.checked)}
                />
              </IonItem>
            </IonList>

            <div className="flex gap-2 mt-4 pt-2 border-t border-[#1E293B]">
              <IonButton
                size="small"
                expand="block"
                className="flex-1 text-xs font-extrabold uppercase tracking-wider"
                onClick={() => triggerHaptic('Light Impact')}
              >
                Test Haptics
              </IonButton>
              <IonButton
                size="small"
                expand="block"
                fill="outline"
                className="flex-1 text-xs font-extrabold uppercase tracking-wider border-[#3880FF] text-[#3880FF]"
                onClick={() => {
                  setToastMsg('Capacitor Camera Bridge invoked');
                  setShowToast(true);
                }}
              >
                <IonIcon icon={cameraOutline} slot="start" />
                Camera
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>

        {/* Filesystem & Storage */}
        <IonCard className="m-0 rounded-2xl border border-[#1E293B] bg-[#0F0F12] shadow-xl">
          <IonCardHeader>
            <div className="flex items-center justify-between">
              <IonCardTitle className="text-base font-bold text-[#F8FAFC] uppercase tracking-wide flex items-center gap-2">
                <IonIcon icon={folderOpenOutline} className="text-[#3880FF]" />
                Filesystem Storage
              </IonCardTitle>
              <IonButton
                size="small"
                fill="clear"
                className="text-xs font-bold uppercase text-[#3880FF]"
                onClick={addFile}
              >
                + Write Log
              </IonButton>
            </div>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="inset" className="py-0">
              {simulatedFiles.map((file, idx) => (
                <IonItem key={idx}>
                  <IonIcon icon={downloadOutline} slot="start" className="text-[#94A3B8]" />
                  <IonLabel className="text-xs font-mono text-[#F8FAFC]">{file}</IonLabel>
                  <span className="text-[9px] font-mono font-bold bg-[#1E293B] text-[#10B981] px-2 py-0.5 rounded-full uppercase">
                    PERSISTENT
                  </span>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>

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
