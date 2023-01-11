import { DatasInterceptor } from './datas.interceptor';

import { ApiserviceService } from './apiservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SinginComponent } from './singin/singin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,

} from '@abacritt/angularx-social-login';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { FilterPipe } from './filter.pipe';
import { GoogleprofileviewComponent } from './googleprofileview/googleprofileview.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EditprofileComponent } from './editprofile/editprofile.component';
import { AuthGuard } from './auth.guard';
import { Error404Component } from './error404/error404.component';
import { DeactivateGuard, DeactivateGuardsignin } from './deactivate.guard';
import { CommentComponent } from './comment/comment.component';
import { NgxTruncateTextModule } from 'ngx-truncate-text';

import { NgxStarsModule } from 'ngx-stars';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { CustomhoverDirective } from './customhover.directive';
import { PaymentComponent } from './payment/payment.component';
// import { ProductviewModule } from './productview/productview.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { OrderitemsComponent } from './orderitems/orderitems.component';
import { dateReducer } from './state/date.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    DashboardComponent,
  
    SinginComponent,
    NavigationComponent,
    LoginComponent,
    ProductdetailsComponent,
    HomepageComponent,
    FooterComponent,
    ViewprofileComponent,
    FilterPipe,
    GoogleprofileviewComponent,
 
    EditprofileComponent,
    Error404Component,
   
    CommentComponent,
      
        CustomhoverDirective,
               PaymentComponent,
               OrderitemsComponent
  
   
    
  ],
  imports: [
  
    // NgxTruncateTextModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    SocialLoginModule,
    NgxPaginationModule,
     FontAwesomeModule,
     NgxTruncateTextModule,

     NgxStarsModule,
     NgxStarRatingModule,
    
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    StoreModule.forRoot({dates: dateReducer}), 
  ],
  providers: [ AuthGuard, DeactivateGuard,DeactivateGuardsignin,
    ApiserviceService, {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '231034008065-dd31nofrh5lok2pabi61lkfjdgh5mfpb.apps.googleusercontent.com'
            )
          },
          
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },{
      provide:HTTP_INTERCEPTORS,useClass:DatasInterceptor,multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
