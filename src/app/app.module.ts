import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './modules/home/components/login/login.component';
import { RegisterComponent } from './modules/home/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"nc-adoptame","appId":"1:720583742027:web:376f5e9643057c81fff3ce","storageBucket":"nc-adoptame.appspot.com","apiKey":"AIzaSyDxh-p9h-gXM9E_t54MsYdW9_xl7fnwVi0","authDomain":"nc-adoptame.firebaseapp.com","messagingSenderId":"720583742027"})),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"nc-adoptame","appId":"1:720583742027:web:376f5e9643057c81fff3ce","storageBucket":"nc-adoptame.appspot.com","apiKey":"AIzaSyDxh-p9h-gXM9E_t54MsYdW9_xl7fnwVi0","authDomain":"nc-adoptame.firebaseapp.com","messagingSenderId":"720583742027"})),
    provideFirebaseApp(() => initializeApp({"projectId":"nc-adoptame","appId":"1:720583742027:web:376f5e9643057c81fff3ce","storageBucket":"nc-adoptame.appspot.com","apiKey":"AIzaSyDxh-p9h-gXM9E_t54MsYdW9_xl7fnwVi0","authDomain":"nc-adoptame.firebaseapp.com","messagingSenderId":"720583742027"}))
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
